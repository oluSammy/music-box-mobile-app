import React, { useEffect, useState, useContext, useCallback } from "react";
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { libraryParamList } from "../../../navigation/@types/navigation";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import PlaylistList from "../components/PlaylistList";
import { styles } from "../styles/albumScreen";
import axios from "axios";
import { AuthContext } from "../../../services/authentication/auth.service";
import { API_URL } from "../../../constants/url";
import { secondsToHms } from "../../../utils/utils";
import { RecentlyPlayedContext } from "../../../services/recentlyPlayed/RecentlyPlayed.services";

type Props = NativeStackScreenProps<libraryParamList, "PlayListScreen">;
const isAndroid = Platform.OS === "android";

const PlayListScreen: React.FC<Props> = ({ navigation, route }) => {
  const [text, setText] = useState("");
  const { width } = useWindowDimensions();
  const { user } = useContext(AuthContext);
  const [playlist, setPlaylist] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [tracks, setTracks] = useState<Record<string, any>[] | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const { recentMusic, updateRecentMusic } = useContext(RecentlyPlayedContext);

  const userId = user?.data.data._id;



  const fetchPlaylist = useCallback(async () => {
    const config = {
      headers: { Authorization: `Bearer ${user?.data.token}` },
    };
    try {
      const url = `${API_URL}playlist/${route.params?.id}`;
      setIsLoading(true);
      const {
        data: { data },
      } = await axios.get(url, config);
      setPlaylist(data.payload);

      setTracks(data.payload.tracks);
      const hasBeenLiked = data.payload.likes.includes(userId);
      if (hasBeenLiked) {
        setIsLiked(true);
      }

      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      setError(err.response);
    }
  }, [route.params?.id, user?.data.token, userId]);

  const handleLike = async () => {
    setIsLiked(!isLiked);
    try {
      await axios({
        method: "put",
        url: `${API_URL}playlist/likes/${route.params?.id}`,
        headers: {
          Authorization: `Bearer ${user?.data.token}`,
        },
      });
      if (recentMusic?.playlist.id === route.params?.id) {
        const updatedRecentPlaylist = {
          ...recentMusic.playlist,
          likesCount: isLiked
            ? recentMusic.playlist.likesCount - 1
            : recentMusic.playlist.likesCount + 1,
        };
        updateRecentMusic("playlist", updatedRecentPlaylist);
      }
    } catch (e: any) {
      // console.log(e.response);
    }
  };

  useEffect(() => {
    const getPlaylist = async () => {
      await fetchPlaylist();
    };

    getPlaylist();
  }, [fetchPlaylist]);

  return (
    <LinearGradient
      style={styles.root}
      colors={["#686D71", "#161A1A"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.42 }}
    >
      <StatusBar barStyle="light-content" backgroundColor="#161A1A" />
      <SafeAreaView style={styles.scroll}>
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.back}
          >
            <Ionicons name="arrow-back" size={20} color="#FFFFFF" />
          </TouchableOpacity>
          {playlist && (
            <TouchableOpacity activeOpacity={0.6} onPress={handleLike}>
              <AntDesign
                name="heart"
                size={24}
                color={isLiked ? "red" : "white"}
              />
            </TouchableOpacity>
          )}
        </View>
        {error && (
          <View style={styles.loader}>
            <Text style={styles.errText}>An Error Ocurred!</Text>
          </View>
        )}
        {isLoading && (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#FFFFFF" />
          </View>
        )}
        {playlist && (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.imgBox}>
              <Image
                source={{
                  uri: `${playlist.imgURL}`,
                }}
                style={styles.playlistImg}
              />
              <Text style={styles.playlistTitle}>{playlist.name}</Text>
              <Text style={styles.songDetail}>
                {playlist.tracks.length}
                {playlist.tracks.length > 1 ? " Songs" : " Song"},
                {secondsToHms(
                  playlist.tracks.reduce((acc: number, track: any) => {
                    return acc + Number(track.duration);
                  }, 0)
                )}
              </Text>
            </View>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                ...styles.btnBox,
                justifyContent:
                  userId === playlist.ownerId ? "space-between" : "center",
              }}
            >
              {userId === playlist.ownerId && (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{ ...styles.transparentBtn, width: width / 2.5 }}
                >
                  <MaterialIcons name="edit" size={20} color="#FFFFFF" />
                  <Text style={styles.btnText}>Edit</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity activeOpacity={0.7}>
                <LinearGradient
                  colors={["#4294F2", "#6A42F2"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0.99, y: 0.9 }}
                  style={{ ...styles.gradientBtn, width: width / 2.5 }}
                >
                  <Ionicons name="shuffle" size={20} color="#FFFFFF" />
                  <Text style={styles.btnText}>Shuffle play</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <KeyboardAvoidingView behavior={!isAndroid ? "padding" : "height"}>
              <View style={styles.playlistSongsHeader}>
                <View style={styles.searchBox}>
                  <Ionicons name="search" size={18} color="#FFFFFF" />
                  <TextInput
                    style={styles.input}
                    onChangeText={setText}
                    value={text}
                    placeholder="playlist search"
                    keyboardType="default"
                    placeholderTextColor="#FFFFFF"
                  />
                </View>
                <View style={styles.playlistAjasa1}>
                  <Text style={styles.txt}>Playlisst Songs</Text>
                  <MaterialIcons name="expand-less" size={24} color="#FFFFFF" />
                </View>
              </View>
            </KeyboardAvoidingView>
            <PlaylistList songs={tracks} filterText={text} />
          </ScrollView>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default PlayListScreen;
