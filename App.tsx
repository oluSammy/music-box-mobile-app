import React from "react";
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";
import AccountNavigator from "./src/navigation/AccountNavigation";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <AccountNavigator />
      <ExpoStatusBar style="auto" />
    </>
  );
}
