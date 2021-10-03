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
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IRecent {
  id: string;
  img: string;
  likesCount: number;
  model: string;
  title: string;
}

interface IRecentMusic {
  artist: IRecent;
  album: IRecent;
  playlist: IRecent;
}

interface Prop {
  recentMusic: IRecentMusic | null;
  isLoading: boolean;
  error: any;
  updateRecentMusic: (model: string, update: IRecent) => void;
}

interface RecentlyPlayedProps {
  children: React.ReactNode;
}

export const RecentlyPlayedContext = createContext({} as Prop);

const RecentlyPlayedProvider = (props: RecentlyPlayedProps) => {
  const { user } = useContext(AuthContext);
  const [recentMusic, setRecentMusic] = useState<IRecentMusic | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fetchRecentMusic = useCallback(async () => {
    const config = { headers: { Authorization: `Bearer ${user?.data.token}` } };
    const url = `${API_URL}recently-played`;

    try {
      setIsLoading(true);
      const recentSongs = await AsyncStorage.getItem("music-box-recent-music");
      if (recentSongs) {
        setRecentMusic(JSON.parse(recentSongs));
        setIsLoading(false);
      } else {
        const { data } = await axios.get(url, config);

        setIsLoading(false);
        const recentList = {
          album: {
            id: data.data.album[0].directory_info.id,
            img: data.data.album[0].directory_info.cover_medium,
            likesCount: data.data.album[0].directory_info.likeCount,
            model: "Album",
            title: data.data.album[0].directory_info.title,
          },
          artist: {
            id: data.data.artist[0].directory_info.id,
            img: data.data.artist[0].directory_info.picture_medium,
            likesCount: data.data.artist[0].directory_info.likedCount,
            model: "Artist",
            title: data.data.artist[0].directory_info.name,
          },
          playlist: {
            id: data.data.playlist[0].directory_info._id,
            img: data.data.playlist[0].directory_info.imgURL,
            likesCount: data.data.playlist[0].directory_info.likesCount,
            model: "Playlist",
            title: data.data.playlist[0].directory_info.name,
          },
        };

        setRecentMusic(recentList);

        await AsyncStorage.setItem(
          "music-box-recent-music",
          JSON.stringify(recentList)
        );
      }
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  }, [user]);

  useEffect(() => {
    const getRecentMusic = async () => {
      await fetchRecentMusic();
    };

    getRecentMusic();
  }, [fetchRecentMusic]);

  type updateType = (model: string, update: IRecent) => void;

  const updateRecentMusic: updateType = (model, update) => {
    if (recentMusic) {
      setRecentMusic({ ...recentMusic, [model]: update });
    }
  };

  return (
    <RecentlyPlayedContext.Provider
      value={{
        recentMusic,
        isLoading,
        error,
        updateRecentMusic,
      }}
    >
      {props.children}
    </RecentlyPlayedContext.Provider>
  );
};

export default RecentlyPlayedProvider;
