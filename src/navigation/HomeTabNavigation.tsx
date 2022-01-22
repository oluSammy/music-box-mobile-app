import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tabParamsList } from "./@types/navigation";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import LibraryNavigator from "./LibraryNavigation";
import SearchNavigator from "./SearchNavigation";
import GenreNavigation from "./GenreNavigation";
import { Platform } from "react-native";
import HomeNavigation from "./HomeStackNavigation";
import AddToPlaylist from "../features/playlist/screens/AddToPlaylist/AddToPlaylist";

const { Screen, Navigator } = createBottomTabNavigator<tabParamsList>();

const isAndroid = Platform.OS === "android";

const HomeTabNavigator = () => {
  return (
    <Navigator
      screenOptions={({ route }) => {
        // console.log(route);
        return {
          tabBarButton: ["AddToPlaylist"].includes(route.name)
            ? () => {
                return null;
              }
            : undefined,
          tabBarStyle: {
            backgroundColor: "#161A1A",
            borderTopColor: "grey",
            // paddingBottom: 40,
            height: route.name === "AddToPlaylist" ? 0 : isAndroid ? 70 : 100,
            position: "absolute",
          },
          tabBarActiveTintColor: "#2DCEEF",
          tabBarInactiveTintColor:
            route.name === "AddToPlaylist" ? "#454848" : "grey",
          headerShown: false,
          tabBarLabelStyle: {
            marginBottom: 15,
          },
          tabBarHideOnKeyboard: true,
        };
      }}
    >
      <Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="music" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="search1" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Library"
        component={LibraryNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="library-outline" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Browse"
        component={GenreNavigation}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="folder-music" size={size} color={color} />
          ),
        }}
      />
      <Screen name="AddToPlaylist" component={AddToPlaylist} />
    </Navigator>
  );
};

export default HomeTabNavigator;
