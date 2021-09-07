import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { drawerNavigationParamsList } from "./@types/navigation";
import Homepage from "../screens/Homepage.screen";

const { Navigator, Screen } =
  createDrawerNavigator<drawerNavigationParamsList>();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Homepage} />
      </Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
