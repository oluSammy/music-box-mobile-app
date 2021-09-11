import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import SafeAreaComp from "../components/SafeArea/SafeAreaComp";
import ControlFlow from "../components/FlowCards/Control";
import CreatePlaylistCardFlow from "../components/FlowCards/CreatePlaylist";
import PopularFlowCard from "../components/FlowCards/Popular";
import RecentlyPlayed from "../components/RecentlyPlayed/RecentlyPlayed";
import BrowseGenre from "../components/BrowseGenres/BrowseGenre";
import MostPlayed from "../features/artists/components/MostPlayed";
import { SectionTitle } from "../components/Text/SectionTitle";

const HomeScreen = () => {
  return (
    <SafeAreaComp showSearchBar>
      <View style={styles.screen}>
        <SectionTitle>Flow</SectionTitle>
        <ScrollView horizontal={true} style={styles.sectionContainer}>
          <ControlFlow />
          <CreatePlaylistCardFlow />
          <PopularFlowCard />
        </ScrollView>
        <SectionTitle>Recently Played</SectionTitle>
        <RecentlyPlayed />
        <SectionTitle>Browse Gernres</SectionTitle>
        <BrowseGenre />
        <SectionTitle>Artist You may Like</SectionTitle>
        <MostPlayed />
      </View>
    </SafeAreaComp>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 15,
  },

  sectionContainer: {
    marginBottom: 15,
  },
});

export default HomeScreen;
