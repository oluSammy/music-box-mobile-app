import React, { useContext } from "react";
import DrawerNavigator from "./DrawerNavigation";
import { AuthContext } from "../services/authentication/auth.service";
import AccountNavigator from "./AccountNavigation";
import GenreProvider from "../services/genre/genre.service";

const Navigation = () => {
  const { user } = useContext(AuthContext);
  return (
    <React.Fragment>
      {user ? (
        <GenreProvider>
          <DrawerNavigator />
        </GenreProvider>
      ) : (
        <AccountNavigator />
      )}
    </React.Fragment>
  );
};

export default Navigation;
