import React, { useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import SafeAreaComp from "../components/SafeArea/SafeAreaComp";
import ControlFlow from "../components/FlowCards/Control";
import CreatePlaylistCardFlow from "../components/FlowCards/CreatePlaylist";
import PopularFlowCard from "../components/FlowCards/Popular";
import RecentlyPlayed from "../components/RecentlyPlayed/RecentlyPlayed";
import MostPlayed from "../features/artists/components/MostPlayed";
import { SectionTitle } from "../components/Text/SectionTitle";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { homeParamList } from "../navigation/@types/navigation";
import { RecentlyPlayedContext } from "../services/recentlyPlayed/RecentlyPlayed.services";

type Props = NativeStackScreenProps<homeParamList, "HomeScreen">;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { isLoading, recentMusic } = useContext(RecentlyPlayedContext);

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
          <CreatePlaylistCardFlow navigation={navigation} />
          <PopularFlowCard />
        </ScrollView>
        {!isLoading && recentMusic && (
          <SectionTitle>Recently Played</SectionTitle>
        )}
        <RecentlyPlayed navigation={navigation} />
        {/* <SectionTitle>Browse Gernres</SectionTitle>
        <BrowseGenre navigation={navigation} /> */}
        <SectionTitle>Artist You may Liked</SectionTitle>
        <MostPlayed navigation={navigation} />
      </View>
    </SafeAreaComp>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 15,
    paddingBottom: 100,
  },

  sectionContainer: {
    marginBottom: 25,
  },
});

export default HomeScreen;
