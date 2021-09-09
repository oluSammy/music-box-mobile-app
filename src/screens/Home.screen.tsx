import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SafeAreaComp from "../components/SafeArea/SafeAreaComp";
import SearchBar from "../components/SearchBar/SearchBar";
import ControlFlow from "../components/FlowCards/Control";
import CreatePlaylistCardFlow from "../components/FlowCards/CreatePlaylist";
import PopularFlowCard from "../components/FlowCards/Popular";

const Homepage = () => {
  return (
    <SafeAreaComp>
      <SearchBar />
      <View style={styles.screen}>
        <View style={styles.flowContainer}>
          <Text style={styles.flowText}>Flow</Text>
        </View>
        <ScrollView horizontal={true}>
          <ControlFlow />
          <CreatePlaylistCardFlow />
          <PopularFlowCard />
        </ScrollView>
      </View>
    </SafeAreaComp>
  );
};

const styles = StyleSheet.create({
  flowContainer: {
    marginVertical: 10,
  },
  screen: {
    paddingHorizontal: 15,
  },
  flowText: {
    color: "#FFFFFF",
    fontSize: 26,
    fontFamily: "Lato_700Bold",
  },
});

export default Homepage;
