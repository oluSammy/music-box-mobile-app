import React, {
  useState,
  useEffect,
  createContext,
  useCallback,
  useContext,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApiContext } from "../api/Api";

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
  const [genres, setGenres] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const { api } = useContext(ApiContext);

  const fetchGenres = useCallback(async () => {
    try {
      setIsLoading(true);
      const prevGenres = await AsyncStorage.getItem("music-box-genres");
      if (prevGenres) {
        setGenres(JSON.parse(prevGenres));
        setIsLoading(false);
      } else {
        const { data } = await api("genres", "get");
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
  }, [api]);

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
