import React from "react";
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";
import AuthProvider from "./src/services/authentication/auth.service";

import Navigation from "./src/navigation";

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
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </>
  );
}
