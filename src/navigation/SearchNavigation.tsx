import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { searchParamsList } from "./@types/navigation";
import Search from "../features/search/screens/Search";

const { Navigator, Screen } = createNativeStackNavigator<searchParamsList>();

const SearchNavigator = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SearchScreen" component={Search} />
    </Navigator>
  );
};

export default SearchNavigator;
