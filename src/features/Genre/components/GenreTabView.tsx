import React, { useEffect, useCallback, useState } from "react";
import {
  View,
  useWindowDimensions,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import { Ionicons } from "@expo/vector-icons";
import { genreParamList } from "../../../navigation/@types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import OverViewTab from "../screens/Overview";
import PlaylistTab from "../screens/PlaylistTab";
import ArtistTab from "../screens/ArtistTab";
import { API_URL } from "../../../constants/url";
// import { AuthContext } from "../../../services/authentication/auth.service";
import axios from "axios";

type Props = NativeStackScreenProps<genreParamList, "GenreTabs">;

const GenreTabView: React.FC<Props> = ({ navigation, route: routeNav }) => {
  const layout = useWindowDimensions();

  const [artist, setArtist] = useState(null);
  const [isFetchingArtist, setIsFetchingArtist] = useState(false);
  const [artistErr, setArtistErr] = useState(false);
  const [isFetchingPlaylist, setIsFetchingPlaylist] = useState(false);
  const [playlist, setPlaylist] = useState(null);
  const [playlistError, setPlaylistError] = useState(null);
  // const { user } = useContext(AuthContext);

  const fetchGenre = useCallback(async () => {
    setIsFetchingArtist(true);
    try {
      const {
        data: { data },
      } = await axios.get(`${API_URL}genres/artist/${routeNav.params?.id}`);

      setIsFetchingArtist(false);
      setArtist(data);
    } catch (err: any) {
      setIsFetchingArtist(false);
      setArtistErr(err.response);
    }
  }, [routeNav.params?.id]);

  const fetchPlaylist = useCallback(async () => {
    setIsFetchingPlaylist(true);
    try {
      const {
        data: { data },
      } = await axios.get(
        `${API_URL}genres/playlist/${routeNav.params?.genreId}`
      );
      setPlaylist(data);
      setIsFetchingPlaylist(false);
    } catch (err: any) {
      setPlaylistError(err.response);
      setIsFetchingPlaylist(false);
    }
  }, [routeNav.params?.genreId]);

  useEffect(() => {
    const getData = async () => {
      await fetchGenre();
      await fetchPlaylist();
    };
    getData();
  }, [fetchGenre, fetchPlaylist]);

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Overview" },
    { key: "second", title: "Playlist" },
    { key: "third", title: "Artists" },
  ]);

  const renderScene = ({ route }: any) => {
    switch (route.key) {
      case "first":
        return isFetchingArtist || isFetchingPlaylist ? (
          <View style={styles.loader}>
            <ActivityIndicator size="small" color="#FFFFFF" />
          </View>
        ) : (
          <OverViewTab
            navigation={navigation}
            artist={artist}
            playlist={playlist}
            error={{ artistErr, playlistError }}
          />
        );
      case "second":
        return isFetchingPlaylist ? (
          <View style={styles.loader}>
            <ActivityIndicator size="small" color="#FFFFFF" />
          </View>
        ) : (
          <PlaylistTab
            playlist={playlist}
            navigation={navigation}
            error={artistErr}
          />
        );
      case "third":
        return isFetchingArtist ? (
          <View style={styles.loader}>
            <ActivityIndicator size="small" color="#FFFFFF" />
          </View>
        ) : (
          <ArtistTab
            navigation={navigation}
            artist={artist}
            error={artistErr}
          />
        );
      default:
        return null;
    }
  };

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      activeColor={"white"}
      inactiveColor={"white"}
      style={styles.tabBarStyle}
      indicatorStyle={styles.indicator}
      labelStyle={styles.label}
    />
  );

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#161A1A" />
      <SafeAreaView style={styles.flex}>
        <View style={styles.header}>
          <View style={styles.headerBox}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.backBtn}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons name="arrow-back" size={20} color="white" />
              <Text style={styles.backTxt}>Back </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.genreTitle}>
            {routeNav.params && routeNav.params.title}
          </Text>
        </View>
        <TabView
          lazy
          navigationState={{ index, routes }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#161A1A",
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  header: {
    marginLeft: 15,
    marginTop: 10,
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  genreTitle: {
    color: "#FFFFFF",
    fontFamily: "Lato_700Bold",
    fontSize: 22,
  },
  backTxt: {
    color: "#FFFFFF",
    marginLeft: 10,
  },
  loader: {
    marginTop: 40,
    alignItems: "center",
  },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#303033",
    width: 90,
    justifyContent: "center",
    paddingVertical: 6,
    borderRadius: 8,
  },
  headerBox: {
    flex: 0.5,
  },
  indicator: {
    backgroundColor: "#2DCEEF",
  },
  label: {
    fontFamily: "Lato_700Bold",
    fontSize: 17,
  },
  tabBarStyle: {
    marginTop: 10,
    backgroundColor: "transparent",
  },
});

export default GenreTabView;
