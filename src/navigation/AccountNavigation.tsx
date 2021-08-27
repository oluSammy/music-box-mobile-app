import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../features/account/screens/login/Login.component";
import { accountNavigatorParamsList } from "./@types/navigation";
import StartScreen from "../features/account/screens/StartScreen/StartScreen";
import Signup from "../features/account/screens/signup/Signup.component";

const { Navigator, Screen } =
  createStackNavigator<accountNavigatorParamsList>();

const AccountNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="StartScreen">
        <Screen
          options={{ title: "Music Box", headerShown: false }}
          name="StartScreen"
          component={StartScreen}
        />
        <Screen name="Login" component={Login} />
        <Screen name="Signup" component={Signup} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AccountNavigator;
