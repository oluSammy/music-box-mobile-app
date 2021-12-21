import React, {
  useContext,
  useCallback,
  createContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import axios from "axios";
import { AuthContext } from "../authentication/auth.service";
import { API_URL } from "../../constants/url";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { homeParamList } from "../../navigation/@types/navigation";

interface Prop {
  playlist: Record<string, any>[] | null;
  isProcessing: boolean;
  error: any;
  createPlayList: (data: IPlaylist) => void;
  myPlaylists: Record<string, any>[] | null;
  fetchPlaylistError: any;
  isFetchingPlaylist: boolean;
}

interface PlaylistProps {
  children: React.ReactNode;
}

interface IPlaylist {
  name: string;
  genreId: string;
  isPublic: boolean;
  imgURL?: string;
  navigation: any;
}

export const PlaylistContext = createContext<Prop>({} as Prop);

const PlaylistProvider = (props: PlaylistProps) => {
  const { user } = useContext(AuthContext);
  const [newPlaylist, setNewPlaylist] = useState<Record<string, any>[]>([]);
  const [isProcessing, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [myPlaylists, setMyPlaylists] = useState<null | Record<string, any>[]>(
    null
  );
  const [isFetchingPlaylist, setIsFetchingPlaylist] = useState(false);
  const [fetchPlaylistError, setFetchPlaylistError] = useState<any>(null);

  const config = useMemo(() => {
    return {
      headers: { Authorization: `Bearer ${user?.data.token}` },
    };
  }, [user?.data.token]);

  const fetchPlaylist = useCallback(async () => {
    try {
      setIsFetchingPlaylist(true);
      const publicPlaylists = await axios.get(`${API_URL}/playlist`, config);
      const createdPlaylists = await axios.get(
        `${API_URL}/playlist/created`,
        config
      );

      createdPlaylists.data.data.payload.forEach((playlist: any) => {
        const doc = publicPlaylists.data.data.payload.findIndex(
          (list: any) => list._id === playlist._id
        );

        if (doc < 0) {
          publicPlaylists.data.data.payload.push(playlist);
        }

        // console.log(publicPlaylists.data.data.payload.length, "LENGTH");
        setMyPlaylists(publicPlaylists.data.data.payload);
      });
      setIsFetchingPlaylist(false);
    } catch (e) {
      setIsFetchingPlaylist(false);
      setFetchPlaylistError(e);
    }
  }, [config]);

  useEffect(() => {
    const getPlaylist = async () => {
      await fetchPlaylist();
    };

    getPlaylist();
  }, [fetchPlaylist]);

  const createPlayList = useCallback(
    async (data: IPlaylist) => {
      const url = `${API_URL}/playlist`;

      console.log(data, "DATA");

      setIsLoading(true);
      try {
        const response = await axios.post(url, data, config);
        console.log(response.data);
        setNewPlaylist(response.data);
        setIsLoading(false);
        // navigation.goBack()
      } catch (e: any) {
        console.log(e.response.data, "((**");
        setError("Error creating playlist");
        setIsLoading(false);
      }
    },
    [config]
  );

  return (
    <PlaylistContext.Provider
      value={{
        playlist: newPlaylist,
        isProcessing,
        error,
        createPlayList,
        myPlaylists,
        isFetchingPlaylist,
        fetchPlaylistError,
      }}
    >
      {props.children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistProvider;
