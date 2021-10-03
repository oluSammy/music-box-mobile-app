import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { RecentlyPlayedContext } from "../../../services/recentlyPlayed/RecentlyPlayed.services";

const RecentlyPlayed = () => {
  const { recentMusic } = useContext(RecentlyPlayedContext);

  if (!recentMusic) {
    return null;
  }

  const { album, artist, playlist } = recentMusic;

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Recently Played</Text>
      {artist && (
        <TouchableOpacity style={styles.recentListItem} activeOpacity={0.7}>
          <View style={styles.imgTextBox}>
            <Image
              source={{
                uri: `${artist.img}`,
              }}
              style={styles.recentImgVar}
            />
            <View>
              <Text style={styles.songTitle}>{artist.title}</Text>
              <Text style={styles.songArtist}>Artist</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      {playlist && (
        <TouchableOpacity style={styles.recentListItem} activeOpacity={0.7}>
          <View style={styles.imgTextBox}>
            <Image
              source={{
                uri: `${playlist.img}`,
              }}
              style={styles.recentImg}
            />
            <View>
              <Text style={styles.songTitle}>{playlist.title}</Text>
              <Text style={styles.songArtist}>Playlist</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.recentListItem} activeOpacity={0.7}>
        <View style={styles.imgTextBox}>
          <Image
            source={{
              uri: `${album.img}`,
            }}
            style={styles.recentImg}
          />
          <View>
            <Text style={styles.songTitle}>{album.title}</Text>
            <Text style={styles.songArtist}>Album</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 40,
    flex: 1,
    paddingBottom: 80,
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
    borderRadius: 6,
  },
  recentImgVar: {
    height: 60,
    width: 60,
    marginRight: 20,
    borderRadius: 50,
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
