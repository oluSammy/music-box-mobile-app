import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { drawerNavigationParamsList } from "./@types/navigation";
import HomeTabNavigator from "./HomeTabNavigation";
import CustomDrawer from "../components/Drawer/Drawer.component";
import CreatePlaylistScreen from "../features/playlist/screens/CreatePlaylist/CreatePlaylist.screen";

// import AddToPlaylist from "../features/playlist/screens/AddToPlaylist/AddToPlaylist";
// import {
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from "@react-navigation/drawer";

const { Navigator, Screen } =
  createDrawerNavigator<drawerNavigationParamsList>();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        <Screen
          name="Main"
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />
        <Screen
          name="CreatePlaylist"
          component={CreatePlaylistScreen}
          options={{ headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
