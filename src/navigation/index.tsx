import React, { useContext } from "react";
import DrawerNavigator from "./DrawerNavigation";
import { AuthContext } from "../services/authentication/auth.service";
import AccountNavigator from "./AccountNavigation";

const Navigation = () => {
  const { user } = useContext(AuthContext);
  return (
    <React.Fragment>
      {user ? <DrawerNavigator /> : <AccountNavigator />}
    </React.Fragment>
  );
};

export default Navigation;
