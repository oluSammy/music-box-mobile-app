import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import { homeParamList } from "../../../../navigation/@types/navigation";
import { styles } from "../../styles/addToPlaylist.styles";
import { Ionicons } from "@expo/vector-icons";

type Props = NativeStackScreenProps<homeParamList, "AddToPlaylist">;

const AddToPlaylist: React.FC<Props> = ({ navigation, route }) => {
  // console.log(route.params.data);

  useEffect(() => {
    if (!route.params.data) {
      navigation.goBack();
    }
  }, [navigation, route.params.data]);

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
          <Text style={styles.textTitle}>
            {route.params && route.params.data && route.params.data.title}
          </Text>
          <Text style={styles.textArtist}>
            {route.params && route.params.data && route.params.data.artist}
          </Text>
        </View>
        <ScrollView>
          <View style={styles.playlistContainer}>
            <TouchableOpacity activeOpacity={0.8} style={styles.playlistCover}>
              <Image
                style={styles.playlist}
                source={require("../../../../../assets/images/player-img.jpg")}
              />
              <Text style={styles.playlistTitle}>Study Tunez</Text>
              <Text style={styles.playlistSongs}>13 songs</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.playlistCover}>
              <Image
                style={styles.playlist}
                source={require("../../../../../assets/images/player-img.jpg")}
              />
              <Text style={styles.playlistTitle}>Study Tunez</Text>
              <Text style={styles.playlistSongs}>13 songs</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.playlistCover}>
              <Image
                style={styles.playlist}
                source={require("../../../../../assets/images/player-img.jpg")}
              />
              <Text style={styles.playlistTitle}>Study Tunez</Text>
              <Text style={styles.playlistSongs}>13 songs</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.playlistCover}>
              <Image
                style={styles.playlist}
                source={require("../../../../../assets/images/player-img.jpg")}
              />
              <Text style={styles.playlistTitle}>Study Tunez</Text>
              <Text style={styles.playlistSongs}>13 songs</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default AddToPlaylist;
