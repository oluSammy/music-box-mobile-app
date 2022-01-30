import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IUser {
  user: any;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: string;
  provider: string;
  token?: string;
  last_login?: string;
  data: any;
}
interface IloginParam {
  email: string;
  password: string;
}

export interface ISignupParam {
  email: string;
  password: string;
  passwordConfirm: string;
  lastName: string;
  firstName: string;
  dateOfBirth: any;
  gender: string | null;
}

interface AuthProp {
  user: IUser | null;
  isLoggingIn: boolean;
  isSigningUp: boolean;
  error: any;
  login: ({ email, password }: IloginParam) => void;
  signUp: ({
    email,
    password,
    firstName,
    lastName,
    dateOfBirth,
    gender,
  }: ISignupParam) => void;
  signupError: any;
  setError: Dispatch<SetStateAction<any>>;
  setSignupError: Dispatch<SetStateAction<any>>;
  setUser: Dispatch<SetStateAction<any>>;
}

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthProp);

const AuthProvider = (props: Props) => {
  const [user, setUser] = useState<any>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [isSigningUp, setIsSigningUp] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [signupError, setSignupError] = useState<any>(null);

  let timer: ReturnType<typeof setTimeout>;

  const clearLogOutTimer = () => {
    if (timer) {
      clearTimeout(timer);
    }
  };

  const setLogOutTimer = (expirationTime: number) => {
    timer = setTimeout(() => {
      signOut();
    }, expirationTime);
  };

  const signOut = () => {
    clearLogOutTimer();
    AsyncStorage.removeItem("@music-box-ap");
    setUser(null);
  };

  const loadUser = React.useCallback(async () => {
    try {
      const loggedInUser = await AsyncStorage.getItem("@music-box-ap");

      if (loggedInUser) {
        const parsedUser = JSON.parse(loggedInUser);
        // console.log(parsedUser);
        const secondsRemaining =
          new Date(parsedUser.data.tokenExpiresIn).getTime() / 1000;
        new Date().getTime() / 1000;

        if (secondsRemaining < 0) {
          return null;
        }

        // console.log(secondsRemaining);
        // setLogOutTimer(secondsRemaining);
        return parsedUser;
      } else {
        return null;
      }
    } catch (err) {
      return null;
    }
  }, []);

  useEffect(() => {
    const loadPrevUser = async () => {
      const prevUser = await loadUser();
      setUser(prevUser);
    };

    loadPrevUser();
  }, [loadUser, setUser]);

  const signUp = async ({
    email,
    password,
    lastName,
    firstName,
    dateOfBirth,
    gender,
  }: ISignupParam) => {
    const registerData = {
      email,
      password,
      firstName,
      lastName,
      dateOfBirth,
      gender,
    };

    setIsSigningUp(true);
    setSignupError(null);
    try {
      console.log("console.log(err.response.data)");
      const { data } = await axios.post(
        "https://music-box-b.herokuapp.com/api/v1/music-box-api/users/register",
        registerData
      );
      setIsSigningUp(false);
      setUser(data);
      setLogOutTimer(9000);
      // setLogOutTimer(secondsRemaining);
      await AsyncStorage.setItem("@music-box-ap", JSON.stringify(data));
    } catch (err: any) {
      console.log(err.response.data);
      setIsSigningUp(false);
      setSignupError(err.response.data.message);
    }
  };

  const login = async ({ email, password }: IloginParam) => {
    setIsLoggingIn(true);
    setError(null);
    const loginUser = {
      email,
      password,
    };
    try {
      const { data } = await axios.post(
        "https://music-box-b.herokuapp.com/api/v1/music-box-api/users/login",
        loginUser
      );
      setIsLoggingIn(false);
      setUser(data);
      // console.log(data.data.tokenExpiresIn);
      const secondsRemaining =
        new Date(data.data.tokenExpiresIn).getTime() / 1000;
      // console.log(secondsRemaining);

      setLogOutTimer(secondsRemaining);

      await AsyncStorage.setItem("@music-box-ap", JSON.stringify(data));
    } catch (err: any) {
      setIsLoggingIn(false);
      setError(err.response.data.message);
    }
  };

  const value = {
    user,
    isLoggingIn,
    isSigningUp,
    error,
    login,
    signupError,
    signUp,
    setError,
    setSignupError,
    setUser,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
