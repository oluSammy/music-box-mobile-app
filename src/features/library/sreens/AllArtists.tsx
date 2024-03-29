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

type Props = NativeStackScreenProps<libraryParamList, "AllArtists">;

const AllArtists: FC<Props> = ({ navigation }) => {
  const [artists, setArtists] = useState<Record<string, any>[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const { api } = useContext(ApiContext);

  const fetchArtists = useCallback(async () => {
    try {
      setIsLoading(true);
      const {
        data: {
          data: { payload },
        },
      } = await api("artist/likes", "get");
      setArtists(payload);
      setIsLoading(false);
    } catch (e: any) {
      setIsLoading(false);
      setError(e.response);
    }
  }, [api]);

  useEffect(() => {
    const getArtists = async () => {
      await fetchArtists();
    };
    getArtists();
  }, [fetchArtists]);

  const RenderItem = ({ item }: any) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.playlistItem}
      onPress={() => {
        navigation.navigate("ArtistScreen", {
          id: item.id,
        });
      }}
    >
      <Image
        source={{
          uri: `${item.picture}`,
        }}
        style={styles.playlistImgRound}
      />
      <View style={styles.playlistText}>
        <Text style={styles.mainTxt}>{item.name}</Text>
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
          <Text style={styles.headerTitle}>ARTISTS</Text>
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
        {artists && (
          <FlatList
            data={artists}
            renderItem={RenderItem}
            keyExtractor={(item) => `${item._id}`}
            showsVerticalScrollIndicator={false}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

export default AllArtists;
