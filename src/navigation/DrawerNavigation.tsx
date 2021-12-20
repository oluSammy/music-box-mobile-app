import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { drawerNavigationParamsList } from "./@types/navigation";
import HomeTabNavigator from "./HomeTabNavigation";
// import AddToPlaylist from "../features/playlist/screens/AddToPlaylist/AddToPlaylist";

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
        {/* <Screen name="AddToPlaylist" component={AddToPlaylist} /> */}
      </Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
