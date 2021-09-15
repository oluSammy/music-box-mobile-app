import React, { FC } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { libraryParamList } from "../../../navigation/@types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<libraryParamList, "AllPlayList">;

const AllPlaylists: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#161A1A" />
      <SafeAreaView style={styles.flex}>
        <View style={styles.header}>
          <View style={styles.backBox}>
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

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#161A1A",
    flex: 1,
    minHeight: "100%",
  },
  flex: {
    flex: 1,
    marginHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 40,
  },
  backBox: {
    flex: 0.5,
  },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#454848",
    paddingHorizontal: 13,
    paddingVertical: 5,
    borderRadius: 9,
    width: 75,
  },
  backBtnText: {
    color: "#FFFFFF",
    fontFamily: "Lato_700Bold",
  },
  headerTitle: {
    fontFamily: "Lato_900Black",
    color: "#FFFFFF",
    fontSize: 18,
  },
  playlistImg: {
    height: 50,
    width: 50,
    borderRadius: 6,
    marginRight: 20,
  },
  playlistItem: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  playlistText: {
    marginRight: "auto",
  },
  mainTxt: {
    color: "#FFFFFF",
    fontFamily: "Lato_700Bold",
  },
  subTxt: {
    color: "#FFFFFF",
    opacity: 0.7,
  },
});

export default AllPlaylists;
