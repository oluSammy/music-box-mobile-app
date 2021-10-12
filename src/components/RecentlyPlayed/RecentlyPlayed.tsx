import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { RecentlyPlayedContext } from "../../services/recentlyPlayed/RecentlyPlayed.services";

type Props = {
  navigation: any;
};

const RecentlyPlayed: React.FC<Props> = ({ navigation }) => {
  const { recentMusic } = useContext(RecentlyPlayedContext);

  if (!recentMusic) {
    return null;
  }

  const { album, artist, playlist } = recentMusic;

  return (
    <View style={styles.container}>
      {artist && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ ...styles.recentlyItem, ...styles.mr }}
          onPress={() =>
            navigation.navigate("ArtistHomeScreen", {
              id: artist.id,
            })
          }
        >
          <View style={styles.roundedBG}>
            <ImageBackground
              source={{
                uri: `${artist.img}`,
              }}
              style={styles.img}
              resizeMode="cover"
              imageStyle={styles.imageStyle}
            >
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.iconBox}
                onPress={() =>
                  navigation.navigate("ArtistHomeScreen", {
                    id: artist.id,
                  })
                }
              >
                <Entypo
                  name="controller-play"
                  size={18}
                  color="white"
                  style={styles.loveIcon}
                />
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.recentlyName}>{artist.title}</Text>
            <Text style={styles.recentlyArtist}>Artist</Text>
            <View style={styles.likesBox}>
              <AntDesign name="heart" size={10} color="white" />
              <Text style={styles.recentlyLiked}>{artist.likesCount}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      {playlist && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ ...styles.recentlyItem, ...styles.mr }}
          onPress={() => {
            navigation.navigate("PlaylistHomeScreen", {
              id: playlist.id,
            });
          }}
        >
          <View style={styles.roundedBG}>
            <ImageBackground
              source={{
                uri: `${playlist.img}`,
              }}
              style={styles.imgVariant}
              resizeMode="cover"
              imageStyle={styles.imageStyleVar}
            >
              <View style={styles.iconBox}>
                <Entypo
                  name="controller-play"
                  size={18}
                  color="white"
                  style={styles.loveIcon}
                />
              </View>
            </ImageBackground>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.recentlyName}>{playlist.title}</Text>
            <Text style={styles.recentlyArtist}>Playlist</Text>
            <View style={styles.likesBox}>
              <AntDesign name="heart" size={10} color="white" />
              <Text style={styles.recentlyLiked}>{playlist.likesCount}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}

      {album && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.recentlyItem}
          onPress={() => {
            navigation.navigate("AlbumHomeScreen", {
              id: album.id,
            });
          }}
        >
          <View style={styles.roundedBG}>
            <ImageBackground
              source={{
                uri: `${album.img}`,
              }}
              style={styles.imgVariant}
              resizeMode="cover"
              imageStyle={styles.imageStyleVar}
            >
              <View style={styles.iconBox}>
                <Entypo
                  name="controller-play"
                  size={18}
                  color="white"
                  style={styles.loveIcon}
                />
              </View>
            </ImageBackground>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.recentlyName}>{album.title}</Text>
            <Text style={styles.recentlyArtist}>Album</Text>
            <View style={styles.likesBox}>
              <AntDesign name="heart" size={10} color="white" />
              <Text style={styles.recentlyLiked}>{album.likesCount}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 30,
    marginTop: 15,
  },
  mr: {
    marginRight: 20,
  },
  recentlyBox: {},
  roundedBG: {
    height: 85,
    width: 85,
    borderRadius: 50,
  },
  img: {
    flex: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  imgVariant: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 10,
  },
  imageStyle: {
    borderRadius: 50,
  },
  iconBox: {
    height: 30,
    width: 30,
    backgroundColor: "#000000",
    opacity: 0.7,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    alignItems: "center",
  },
  recentlyItem: {
    width: 100,
  },
  recentlyName: {
    color: "#ffffff",
    fontFamily: "Lato_700Bold",
    fontSize: 13,
    marginVertical: 5,
  },
  recentlyArtist: {
    color: "#FFFFFF",
    opacity: 0.8,
    marginBottom: 7,
    fontSize: 12,
  },
  loveIcon: {
    opacity: 0.8,
  },
  likesBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  recentlyLiked: {
    color: "#FFFFFF",
    marginLeft: 5,
    fontSize: 10,
  },
  imageStyleVar: {
    borderRadius: 5,
  },
});

export default RecentlyPlayed;
