import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { homeParamList } from "../../../../navigation/@types/navigation";
import { styles } from "../../styles/addToPlaylist.styles";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { PlaylistContext } from "../../../../services/playlists/playlist.service";
import { LinearGradient } from "expo-linear-gradient";

type Props = NativeStackScreenProps<homeParamList, "AddToPlaylist">;

const AddToPlaylist: React.FC<Props> = ({ navigation, route }) => {
  useEffect(() => {
    setSelectedPlaylist("");
    if (!route.params.data) {
      navigation.goBack();
    }
  }, [navigation, route.params.data]);

  const {
    isFetchingPlaylist,
    myUserPlaylist,
    fetchPlaylistError,
    addSongToPlaylist,
    isAddingSongs,
  } = useContext(PlaylistContext);
  // console.log(route.params.data);

  const [selectedPlaylist, setSelectedPlaylist] = useState("");

  const addToPlaylist = () => {
    if (!selectedPlaylist || isAddingSongs) {
      return;
    }

    addSongToPlaylist(route.params.data, selectedPlaylist);
    setSelectedPlaylist("");
  };

  // console.log(myUserPlaylist[5]);

  const RenderItem = ({ item }: any) => {
    // console.log(item._id);
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedPlaylist(item._id);
        }}
        activeOpacity={0.8}
        style={styles.playlistCover}
      >
        <Image
          style={
            selectedPlaylist === item._id
              ? styles.selectedPlaylist
              : styles.playlist
          }
          source={{
            uri: `${item.imgURL || "https://api.deezer.com/genre/116/image"}`,
          }}
        />
        <Text style={styles.playlistTitle}>{item.name}</Text>
        <Text style={styles.playlistSongs}>{item.tracks.length} songs</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#161A1A" />
      <SafeAreaView style={styles.flex}>
        <View style={styles.top}>
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

          <Text style={styles.title}>Select Playlist</Text>
        </View>
        <View style={styles.titleBox}>
          <View style={styles.upperTxt}>
            <Text style={styles.textTitle}>
              {route.params && route.params.data && route.params.data.title}
            </Text>
            <Text style={styles.textArtist}>
              {route.params && route.params.data && route.params.data.artist}
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.7} onPress={addToPlaylist}>
            <LinearGradient
              colors={
                selectedPlaylist
                  ? ["#4294F2", "#6A42F2"]
                  : ["#161A1A", "#161A1A"]
              }
              start={{ x: 0, y: 0 }}
              end={{ x: 0.99, y: 0.9 }}
              style={
                selectedPlaylist
                  ? styles.gradientBtn
                  : styles.selectedGradientBtn
              }
            >
              {!isAddingSongs && <Entypo name="plus" size={20} color="white" />}

              {isAddingSongs ? (
                <ActivityIndicator size="small" color="#FFFFFF" />
              ) : (
                <Text style={styles.btnText}>Add</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.playlistContainer}>
          {fetchPlaylistError && (
            <View style={styles.loader}>
              <Text style={styles.errText}>An Error Ocurred!</Text>
            </View>
          )}
          {isFetchingPlaylist && (
            <View style={styles.loader}>
              <ActivityIndicator size="large" color="#FFFFFF" />
            </View>
          )}
        </View>
        {myUserPlaylist && (
          <FlatList
            data={myUserPlaylist}
            renderItem={RenderItem}
            keyExtractor={(item) => `${item._id}`}
            showsVerticalScrollIndicator={false}
            numColumns={3}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

export default AddToPlaylist;
