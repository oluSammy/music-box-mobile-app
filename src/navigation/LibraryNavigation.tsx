import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { libraryParamList } from "./@types/navigation";
import Library from "../features/library/sreens/Library.screen";
import AllPlaylists from "../features/library/sreens/AllPlaylists";
import PlayListScreen from "../features/library/sreens/PlayListScreen";

const { Navigator, Screen } = createNativeStackNavigator<libraryParamList>();

const LibraryNavigator = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="LibraryHome" component={Library} />
      <Screen name="AllPlayList" component={AllPlaylists} />
      <Screen name="PlayListScreen" component={PlayListScreen} />
    </Navigator>
  );
};

export default LibraryNavigator;
