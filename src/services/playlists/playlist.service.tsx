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
import { Alert } from "react-native";

interface Prop {
  playlist: Record<string, any>[] | null;
  isProcessing: boolean;
  error: any;
  createPlayList: (data: IPlaylist) => void;
  myPlaylists: Record<string, any>[] | null;
  fetchPlaylistError: any;
  isFetchingPlaylist: boolean;
  myUserPlaylist: Record<string, any>[] | null;
  addSongToPlaylist: (song: ISong, playlistId: string) => void;
  isAddingSongs: boolean;
  addSongError: any;
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

interface ISong {
  album: string;
  albumImgUrl: string;
  preview: string;
  duration: number;
  title: string;
  id: string;
  artist: string;
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
  const [myUserPlaylist, setUserPlaylist] = useState<
    null | Record<string, any>[]
  >(null);
  const [isFetchingPlaylist, setIsFetchingPlaylist] = useState(false);
  const [fetchPlaylistError, setFetchPlaylistError] = useState<any>(null);
  const [isAddingSongs, setIsAddingSongs] = useState(false);
  const [addSongError, setAddSongError] = useState<any>(null);

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
        // console.log(user?.data.data._id);
        // console.log(publicPlaylists.data.data.payload[5].ownerId._id, "LENGTH");
        setMyPlaylists(publicPlaylists.data.data.payload);
      });

      // get user playlist
      const userPlaylist: any[] = [];
      publicPlaylists.data.data.payload.forEach((playlist: any) => {
        if (playlist.ownerId._id === user?.data.data._id) {
          userPlaylist.push(playlist);
        }
      });

      setUserPlaylist(userPlaylist);

      // console.log(userPlaylist.length, "MY USER PLAYLIST");
      setIsFetchingPlaylist(false);
    } catch (e) {
      // console.log(e);
      setIsFetchingPlaylist(false);
      setFetchPlaylistError(e);
    }
  }, [config, user?.data.data._id]);

  useEffect(() => {
    const getPlaylist = async () => {
      await fetchPlaylist();
    };

    getPlaylist();
  }, [fetchPlaylist]);

  const createPlayList = useCallback(
    async (data: IPlaylist) => {
      const url = `${API_URL}/playlist`;

      // console.log(data, "DATA");

      setIsLoading(true);
      try {
        const response = await axios.post(url, data, config);
        // console.log(response.data);
        setNewPlaylist(response.data);
        await fetchPlaylist();
        setIsLoading(false);
        // navigation.goBack()
      } catch (e: any) {
        console.log(e.response.data, "((**");
        console.log(e, "((**");
        setError("Error creating playlist");
        setIsLoading(false);
      }
    },
    [config, fetchPlaylist]
  );

  const addSongToPlaylist = async (song: ISong, playlistId: string) => {
    console.log("called", song, playlistId);
    try {
      setIsAddingSongs(true);

      const response = await axios.put(
        `${API_URL}/playlist/${playlistId}`,
        song,
        config
      );

      console.log("response.data");
      console.log(response.data);

      const addedToPlaylist =
        myPlaylists &&
        myPlaylists.find((el: any) => {
          if (el._id === playlistId) {
            return el;
          }
          return false;
        });

      if (addedToPlaylist) {
        addedToPlaylist.tracks.push(song);
      }

      setMyPlaylists(myPlaylists);

      setIsAddingSongs(false);
      Alert.alert("Done!", "Song added to playlist");
    } catch (e: any) {
      setIsAddingSongs(false);
      setAddSongError(e);
      if (e.response) {
        e.response.data.message === "Track already exists"
          ? Alert.alert("Error!", "Track already exist in playlist")
          : Alert.alert("Error!", "An error occurred");
      } else {
        Alert.alert("Error!", "Track already exist in playlist");
      }
    }
  };

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
        myUserPlaylist,
        isAddingSongs,
        addSongError,
        addSongToPlaylist,
      }}
    >
      {props.children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistProvider;
