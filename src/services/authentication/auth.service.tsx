import React, { createContext, useState } from "react";

interface AuthProp {
  isLoggedIn: false;
}

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext({} as AuthProp);

const AuthProvider = (props: Props) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);
  const [isloading, setIsLoading] = useState<Boolean>(false);
  const [isSigningIn, setIsSigningIn] = useState<Boolean>(false);
  const [error, setError] = useState<any>(null);

  const signUp = async (
    email: string,
    password: string,
    passwordConfirm: string,
    lastName: string,
    firstName: string,
    dateOfBirth: any,
    gender: string
  ) => {};

  return (
    <AuthContext.Provider value={{ isLoggedIn: false }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
