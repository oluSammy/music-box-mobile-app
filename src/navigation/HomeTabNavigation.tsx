import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home.screen";
import { tabParamsList } from "./@types/navigation";
import Browse from "../screens/Browse.screen";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import LibraryNavigator from "./LibraryNavigation";

const { Screen, Navigator } = createBottomTabNavigator<tabParamsList>();

const HomeTabNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#161A1A", borderTopColor: "#161A1A" },
        tabBarActiveTintColor: "#2DCEEF",
        tabBarInactiveTintColor: "grey",
        headerShown: false,
      }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="music" size={size} color={color} />
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
        component={Browse}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="folder-music" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};

export default HomeTabNavigator;
