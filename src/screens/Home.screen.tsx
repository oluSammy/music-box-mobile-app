import React, { useContext } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import SafeAreaComp from "../components/SafeArea/SafeAreaComp";
import ControlFlow from "../components/FlowCards/Control";
import CreatePlaylistCardFlow from "../components/FlowCards/CreatePlaylist";
import PopularFlowCard from "../components/FlowCards/Popular";
import RecentlyPlayed from "../components/RecentlyPlayed/RecentlyPlayed";
import MostPlayed from "../features/artists/components/MostPlayed";
import { SectionTitle } from "../components/Text/SectionTitle";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { homeParamList } from "../navigation/@types/navigation";
import { RecentlyPlayedContext } from "../services/recentlyPlayed/RecentlyPlayed.services";
import { Ionicons } from "@expo/vector-icons";

type Props = any;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { isLoading, recentMusic } = useContext(RecentlyPlayedContext);

  return (
    <SafeAreaComp showSearchBar={false}>
      <View style={styles.screen}>
        <View style={styles.header}>
          <SectionTitle>Flow</SectionTitle>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu-outline" size={24} color="#2DCEEF" />
          </TouchableOpacity>
        </View>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 20,
    marginVertical: 10,
  },
  sectionContainer: {
    marginBottom: 25,
  },
});

export default HomeScreen;
