import React, { FC, useEffect, useState, useCallback, useContext } from "react";
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { libraryParamList } from "../../../navigation/@types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles } from "../styles/playlist.styles";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import { API_URL } from "../../../constants/url";
import { AuthContext } from "../../../services/authentication/auth.service";
import { secondsToHms } from "../../../utils/utils";

type Props = NativeStackScreenProps<libraryParamList, "AllPlayList">;

const AllPlaylists: FC<Props> = ({ navigation }) => {
  const [playlists, setPlaylists] = useState<Record<string, any>[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const { user } = useContext(AuthContext);

  const userId = user?.data.data._id;

  const fetchPlaylists = useCallback(async () => {
    const config = {
      headers: { Authorization: `Bearer ${user?.data.token}` },
    };
    try {
      setIsLoading(true);
      const {
        data: {
          data: { payload },
        },
      } = await axios.get(`${API_URL}/playlist`, config);
      const myPlaylists = payload.filter(
        (list: any) =>
          list.ownerId._id === userId || list.likes.includes(userId)
      );
      setPlaylists(myPlaylists);
      setIsLoading(false);
    } catch (e: any) {
      setIsLoading(false);
      setError(e.response);
    }
  }, [user?.data.token, userId]);

  const RenderItem = ({ item }: any) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.playlistItem}
      onPress={() => {
        navigation.navigate("PlayListScreen", {
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

  useEffect(() => {
    const getPlaylists = async () => {
      await fetchPlaylists();
    };
    getPlaylists();
  }, [fetchPlaylists]);

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
          <TouchableOpacity activeOpacity={0.7} style={styles.newPlay}>
            <Text style={styles.newTxt}>New</Text>
            <MaterialIcons name="playlist-add" size={24} color="#FFFFFF" />
          </TouchableOpacity>
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
        {playlists && (
          <FlatList
            data={playlists}
            renderItem={RenderItem}
            keyExtractor={(item) => `${item._id}`}
            showsVerticalScrollIndicator={false}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

export default AllPlaylists;
