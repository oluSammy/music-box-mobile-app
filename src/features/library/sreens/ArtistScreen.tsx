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
import ArtistPopularSongs from "../components/artistPopular";
import ArtistAlbums from "../components/ArtistAlbums";
import axios from "axios";
import { AuthContext } from "../../../services/authentication/auth.service";
import { API_URL } from "../../../constants/url";
import { RecentlyPlayedContext } from "../../../services/recentlyPlayed/RecentlyPlayed.services";
import { ArtistContext } from "../../../services/artists/artist.service";

type Props = NativeStackScreenProps<libraryParamList, "ArtistScreen">;
const isAndroid = Platform.OS === "android";

const ArtistScreen: React.FC<Props> = ({ navigation, route }) => {
  const { width } = useWindowDimensions();
  const { user } = useContext(AuthContext);
  const [artist, setArtist] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [isLiked, setIsLiked] = useState(false);
  const { recentMusic, updateRecentMusic } = useContext(RecentlyPlayedContext);
  const { incrementArtistLikes } = useContext(ArtistContext);
  const [numOfLikes, setNumOfLikes] = useState(0);

  // console.log(recentMusic?.artist.id === route.params?.id);

  const userId = user?.data.data._id;

  const fetchArtist = useCallback(async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${user?.data.token}` },
      };
      const url = `${API_URL}artist/${route.params?.id}`;
      setIsLoading(true);
      const {
        data: { data },
      } = await axios.get(url, config);
      setArtist(data);
      const hasBeenLiked = data.artist.likedBy.includes(userId);
      setNumOfLikes(data.artist.likedCount);
      // console.log(data.songs);
      if (hasBeenLiked) {
        setIsLiked(true);
      }
      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      setError(err.response);
      // console.log(err.response);
    }
  }, [route.params?.id, user?.data.token, userId]);

  useEffect(() => {
    const getArtist = async () => {
      await fetchArtist();
    };

    getArtist();
  }, [fetchArtist]);

  const handleLike = async () => {
    setIsLiked(!isLiked);
    try {
      await axios.put(
        `${API_URL}artist/like/${route.params?.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user?.data.token}`,
          },
        }
      );
      if (isLiked) {
        incrementArtistLikes(route.params?.id, "dec");
        setNumOfLikes(numOfLikes - 1);
      } else {
        incrementArtistLikes(route.params?.id, "inc");
        setNumOfLikes(numOfLikes + 1);
      }

      if (recentMusic?.artist.id === route.params?.id) {
        const updatedRecentArtist = {
          ...recentMusic.artist,
          likesCount: isLiked
            ? recentMusic.artist.likesCount - 1
            : recentMusic.artist.likesCount + 1,
        };
        // console.log(updatedRecentartist);
        updateRecentMusic("artist", updatedRecentArtist);
      }
    } catch (e: any) {
      console.log(e.response);
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
          {artist && (
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
        {artist && (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.imgBox}>
              <Image
                source={{
                  uri: `${artist.artist.picture}`,
                }}
                style={styles.playlistImgRound}
              />
              <Text style={styles.playlistTitle}>{artist.artist.name}</Text>
              <View style={styles.likeBox}>
                <AntDesign
                  name="heart"
                  size={12}
                  style={styles.likes}
                  color="#FFFFFF"
                />
                <Text style={styles.songDetail}>{numOfLikes}</Text>
              </View>
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
            <KeyboardAvoidingView behavior={!isAndroid ? "padding" : "height"}>
              <View style={styles.playlistSongsHeader}>
                <View style={styles.playlistAjasa}>
                  <Text style={styles.txt}>Popular Songs</Text>
                  <View>
                    <MaterialIcons
                      name="expand-less"
                      size={24}
                      color="#FFFFFF"
                    />
                  </View>
                </View>
              </View>
            </KeyboardAvoidingView>
            <ArtistPopularSongs popular={artist.songs} />
            <ArtistAlbums album={artist.albums} navigation={navigation} />
          </ScrollView>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ArtistScreen;
