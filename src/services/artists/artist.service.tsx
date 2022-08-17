import React, {
  useState,
  useEffect,
  createContext,
  useCallback,
  useContext,
} from "react";
import { ApiContext } from "../api/Api";

interface Prop {
  mostPlayed: Record<string, any>[] | null;
  isLoadingMostPlayed: boolean;
  mostPlayedError: any;
  incrementArtistLikes: (id: string, mode: "inc" | "dec") => void;
  // decrementArtistLikes: (id: number) => void;
}

interface ArtistProps {
  children: React.ReactNode;
}

export const ArtistContext = createContext({} as Prop);

const ArtistProvider = (props: ArtistProps) => {
  const { api } = useContext(ApiContext);
  const [mostPlayed, setMostPlayed] = useState<Record<string, any>[] | null>(
    null
  );
  const [isLoadingMostPlayed, setIsLoadingMostPlayed] = useState(false);
  const [mostPlayedError, setMostPlayedError] = useState(null);

  const fetchMostPlayedArtist = useCallback(async () => {
    try {
      setIsLoadingMostPlayed(true);
      const { data } = await api("artist/mostPlayed", "get");
      setIsLoadingMostPlayed(false);
      setMostPlayed(data.data.payload);
    } catch (err: any) {
      setIsLoadingMostPlayed(false);
      setMostPlayedError(err.response);
    }
  }, [api]);

  useEffect(() => {
    const getMostPlayed = async () => {
      await fetchMostPlayedArtist();
    };

    getMostPlayed();
  }, [fetchMostPlayedArtist]);

  const incrementArtistLikes = (id: string, mode: "inc" | "dec") => {
    if (mostPlayed) {
      const newMostPlayed = [...mostPlayed];
      let idx: number | null = null;
      const artistInc = mostPlayed!.find(
        (art: Record<string, any>, index: number) => {
          if (art.id === id) {
            idx = index;
          }
          return art.id === id;
        }
      );
      if (mode === "inc") {
        if (artistInc) {
          artistInc.likedCount = artistInc.likedCount + 1;
        }
      } else {
        if (artistInc) {
          artistInc.likedCount = artistInc.likedCount - 1;
        }
      }
      if (idx !== null && artistInc) {
        newMostPlayed.splice(idx, 1, artistInc);
        setMostPlayed(newMostPlayed);
      }
    }
  };

  return (
    <ArtistContext.Provider
      value={{
        mostPlayed,
        isLoadingMostPlayed,
        mostPlayedError,
        incrementArtistLikes,
      }}
    >
      {props.children}
    </ArtistContext.Provider>
  );
};

export default ArtistProvider;
