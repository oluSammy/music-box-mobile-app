import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { homeParamList } from "./@types/navigation";
import HomeScreen from "../screens/Home.screen";
import GenreTabView from "../features/Genre/components/GenreTabView";
import ArtistScreen from "../features/library/sreens/ArtistScreen";
import PlayListScreen from "../features/library/sreens/PlayListScreen";

const { Navigator, Screen } = createNativeStackNavigator<homeParamList>();

const HomeNavigation = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="GenreHomeTabs" component={GenreTabView} />
      <Screen name="ArtistHomeScreen" component={ArtistScreen} />
      <Screen name="PlaylistHomeScreen" component={PlayListScreen} />
    </Navigator>
  );
};

export default HomeNavigation;
