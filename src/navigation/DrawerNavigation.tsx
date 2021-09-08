import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { drawerNavigationParamsList } from "./@types/navigation";
import HomeTabNavigator from "./HomeTabNavigation";

const { Navigator, Screen } =
  createDrawerNavigator<drawerNavigationParamsList>();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Main"
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
