import React, { createContext, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../authentication/auth.service";
import { API_URL } from "../../constants/url";

type TMethod = "get" | "post" | "put" | "delete";
interface Prop {
  api: (url: string, method: TMethod, data?: any) => Promise<any>;
}

interface ApiProp {
  children: React.ReactNode;
}

export const ApiContext = createContext({} as Prop);

const ApiProvider = (props: ApiProp) => {
  const { user, signOut } = useContext(AuthContext);
  const api = async (url: string, method: TMethod, payload?: any) => {
    const data = await axios({
      url: `${API_URL}${url}`,
      method,
      headers: {
        Authorization: `Bearer ${user?.data.token}`,
      },
      data: payload,
    });

    if (data.status === 401) {
      signOut();
    }

    return data;
  };

  return (
    <ApiContext.Provider value={{ api }}>{props.children}</ApiContext.Provider>
  );
};

export default ApiProvider;
