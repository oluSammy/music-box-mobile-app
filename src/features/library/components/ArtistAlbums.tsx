import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

type Props = {
  album: Record<string, any>;
  navigation: any;
};

const ArtistAlbums: React.FC<Props> = ({ album, navigation }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Albums</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {album.map((el: Record<string, any>) => (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.album}
            key={el.id}
            onPress={() => {
              navigation.navigate("AlbumHomeScreen", {
                id: el.id,
              });
            }}
          >
            <ImageBackground
              source={{
                uri: `${el.cover_medium}`,
              }}
              style={styles.img}
              imageStyle={styles.roundedImg}
            >
              <TouchableOpacity activeOpacity={0.5} style={styles.playBox}>
                <Entypo name="controller-play" size={13} color="white" />
              </TouchableOpacity>
            </ImageBackground>
            <Text style={styles.songTitle}>{el.title}</Text>
            <Text style={styles.songDate}>{el.release_date}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
    marginBottom: 80,
  },
  title: {
    color: "#FFFFFF",
    fontFamily: "Lato_700Bold",
    fontSize: 15,
    marginBottom: 10,
  },
  img: {
    height: 110,
    width: 130,
    padding: 6,
    justifyContent: "flex-end",
  },
  roundedImg: {
    borderRadius: 7,
  },
  album: {
    marginRight: 20,
  },
  playBox: {
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#000000",
    opacity: 0.7,
  },
  songTitle: {
    color: "#FFFFFF",
    marginTop: 10,
    fontFamily: "Lato_700Bold",
    fontSize: 16,
    maxWidth: 120,
  },
  songDate: {
    color: "#FFFFFF",
    opacity: 0.7,
  },
});

export default ArtistAlbums;
