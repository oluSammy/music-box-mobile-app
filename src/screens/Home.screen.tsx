import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
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
import { Audio } from "expo-av";
import MusicDec from "../features/player/components/Deck/Deck.component";

type Props = any;
// await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { isLoading, recentMusic } = useContext(RecentlyPlayedContext);
  const [sound, setSound] = React.useState<any>();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/Burna.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  // React.useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log("Unloading Sound");
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

  // onPress={playSound}

  return (
    <SafeAreaComp showSearchBar={false}>
      <ScrollView style={styles.screen}>
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
        <TouchableOpacity onPress={playSound}>
          <Text>Play</Text>
        </TouchableOpacity>
        <RecentlyPlayed navigation={navigation} />
        {/* <SectionTitle>Browse Gernres</SectionTitle>
        <BrowseGenre navigation={navigation} /> */}
        <SectionTitle>Artist You may Like</SectionTitle>
        <MostPlayed navigation={navigation} />
      </ScrollView>
      <MusicDec />
    </SafeAreaComp>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 15,
    paddingBottom: 100,
    position: "relative",
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
