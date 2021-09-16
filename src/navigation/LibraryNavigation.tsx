import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { libraryParamList } from "./@types/navigation";
import Library from "../features/library/sreens/Library.screen";
import AllPlaylists from "../features/library/sreens/AllPlaylists";
import PlayListScreen from "../features/library/sreens/PlayListScreen";
import AllALbums from "../features/library/sreens/AllAlbum";
import AlbumScreen from "../features/library/sreens/AlbumScreen";
import AllArtists from "../features/library/sreens/AllArtists";
import ArtistScreen from "../features/library/sreens/ArtistScreen";

const { Navigator, Screen } = createNativeStackNavigator<libraryParamList>();

const LibraryNavigator = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="LibraryHome" component={Library} />
      <Screen name="AllPlayList" component={AllPlaylists} />
      <Screen name="PlayListScreen" component={PlayListScreen} />
      <Screen name="AllAlbum" component={AllALbums} />
      <Screen name="AlbumScreen" component={AlbumScreen} />
      <Screen name="AllArtists" component={AllArtists} />
      <Screen name="ArtistScreen" component={ArtistScreen} />
    </Navigator>
  );
};

export default LibraryNavigator;
