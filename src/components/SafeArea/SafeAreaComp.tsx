import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from "react-native";
import SearchBar from "../SearchBar/SearchBar";

type Props = {
  children: React.ReactNode;
  showSearchBar: boolean;
};

const SafeAreaComp: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161A1A" />
      <SafeAreaView style={styles.flex}>
        {props.showSearchBar && <SearchBar />}
        <ScrollView style={styles.flex}>{props.children}</ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161A1A",
    flex: 1,
  },
  flex: {
    flex: 1,
  },
});

export default SafeAreaComp;
