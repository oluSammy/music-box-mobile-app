import React from "react";
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";
import AccountNavigator from "./src/navigation/AccountNavigation";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <AccountNavigator />;
}
