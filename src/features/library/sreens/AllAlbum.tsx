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
import { ApiContext } from "../../../services/api/Api";

type Props = NativeStackScreenProps<libraryParamList, "AllAlbum">;

const AllALbums: FC<Props> = ({ navigation }) => {
  const [albums, setAlbums] = useState<Record<string, any>[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const { api } = useContext(ApiContext);

  const fetchPlaylists = useCallback(async () => {
    try {
      setIsLoading(true);
      const {
        data: {
          data: { payload },
        },
      } = await api("album/likes", "get");
      setAlbums(payload);
      setIsLoading(false);
    } catch (e: any) {
      setIsLoading(false);
      setError(e.response);
    }
  }, [api]);

  useEffect(() => {
    const getPlaylists = async () => {
      await fetchPlaylists();
    };
    getPlaylists();
  }, [fetchPlaylists]);

  const RenderItem = ({ item }: any) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.playlistItem}
      onPress={() => {
        navigation.navigate("AlbumScreen", {
          id: item.id,
        });
      }}
    >
      <Image
        source={{
          uri: `${item.cover}`,
        }}
        style={styles.playlistImg}
      />
      <View style={styles.playlistText}>
        <Text style={styles.mainTxt}>{item.title}</Text>
        <Text style={styles.subTxt}>
          {item.artist.name} / {item.tracks.length} songs
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#161A1A" />
      <SafeAreaView style={styles.flex}>
        <View style={styles.header}>
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
          <Text style={styles.headerTitle}>ALBUMS</Text>
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
        {albums && (
          <FlatList
            data={albums}
            renderItem={RenderItem}
            keyExtractor={(item) => `${item._id}`}
            showsVerticalScrollIndicator={false}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

export default AllALbums;
