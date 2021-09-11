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

interface Prop {
  genres: Record<string, any>[] | null;
  isLoading: boolean;
  error: any;
}

interface GenreProps {
  children: React.ReactNode;
}

export const GenreContext = createContext({} as Prop);

const GenreProvider = (props: GenreProps) => {
  const { user } = useContext(AuthContext);
  const [genres, setGenres] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fetchGenres = useCallback(async () => {
    const config = { headers: { Authorization: `Bearer ${user?.token}` } };
    const url = `${API_URL}/genres`;
    try {
      setIsLoading(true);
      const prevGenres = await AsyncStorage.getItem("music-box-genres");
      if (prevGenres) {
        setGenres(JSON.parse(prevGenres));
        setIsLoading(false);
      } else {
        const { data } = await axios.get(url, config);
        setIsLoading(false);
        setGenres(data.data);
        await AsyncStorage.setItem(
          "music-box-genres",
          JSON.stringify(data.data)
        );
      }
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  }, [user]);

  useEffect(() => {
    const getGenres = async () => {
      await fetchGenres();
    };

    getGenres();
  }, [fetchGenres]);

  return (
    <GenreContext.Provider value={{ genres, isLoading, error }}>
      {props.children}
    </GenreContext.Provider>
  );
};

export default GenreProvider;
