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
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { homeParamList } from "../navigation/@types/navigation";

type Props = NativeStackScreenProps<homeParamList, "HomeScreen">;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaComp showSearchBar>
      <View style={styles.screen}>
        <SectionTitle>Flow</SectionTitle>
        <ScrollView
          horizontal={true}
          style={styles.sectionContainer}
          showsHorizontalScrollIndicator={false}
        >
          <ControlFlow />
          <CreatePlaylistCardFlow />
          <PopularFlowCard />
        </ScrollView>
        <SectionTitle>Recently Playeds</SectionTitle>
        <RecentlyPlayed />
        <SectionTitle>Browse Gernres</SectionTitle>
        <BrowseGenre navigation={navigation} />
        <SectionTitle>Artist You may Like</SectionTitle>
        <MostPlayed />
      </View>
    </SafeAreaComp>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 15,
    paddingBottom: 40,
  },

  sectionContainer: {
    marginBottom: 15,
  },
});

export default HomeScreen;
