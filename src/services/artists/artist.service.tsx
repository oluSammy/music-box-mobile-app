import React, {
  useState,
  useEffect,
  createContext,
  useCallback,
  useContext,
} from "react";
import axios from "axios";
import { API_URL } from "../../constants/url";
import { AuthContext } from "../authentication/auth.service";

interface Prop {
  mostPlayed: Record<string, any>[] | null;
  isLoadingMostPlayed: boolean;
  mostPlayedError: any;
}

interface ArtistProps {
  children: React.ReactNode;
}

export const ArtistContext = createContext({} as Prop);

const ArtistProvider = (props: ArtistProps) => {
  const { user } = useContext(AuthContext);
  const [mostPlayed, setMostPlayed] = useState(null);
  const [isLoadingMostPlayed, setIsLoadingMostPlayed] = useState(false);
  const [mostPlayedError, setMostPlayedError] = useState(null);

  const fetchMostPlayedArtist = useCallback(async () => {
    const config = {
      headers: { Authorization: `Bearer ${user?.data?.token}` },
    };
    const url = `${API_URL}/artist/mostPlayed`;

    try {
      setIsLoadingMostPlayed(true);
      const { data } = await axios.get(url, config);
      setIsLoadingMostPlayed(false);
      //   console.log(data);
      setMostPlayed(data.data.payload);
    } catch (err) {
      setIsLoadingMostPlayed(false);
      //   console.log(err.response);
      setMostPlayedError(err.response);
    }
  }, [user]);

  useEffect(() => {
    const getMostPlayed = async () => {
      await fetchMostPlayedArtist();
    };

    getMostPlayed();
  }, [fetchMostPlayedArtist]);

  return (
    <ArtistContext.Provider
      value={{ mostPlayed, isLoadingMostPlayed, mostPlayedError }}
    >
      {props.children}
    </ArtistContext.Provider>
  );
};

export default ArtistProvider;
