import React, { useEffect } from "react";
import {
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
} from "react-native";
import { styles } from "../../library/styles/playlist.styles";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { searchParamsList } from "../../../navigation/@types/navigation";
import { secondsToHms } from "../../../utils/utils";

type Props = NativeStackScreenProps<searchParamsList, "SearchPlaylist">;

const SearchPlaylist: React.FC<Props> = ({ navigation, route }) => {
  const [allPlaylist, setAllPlaylist] = React.useState<
    Record<string, any>[] | []
  >([]);

  useEffect(() => {
    if (route.params) {
      const { playlist } = route.params;
      setAllPlaylist(playlist);
    }
  }, [route.params]);

  const RenderItem = ({ item }: any) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.playlistItem}
      onPress={() => {
        navigation.navigate("SearchPlaylistScreen", {
          id: item._id,
        });
      }}
    >
      <Image
        source={{
          uri: `${item.imgURL}`,
        }}
        style={styles.playlistImg}
      />
      <View style={styles.playlistText}>
        <Text style={styles.mainTxt}>{item.name}</Text>
        <Text style={styles.subTxt}>
          {item.tracks.length} {item.tracks.length > 0 ? "songs" : "song"},
          {secondsToHms(
            item.tracks.reduce((acc: number, track: any) => {
              return acc + Number(track.duration);
            }, 0)
          )}
        </Text>
      </View>
    </TouchableOpacity>
  );
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
          {/* <TouchableOpacity
            activeOpacity={0.7}
            style={styles.newPlay}
            onPress={() => navigation.navigate("newPlaylistScreen")}
          >
            <Text style={styles.newTxt}>New</Text>
            <MaterialIcons name="playlist-add" size={24} color="#FFFFFF" />
          </TouchableOpacity> */}
        </View>
        <FlatList
          data={allPlaylist?.sort((a, b) => b.tracks.length - a.tracks.length)}
          renderItem={RenderItem}
          keyExtractor={(item) => `${item._id}`}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
};

export default SearchPlaylist;
