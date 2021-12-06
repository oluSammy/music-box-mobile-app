import React, {
  useContext,
  useCallback,
  createContext,
  // useEffect,
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
  const [newPlaylist, setNewPlaylist] = React.useState<Record<string, any>[]>(
    []
  );
  const [isProcessing, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<any>(null);

  const createPlayList = useCallback(
    async (data: IPlaylist) => {
      const config = {
        headers: { Authorization: `Bearer ${user?.data.token}` },
      };
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
    [user?.data.token]
  );

  return (
    <PlaylistContext.Provider
      value={{
        playlist: newPlaylist,
        isProcessing,
        error,
        createPlayList,
      }}
    >
      {props.children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistProvider;
