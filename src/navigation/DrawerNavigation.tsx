import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { drawerNavigationParamsList } from "./@types/navigation";
import CustomDrawer from "../components/Drawer/Drawer.component";
import CreatePlaylistScreen from "../features/playlist/screens/CreatePlaylist/CreatePlaylist.screen";
import { ProfileScreen } from "../screens/Profile.screen";
import LibraryNavigator from "./LibraryNavigation";
import SearchNavigator from "./SearchNavigation";
import GenreNavigation from "./GenreNavigation";
import HomeNavigation from "./HomeStackNavigation";

const { Navigator, Screen } =
  createDrawerNavigator<drawerNavigationParamsList>();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        <Screen
          name="Home"
          component={HomeNavigation}
          options={{ headerShown: false }}
        />
        <Screen
          name="Library"
          component={LibraryNavigator}
          options={{ headerShown: false }}
        />
        <Screen
          name="Search"
          component={SearchNavigator}
          options={{ headerShown: false }}
        />
        <Screen
          name="Browse"
          component={GenreNavigation}
          options={{ headerShown: false }}
        />
        <Screen
          name="CreatePlaylist"
          component={CreatePlaylistScreen}
          options={{ headerShown: false }}
        />
        <Screen
          name="ProfileScreen"
          options={{ headerShown: false }}
          component={ProfileScreen}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
