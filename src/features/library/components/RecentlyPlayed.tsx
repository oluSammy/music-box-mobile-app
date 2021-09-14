import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const isAndroid = Platform.OS === "android";

const TouchableComp: any = isAndroid
  ? TouchableNativeFeedback
  : TouchableOpacity;

const RecentlyPlayed = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Recently Played</Text>
      <TouchableComp style={styles.recentListItem} activeOpacity={0.8}>
        <View style={styles.imgTextBox}>
          <Image
            source={require("../../../../assets/images/recently-cover.png")}
            style={styles.recentImg}
          />
          <View>
            <Text style={styles.songTitle}>Queen</Text>
            <Text style={styles.songArtist}>Artist</Text>
          </View>
        </View>
        <Ionicons name="add" size={24} color="#FFFFFF" />
      </TouchableComp>
      <TouchableComp style={styles.recentListItem} activeOpacity={0.8}>
        <View style={styles.imgTextBox}>
          <Image
            source={require("../../../../assets/images/recently-cover.png")}
            style={styles.recentImg}
          />
          <View>
            <Text style={styles.songTitle}>Queen</Text>
            <Text style={styles.songArtist}>Artist</Text>
          </View>
        </View>
        <Ionicons name="add" size={24} color="#FFFFFF" />
      </TouchableComp>
      <TouchableComp style={styles.recentListItem} activeOpacity={0.8}>
        <View style={styles.imgTextBox}>
          <Image
            source={require("../../../../assets/images/recently-cover.png")}
            style={styles.recentImg}
          />
          <View>
            <Text style={styles.songTitle}>Queen</Text>
            <Text style={styles.songArtist}>Artist</Text>
          </View>
        </View>
        <Ionicons name="add" size={24} color="#FFFFFF" />
      </TouchableComp>
      <TouchableComp style={styles.recentListItem} activeOpacity={0.8}>
        <View style={styles.imgTextBox}>
          <Image
            source={require("../../../../assets/images/recently-cover.png")}
            style={styles.recentImg}
          />
          <View>
            <Text style={styles.songTitle}>Queen</Text>
            <Text style={styles.songArtist}>Artist</Text>
          </View>
        </View>
        <Ionicons name="add" size={24} color="#FFFFFF" />
      </TouchableComp>
      <TouchableComp style={styles.recentListItem} activeOpacity={0.8}>
        <View style={styles.imgTextBox}>
          <Image
            source={require("../../../../assets/images/recently-cover.png")}
            style={styles.recentImg}
          />
          <View>
            <Text style={styles.songTitle}>Queen</Text>
            <Text style={styles.songArtist}>Artist</Text>
          </View>
        </View>
        <Ionicons name="add" size={24} color="#FFFFFF" />
      </TouchableComp>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 40,
    flex: 1,
  },
  title: {
    color: "#FFFFFF",
    fontFamily: "Lato_700Bold",
    fontSize: 20,
    marginBottom: 20,
  },
  recentImg: {
    height: 60,
    width: 60,
    marginRight: 20,
  },
  recentListItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  imgTextBox: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: "auto",
  },
  songTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Lato_700Bold",
  },
  songArtist: {
    color: "#FFFFFF",
    fontSize: 13,
    fontFamily: "Lato_400Regular",
    opacity: 0.7,
  },
});

export default RecentlyPlayed;
