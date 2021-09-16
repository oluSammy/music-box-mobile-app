import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/albumSongList";

const ArtistPopularSongs = () => {
  return (
    <View style={styles.root}>
      <View style={styles.playlistItem}>
        <View style={styles.play}>
          <Image
            source={require("../../../../assets/images/playlist-img.jpeg")}
            style={styles.playlistImg}
          />
          <View style={styles.playlistDetail}>
            <Text style={styles.songTitle}>Bicyclesss Race</Text>
            <Text style={styles.songDuration}>3:15</Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.playlistItem}>
        <View style={styles.play}>
          <Image
            source={require("../../../../assets/images/playlist-img.jpeg")}
            style={styles.playlistImg}
          />
          <View style={styles.playlistDetail}>
            <Text style={styles.songTitle}>Bicycle Race</Text>
            <Text style={styles.songDuration}>3:15</Text>
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
            <Text style={styles.songDuration}>3:15</Text>
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
            <Text style={styles.songDuration}>3:15</Text>
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
            <Text style={styles.songDuration}>3:15</Text>
          </View>
        </View>
        <Ionicons name="add" size={24} color="white" />
      </View>
    </View>
  );
};

export default ArtistPopularSongs;
