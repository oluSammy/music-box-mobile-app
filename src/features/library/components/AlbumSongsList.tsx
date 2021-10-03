import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/albumSongList";
import { secondsToHms, limitSentence } from "../../../utils/utils";

type Props = {
  tracks: any;
  img: string;
  album: string;
  albumId: string;
  artistName: string;
};

const AlbumSongsList: React.FC<Props> = ({ tracks, artistName }) => {
  return (
    <View style={styles.root}>
      {tracks.map((track: Record<string, any>, idx: number) => (
        <View style={styles.playlistItem} key={idx}>
          <View style={styles.play}>
            <Text style={styles.textNum}> {idx + 1} </Text>
            <View style={styles.playlistDetail}>
              <Text style={styles.songTitle}>{limitSentence(track.title)}</Text>
              <Text style={styles.songDuration}>
                {artistName} / {secondsToHms(+track.duration)}
              </Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.7}>
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default AlbumSongsList;
