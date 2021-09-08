import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homepage from "../screens/Homepage.screen";
import { drawerNavigationParamsList } from "./@types/navigation";

const { Screen, Navigator } =
  createBottomTabNavigator<drawerNavigationParamsList>();

const HomeTabNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Homepage}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default HomeTabNavigator;
