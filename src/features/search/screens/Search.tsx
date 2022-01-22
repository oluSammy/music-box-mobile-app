import React, { useState, useCallback, useContext, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import { styles } from "../styles/searchScreen";
import { SearchBar } from "react-native-elements";
import { SearchBarBaseProps } from "react-native-elements/dist/searchbar/SearchBar";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { searchParamsList } from "../../../navigation/@types/navigation";
import { styles as recentStyles } from "../../library/styles/playlist.styles";
import axios from "axios";
import { AuthContext } from "../../../services/authentication/auth.service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SafeSearchBar = SearchBar as unknown as React.FC<SearchBarBaseProps>;
type Props = NativeStackScreenProps<searchParamsList, "SearchScreen">;

const Search: React.FC<Props> = ({ navigation }) => {
  const [text, setText] = useState("");
  const { user } = useContext(AuthContext);

  const [album, setAlbum] = useState([]);
  const [artist, setArtist] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [prevSearches, setPrevSearches] = useState<string[] | []>([]);

  useEffect(() => {
    const fetchPrevSearch = async () => {
      const prevSearch = await AsyncStorage.getItem("@music-box-search");
      // console.log("prevSearch", prevSearch);

      if (prevSearch) {
        setPrevSearches(JSON.parse(prevSearch));
      }
    };

    fetchPrevSearch();
  }, []);

  const clearPrevSearch = useCallback(() => {
    AsyncStorage.removeItem("@music-box-search");
    setPrevSearches([]);
  }, []);

  const updateText = (str: string) => {
    setText(str);
  };

  const search = useCallback(
    async (searchQuery: string) => {
      console.log("got here");
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user?.data.token}`,
          },
        };

        setIsSearching(true);
        const {
          data: { data },
        } = await axios.get(
          `https://music-box-b.herokuapp.com/api/v1/music-box-api/search/?name=${searchQuery}`,
          config
        );

        const searchAlbum = data[0].album.map(
          (items: Record<string, any>) => items
        );
        const searchArtist = data[0].artist.map(
          (items: Record<string, any>) => items
        );
        const searchPlaylist = data[0].playlist.map(
          (items: Record<string, any>) => items
        );

        setIsSearching(false);

        if (
          searchAlbum.length === 0 &&
          searchArtist.length === 0 &&
          searchPlaylist.length === 0
        ) {
          Alert.alert("No results found");
        } else {
          setAlbum(searchAlbum);
          setArtist(searchArtist);

          console.log(searchPlaylist[0]);
          setPlaylist(searchPlaylist);
          setPrevSearches([
            ...new Set([searchQuery, ...prevSearches.slice(-4)]),
          ]);
          await AsyncStorage.setItem(
            "@music-box-search",
            JSON.stringify([
              ...new Set([searchQuery, ...prevSearches.slice(-4)]),
            ])
          );
        }
      } catch (e: any) {
        console.log(e);
        setIsSearching(false);
      }
    },
    [prevSearches, user?.data.token]
  );

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#161A1A" />
      <SafeAreaView style={styles.flex}>
        <SafeSearchBar
          platform="default"
          placeholder="Search..."
          onChangeText={updateText}
          value={text}
          containerStyle={styles.containerStyle}
          searchIcon={
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="chevron-back" size={27} color="#FFFFFF" />
            </TouchableOpacity>
          }
          onSubmitEditing={() => search(text)}
        />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
          {prevSearches.length > 0 && (
            <View style={styles.recentHeader}>
              <Text style={styles.heading}>Recent Searches...</Text>
              <TouchableOpacity activeOpacity={0.8} onPress={clearPrevSearch}>
                <Text style={styles.clear}>Clear</Text>
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.recentContainer}>
            {prevSearches.map((prevSearch, idx) => (
              <TouchableOpacity
                activeOpacity={0.8}
                style={recentStyles.playlistItem}
                onPress={() => {
                  search(prevSearch);
                }}
                key={idx}
              >
                <MaterialCommunityIcons
                  name="history"
                  size={24}
                  color="#2DCEEF"
                  style={recentStyles.playlistIcon_}
                />

                <View style={recentStyles.playlistText}>
                  <Text style={recentStyles.mainTxt}>{prevSearch}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.searchResults}>
            <View style={styles.resultsContainer}>
              {artist.length > 0 && (
                <View style={styles.resultsHeader}>
                  <Text style={styles.resultsTitle}>Artists</Text>
                  <TouchableOpacity activeOpacity={0.8}>
                    <Text style={styles.clear}>View All</Text>
                  </TouchableOpacity>
                </View>
              )}
              {artist &&
                artist.length > 0 &&
                artist.slice(0, 3).map((artist_: Record<string, any>) => (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={recentStyles.playlistItem}
                    onPress={() => {
                      // navigation.navigate("AlbumScreen");
                    }}
                    key={artist_.id}
                  >
                    <Image
                      source={{
                        uri: `${artist_.picture}`,
                      }}
                      style={styles.roundedImg}
                    />
                    <View style={recentStyles.playlistText}>
                      <Text style={styles.titleText}>{artist_.name}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
            </View>
            <View style={styles.resultsContainer}>
              {album.length > 0 && (
                <View style={styles.resultsHeader}>
                  <Text style={styles.resultsTitle}>Albums</Text>
                  <TouchableOpacity activeOpacity={0.8}>
                    <Text style={styles.clear}>View All</Text>
                  </TouchableOpacity>
                </View>
              )}
              {album &&
                album.length > 0 &&
                album.slice(0, 3).map((album_: Record<string, any>) => (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={recentStyles.playlistItem}
                    onPress={() => {
                      // navigation.navigate("AlbumScreen");
                    }}
                    key={album_.id}
                  >
                    <Image
                      source={{
                        uri: `${album_.cover_small}`,
                      }}
                      style={recentStyles.playlistImg}
                    />
                    <View style={recentStyles.playlistText}>
                      <Text style={styles.titleText}>{album_.title}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
            </View>
            <View style={styles.resultsContainer}>
              {playlist.length > 0 && (
                <View style={styles.resultsHeader}>
                  <Text style={styles.resultsTitle}>Playlists</Text>
                  <TouchableOpacity activeOpacity={0.8}>
                    <Text style={styles.clear}>View All</Text>
                  </TouchableOpacity>
                </View>
              )}
              {playlist &&
                playlist.length > 0 &&
                playlist.slice(0, 3).map((playlist_: Record<string, any>) => (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={recentStyles.playlistItem}
                    onPress={() => {
                      // navigation.navigate("AlbumScreen");
                    }}
                    key={playlist_._id}
                  >
                    <Image
                      source={{
                        uri: `${playlist_.imgURL}`,
                      }}
                      style={recentStyles.playlistImg}
                    />
                    <View style={recentStyles.playlistText}>
                      <Text style={styles.titleText}>{playlist_.name}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
            </View>
          </View>
        </ScrollView>

        {isSearching && (
          <View style={styles.overlay}>
            <ActivityIndicator size="large" color="#ffffff" />
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

export default Search;
