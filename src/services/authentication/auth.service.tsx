import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../../constants/url";
import { Alert } from "react-native";

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

interface IUpdateProfile {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  gender: string;
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
  updateProfile: (profile: IUpdateProfile) => void;
  isUpdatingProfile: boolean;
  updateProfileError: any;
  signOut: () => void;
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
  const [isUpdatingProfile, setIsUpdatingProfile] = useState<boolean>(false);
  const [updateProfileError, setUpdateProfileError] = useState<any>(null);

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
        const secondsRemaining =
          new Date(parsedUser.data.tokenExpiresIn).getTime() / 1000;
        new Date().getTime() / 1000;

        if (secondsRemaining < 0) {
          return null;
        }

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
        `${API_URL}users/register`,
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
      const { data } = await axios.post(`${API_URL}users/login`, loginUser);
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

  const updateProfile = React.useCallback(
    async (profile: IUpdateProfile) => {
      try {
        setIsUpdatingProfile(true);
        const {
          data: { data },
        } = await axios.put(
          `${API_URL}users/profile/${user.data.data._id}`,
          {
            ...profile,
            gender: profile.gender === "male" ? "M" : "F",
          },
          {
            headers: {
              Authorization: `Bearer ${user.data.token}`,
            },
          }
        );

        const newUser = user;
        newUser.data.data = { ...user.data.data, ...data };
        setUser(newUser);
        await AsyncStorage.setItem("@music-box-ap", JSON.stringify(newUser));

        Alert.alert(
          "Done",
          "Profile Updated",
          [
            {
              text: "Ok",
              style: "default",
            },
          ],
          {
            cancelable: true,
          }
        );

        setIsUpdatingProfile(false);
      } catch (e: any) {
        Alert.alert(
          "error",
          "unable to update profile",
          [
            {
              text: "Ok",
              style: "default",
            },
          ],
          {
            cancelable: true,
          }
        );
        setUpdateProfileError(e.response.data);
        setIsUpdatingProfile(false);
      }
    },

    [user]
  );

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
    updateProfile,
    isUpdatingProfile,
    updateProfileError,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
