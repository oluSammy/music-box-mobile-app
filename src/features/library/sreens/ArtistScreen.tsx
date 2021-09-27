import React from "react";
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { libraryParamList } from "../../../navigation/@types/navigation";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "../styles/albumScreen";
import { Entypo } from "@expo/vector-icons";
import ArtistPopularSongs from "../components/artistPopular";
import ArtistAlbums from "../components/ArtistAlbums";

type Props = NativeStackScreenProps<libraryParamList, "ArtistScreen">;
const isAndroid = Platform.OS === "android";

const ArtistScreen: React.FC<Props> = ({ navigation }) => {
  const { width } = useWindowDimensions();

  return (
    <LinearGradient
      style={styles.root}
      colors={["#686D71", "#161A1A"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.42 }}
    >
      <StatusBar barStyle="light-content" backgroundColor="#161A1A" />
      <SafeAreaView style={styles.scroll}>
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.back}
          >
            <Ionicons name="arrow-back" size={20} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <AntDesign name="heart" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.imgBox}>
            <Image
              source={{
                uri: "https://cdns-images.dzcdn.net/images/artist/22dd86b628a03d8dad3c7dfb33320a91/120x120-000000-80-0-0.jpg",
              }}
              style={styles.playlistImgRound}
            />
            <Text style={styles.playlistTitle}>David Bowie</Text>
            <View style={styles.likeBox}>
              <AntDesign
                name="heart"
                size={12}
                style={styles.likes}
                color="#FFFFFF"
              />
              <Text style={styles.songDetail}>490,451</Text>
            </View>
          </View>
          <View style={styles.btnBoxAlbum}>
            <TouchableOpacity activeOpacity={0.7}>
              <LinearGradient
                colors={["#4294F2", "#6A42F2"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.99, y: 0.9 }}
                style={{ ...styles.gradientBtn, width: width / 2.5 }}
              >
                <Entypo name="controller-play" size={24} color="white" />
                <Text style={styles.btnText}>play</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <KeyboardAvoidingView behavior={!isAndroid ? "padding" : "height"}>
            <View style={styles.playlistSongsHeader}>
              <View style={styles.playlistAjasa}>
                <Text style={styles.txt}>Popular Songs</Text>
                <MaterialIcons name="expand-less" size={24} color="#FFFFFF" />
              </View>
            </View>
          </KeyboardAvoidingView>
          <ArtistPopularSongs />
          <ArtistAlbums />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ArtistScreen;
