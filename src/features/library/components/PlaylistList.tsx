import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PlaylistList = () => {
  return (
    <View style={styles.root}>
      <View style={styles.playlistItem}>
        <View style={styles.play}>
          <Image
            source={require("../../../../assets/images/playlist-img.jpeg")}
            style={styles.playlistImg}
          />
          <View style={styles.playlistDetail}>
            <Text style={styles.songTitle}>Bicycle Race</Text>
            <Text style={styles.songDuration}>Queen / 3:15</Text>
          </View>
        </View>
        <Ionicons name="add" size={24} color="white" />
      </View>
      <View style={styles.playlistItem}>
        <View style={styles.play}>
          <Image
            source={require("../../../../assets/images/playlist-img.jpeg")}
            style={styles.playlistImg}
          />
          <View style={styles.playlistDetail}>
            <Text style={styles.songTitle}>Bicycle Race</Text>
            <Text style={styles.songDuration}>Queen / 3:15</Text>
          </View>
        </View>
        <Ionicons name="add" size={24} color="white" />
      </View>
      <View style={styles.playlistItem}>
        <View style={styles.play}>
          <Image
            source={require("../../../../assets/images/playlist-img.jpeg")}
            style={styles.playlistImg}
          />
          <View style={styles.playlistDetail}>
            <Text style={styles.songTitle}>Bicycle Race</Text>
            <Text style={styles.songDuration}>Queen / 3:15</Text>
          </View>
        </View>
        <Ionicons name="add" size={24} color="white" />
      </View>
      <View style={styles.playlistItem}>
        <View style={styles.play}>
          <Image
            source={require("../../../../assets/images/playlist-img.jpeg")}
            style={styles.playlistImg}
          />
          <View style={styles.playlistDetail}>
            <Text style={styles.songTitle}>Bicycle Race</Text>
            <Text style={styles.songDuration}>Queen / 3:15</Text>
          </View>
        </View>
        <Ionicons name="add" size={24} color="white" />
      </View>
      <View style={styles.playlistItem}>
        <View style={styles.play}>
          <Image
            source={require("../../../../assets/images/playlist-img.jpeg")}
            style={styles.playlistImg}
          />
          <View style={styles.playlistDetail}>
            <Text style={styles.songTitle}>Bicycle Race</Text>
            <Text style={styles.songDuration}>Queen / 3:15</Text>
          </View>
        </View>
        <Ionicons name="add" size={24} color="white" />
      </View>
      <View style={styles.playlistItem}>
        <View style={styles.play}>
          <Image
            source={require("../../../../assets/images/playlist-img.jpeg")}
            style={styles.playlistImg}
          />
          <View style={styles.playlistDetail}>
            <Text style={styles.songTitle}>Bicycle Race</Text>
            <Text style={styles.songDuration}>Queen / 3:15</Text>
          </View>
        </View>
        <Ionicons name="add" size={24} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 30,
  },
  playlistItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  playlistImg: {
    height: 50,
    width: 50,
    borderRadius: 5,
    marginRight: 20,
  },
  playlistDetail: {},
  songTitle: {
    color: "#FFFFFF",
    fontFamily: "Lato_700Bold",
  },
  songDuration: {
    color: "#FFFFFF",
    opacity: 0.7,
    fontFamily: "Lato_700Bold",
  },
  play: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default PlaylistList;
