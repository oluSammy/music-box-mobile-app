import React, { FC } from "react";
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { libraryParamList } from "../../../navigation/@types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles } from "../styles/playlist.styles";
import { MaterialIcons } from "@expo/vector-icons";

type Props = NativeStackScreenProps<libraryParamList, "AllPlayList">;

const AllPlaylists: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#161A1A" />
      <SafeAreaView style={styles.flex}>
        <View style={{ ...styles.header, ...styles.sb }}>
          <View>
            <TouchableOpacity
              style={styles.backBtn}
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={18} color="#FFFFFF" />
              <Text style={styles.backBtnText}>Back</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.headerTitle}>PLAYLISTS</Text>
          <TouchableOpacity activeOpacity={0.7} style={styles.newPlay}>
            <Text style={styles.newTxt}>New</Text>
            <MaterialIcons name="playlist-add" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.playlistItem}
            onPress={() => {
              navigation.navigate("PlayListScreen");
            }}
          >
            <Image
              source={{
                uri: "https://cdns-images.dzcdn.net/images/cover/da2ab992d744dfd7811f223cc0708856/120x120-000000-80-0-0.jpg",
              }}
              style={styles.playlistImg}
            />
            <View style={styles.playlistText}>
              <Text style={styles.mainTxt}>Liked From Radio</Text>
              <Text style={styles.subTxt}>222 songs, 26 hr 49 min</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.playlistItem}
            onPress={() => {
              navigation.navigate("PlayListScreen");
            }}
          >
            <Image
              source={{
                uri: "https://cdns-images.dzcdn.net/images/cover/da2ab992d744dfd7811f223cc0708856/120x120-000000-80-0-0.jpg",
              }}
              style={styles.playlistImg}
            />
            <View style={styles.playlistText}>
              <Text style={styles.mainTxt}>Liked From Radio</Text>
              <Text style={styles.subTxt}>222 songs, 26 hr 49 min</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.playlistItem}
            onPress={() => {
              navigation.navigate("PlayListScreen");
            }}
          >
            <Image
              source={{
                uri: "https://cdns-images.dzcdn.net/images/cover/da2ab992d744dfd7811f223cc0708856/120x120-000000-80-0-0.jpg",
              }}
              style={styles.playlistImg}
            />
            <View style={styles.playlistText}>
              <Text style={styles.mainTxt}>Liked From Radio</Text>
              <Text style={styles.subTxt}>222 songs, 26 hr 49 min</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.playlistItem}
            onPress={() => {
              navigation.navigate("PlayListScreen");
            }}
          >
            <Image
              source={{
                uri: "https://cdns-images.dzcdn.net/images/cover/da2ab992d744dfd7811f223cc0708856/120x120-000000-80-0-0.jpg",
              }}
              style={styles.playlistImg}
            />
            <View style={styles.playlistText}>
              <Text style={styles.mainTxt}>Liked From Radio</Text>
              <Text style={styles.subTxt}>222 songs, 26 hr 49 min</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default AllPlaylists;
