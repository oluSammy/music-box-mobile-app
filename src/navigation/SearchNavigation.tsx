import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { searchParamsList } from "./@types/navigation";
import Search from "../features/search/screens/Search";
import SearchArtists from "../features/search/screens/SearchArtists";
import ArtistScreen from "../features/library/sreens/ArtistScreen";
import SearchAlbum from "../features/search/screens/SearchAlbum";
import AlbumScreen from "../features/library/sreens/AlbumScreen";
import SearchPlaylist from "../features/search/screens/SearchPlaylist";
import PlayListScreen from "../features/library/sreens/PlayListScreen";

const { Navigator, Screen } = createNativeStackNavigator<searchParamsList>();

const SearchNavigator = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SearchScreen" component={Search} />
      <Screen name="SearchArtist" component={SearchArtists} />
      <Screen name="SearchArtistScreen" component={ArtistScreen} />
      <Screen name="SearchAlbum" component={SearchAlbum} />
      <Screen name="SearchAlbumScreen" component={AlbumScreen} />
      <Screen name="SearchPlaylist" component={SearchPlaylist} />
      <Screen name="SearchPlaylistScreen" component={PlayListScreen} />
    </Navigator>
  );
};

export default SearchNavigator;
