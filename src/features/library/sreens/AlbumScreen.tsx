import React, { useEffect, useState, useContext, useCallback } from "react";
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
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
import { styles } from "../styles/albumScreen";
import { Entypo } from "@expo/vector-icons";
import AlbumSongsList from "../components/AlbumSongsList";
import axios from "axios";
import { AuthContext } from "../../../services/authentication/auth.service";
import { API_URL } from "../../../constants/url";
import { secondsToHms } from "../../../utils/utils";
import { RecentlyPlayedContext } from "../../../services/recentlyPlayed/RecentlyPlayed.services";

type Props = NativeStackScreenProps<libraryParamList, "AlbumScreen">;
const isAndroid = Platform.OS === "android";

const AlbumScreen: React.FC<Props> = ({ navigation, route }) => {
  const { width } = useWindowDimensions();
  const { user } = useContext(AuthContext);
  const [album, setAlbum] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likeId, setLikeId] = useState("");
  const { recentMusic, updateRecentMusic } = useContext(RecentlyPlayedContext);

  const userId = user?.data.data._id;

  const fetchAlbum = useCallback(async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${user?.data.token}` },
      };
      const url = `${API_URL}album?album=${route.params?.id}`;
      setIsLoading(true);
      const {
        data: { data },
      } = await axios.get(url, config);
      const hasBeenLiked = data.result.likes.includes(userId);

      if (hasBeenLiked) {
        setIsLiked(true);
      }
      setLikeId(data.result._id);
      setAlbum(data.result);
      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      setError(err.response);
      // console.log(err.response);
    }
  }, [route.params?.id, user?.data.token, userId]);

  useEffect(() => {
    const getAlbum = async () => {
      await fetchAlbum();
    };

    getAlbum();
  }, [fetchAlbum]);

  const handleLike = async () => {
    setIsLiked(!isLiked);
    try {
      await axios({
        method: "put",
        url: `${API_URL}album/likes/${likeId}`,
        headers: {
          Authorization: `Bearer ${user?.data.token}`,
        },
      });
      if (recentMusic?.album.id === route.params?.id) {
        const updatedRecentAlbum = {
          ...recentMusic.album,
          likesCount: isLiked
            ? recentMusic.album.likesCount - 1
            : recentMusic.album.likesCount + 1,
        };
        // console.log(updatedRecentAlbum);
        updateRecentMusic("album", updatedRecentAlbum);
      }
    } catch (e: any) {
      // console.log(e.response);
    }
  };

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
          {album && (
            <TouchableOpacity activeOpacity={0.8} onPress={handleLike}>
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
        {album && (
          <>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.imgBox}>
                <Image
                  source={{
                    uri: `${album.cover_medium}`,
                  }}
                  style={styles.playlistImg}
                />
                <Text style={styles.playlistTitle}>{album.title}</Text>
                <Text style={styles.songDetail}>
                  {album.nb_tracks} Songs, {secondsToHms(album.duration)}
                </Text>
              </View>
              <View style={styles.btnBoxAlbum}>
                <TouchableOpacity activeOpacity={0.7}>
                  <LinearGradient
                    colors={["#4294F2", "#6A42F2"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.99, y: 0.9 }}
                    style={{ ...styles.gradientBtn, width: width / 2.5 }}
                  >
                    <Entypo name="controller-play" size={24} color="white" />
                    <Text style={styles.btnText}>play</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              <KeyboardAvoidingView
                behavior={!isAndroid ? "padding" : "height"}
              >
                <View style={styles.playlistSongsHeader}>
                  <View style={styles.playlistAjasa}>
                    <Text style={styles.txt}>Album Songs</Text>
                    <MaterialIcons
                      name="expand-less"
                      size={24}
                      color="#FFFFFF"
                    />
                  </View>
                </View>
              </KeyboardAvoidingView>
              <AlbumSongsList
                tracks={album.tracks}
                albumId={album._id}
                img={album.cover_medium}
                album={album.title}
                artistName={album.artist.name}
              />
            </ScrollView>
          </>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AlbumScreen;
