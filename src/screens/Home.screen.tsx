import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SafeAreaComp from "../components/SafeArea/SafeAreaComp";
import ControlFlow from "../components/FlowCards/Control";
import CreatePlaylistCardFlow from "../components/FlowCards/CreatePlaylist";
import PopularFlowCard from "../components/FlowCards/Popular";
import RecentlyPlayed from "../components/RecentlyPlayed/RecentlyPlayed";
import BrowseGenre from "../components/BrowseGenres/BrowseGenre";
import MostPlayed from "../features/artists/components/MostPlayed";

const Homepage = () => {
  return (
    <SafeAreaComp showSearchBar>
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
        <BrowseGenre />
        <Text style={styles.flowText}>Artist You may Like</Text>
        <MostPlayed />
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
