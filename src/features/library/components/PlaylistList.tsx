import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/albumSongList";
import { secondsToHms } from "../../../utils/utils";

type Prop = {
  songs: Record<string, any>[] | null;
  filterText: string;
};

const PlaylistList: React.FC<Prop> = ({ songs, filterText }) => {
  const [tracks, setTracks] = useState<Record<string, any>[] | null>(null);

  useEffect(() => {
    if (filterText === "") {
      setTracks(songs);
    } else {
      const newTracks: any[] = [];
      if (songs) {
        songs.forEach((track: any) => {
          if (track.title.toLowerCase().startsWith(filterText.toLowerCase())) {
            newTracks.push(track);
          }
        });
      }
      setTracks(newTracks);
    }
  }, [filterText, songs]);

  const RenderItem = ({ item }: any) => (
    <View style={styles.playlistItem}>
      <View style={styles.play}>
        <Image
          source={{
            uri: `${item.albumImgUrl}`,
          }}
          style={styles.playlistImg}
        />
        <View style={styles.playlistDetail}>
          <Text style={styles.songTitle}>{item.title}</Text>
          <Text style={styles.songDuration}>
            {item.artist} / {secondsToHms(item.duration)}
          </Text>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.7}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.root}>
      {tracks && (
        <FlatList
          data={tracks}
          renderItem={RenderItem}
          keyExtractor={(item) => `${item.id}`}
        />
      )}
    </View>
  );
};

export default PlaylistList;
