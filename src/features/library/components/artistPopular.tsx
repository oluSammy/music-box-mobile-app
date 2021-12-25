import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/albumSongList";
import { getTimeFormat } from "../../../utils/utils";

type Props = {
  popular: Record<string, any>[];
  navigation: any;
};

const ArtistPopularSongs: React.FC<Props> = ({ popular, navigation }) => {
  return (
    <View style={styles.root}>
      {popular.map((track) => (
        <View style={styles.playlistItem} key={track.id}>
          <View style={styles.play}>
            <Image
              source={{
                uri: `${track.album.cover_small}`,
              }}
              style={styles.playlistImg}
            />
            <View style={styles.playlistDetail}>
              <Text style={styles.songTitle}>{track.title}</Text>
              <Text style={styles.songDuration}>
                {getTimeFormat(track.duration)}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate("AddToPlaylist", {
                data: {
                  id: track.id,
                  title: track.title,
                  preview: track.preview,
                  artist: track.artist.name,
                  album: track.album.title,
                  albumImgUrl: track.album.cover_medium,
                  duration: track.duration,
                },
              })
            }
          >
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default ArtistPopularSongs;
