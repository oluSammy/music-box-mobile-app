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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { libraryParamList } from "../../../navigation/@types/navigation";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "../styles/albumScreen";
import { Entypo } from "@expo/vector-icons";
import AlbumSongsList from "../components/AlbumSongsList";

type Props = NativeStackScreenProps<libraryParamList, "AlbumScreen">;
const isAndroid = Platform.OS === "android";

const AlbumScreen: React.FC<Props> = ({ navigation }) => {
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
              source={require("../../../../assets/images/playlist-cover.png")}
              style={styles.playlistImg}
            />
            <Text style={styles.playlistTitle}>
              Mellon Collie and the Infinite Sadness
            </Text>
            <Text style={styles.songDetail}>13 Song, 1 hr 13 min</Text>
          </View>
          <View style={styles.btnBoxAlbum}>
            <TouchableOpacity activeOpacity={0.7}>
              <LinearGradient
                colors={["#4294F2", "#6A42F2"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.99, y: 0.9 }}
                style={styles.gradientBtn}
              >
                <Entypo name="controller-play" size={24} color="white" />
                <Text style={styles.btnText}>play</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <KeyboardAvoidingView behavior={!isAndroid ? "padding" : "height"}>
            <View style={styles.playlistSongsHeader}>
              <View style={styles.playlistAjasa}>
                <Text style={styles.txt}>Album Songs</Text>
                <MaterialIcons name="expand-less" size={24} color="#FFFFFF" />
              </View>
            </View>
          </KeyboardAvoidingView>
          <AlbumSongsList />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AlbumScreen;
