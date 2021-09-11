import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homepage from "../screens/Home.screen";
import { tabParamsList } from "./@types/navigation";
import Library from "../features/library/sreens/Library.screen";
import Browse from "../features/Browse/screens/Browse.screen";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const { Screen, Navigator } = createBottomTabNavigator<tabParamsList>();

const HomeTabNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#161A1A", borderTopColor: "#161A1A" },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "grey",
        headerShown: false,
      }}
    >
      <Screen
        name="Home"
        component={Homepage}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="music" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Library"
        component={Library}
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
