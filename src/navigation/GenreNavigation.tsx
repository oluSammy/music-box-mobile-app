import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { genreParamList } from "./@types/navigation";
import Browse from "../screens/Browse.screen";
import GenreTabView from "../features/Genre/components/GenreTabView";
import ArtistScreen from "../features/library/sreens/ArtistScreen";
import PlayListScreen from "../features/library/sreens/PlayListScreen";

const { Navigator, Screen } = createNativeStackNavigator<genreParamList>();

const GenreNavigation = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="BrowseGenre" component={Browse} />
      <Screen name="GenreTabs" component={GenreTabView} />
      <Screen name="ArtistScreen" component={ArtistScreen} />
      <Screen name="PlaylistScreen" component={PlayListScreen} />
    </Navigator>
  );
};

export default GenreNavigation;
