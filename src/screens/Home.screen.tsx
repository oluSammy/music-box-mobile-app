import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SafeAreaComp from "../components/SafeArea/SafeAreaComp";
import SearchBar from "../components/SearchBar/SearchBar";
import ControlFlow from "../components/FlowCards/Control";
import CreatePlaylistCardFlow from "../components/FlowCards/CreatePlaylist";
import PopularFlowCard from "../components/FlowCards/Popular";
import RecentlyPlayed from "../components/RecentlyPlayed/RecentlyPlayed";

const Homepage = () => {
  return (
    <SafeAreaComp>
      <SearchBar />
      <View style={styles.screen}>
        <Text style={styles.flowText}>Flow</Text>
        <ScrollView horizontal={true} style={styles.sectionContainer}>
          <ControlFlow />
          <CreatePlaylistCardFlow />
          <PopularFlowCard />
        </ScrollView>
        <Text style={styles.flowText}>Recently Played</Text>
        <RecentlyPlayed />
        <Text style={styles.flowText}>Browse Gernres</Text>
      </View>
    </SafeAreaComp>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 15,
  },
  flowText: {
    marginVertical: 7,
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Lato_700Bold",
  },
  sectionContainer: {
    marginBottom: 15,
  },
});

export default Homepage;
