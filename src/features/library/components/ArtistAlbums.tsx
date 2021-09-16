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

const ArtistAlbums = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Albums</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.album}>
          <ImageBackground
            source={{
              uri: "https://cdns-images.dzcdn.net/images/cover/65f63c1898ec4e3458f5985b22f2392f/120x120-000000-80-0-0.jpg",
            }}
            style={styles.img}
            imageStyle={styles.roundedImg}
          >
            <TouchableOpacity activeOpacity={0.5} style={styles.playBox}>
              <Entypo name="controller-play" size={13} color="white" />
            </TouchableOpacity>
          </ImageBackground>
          <Text style={styles.songTitle}>Dance</Text>
          <Text style={styles.songDate}>Released: 15/02/19</Text>
        </View>
        <View style={styles.album}>
          <ImageBackground
            source={{
              uri: "https://cdns-images.dzcdn.net/images/cover/65f63c1898ec4e3458f5985b22f2392f/120x120-000000-80-0-0.jpg",
            }}
            style={styles.img}
            imageStyle={styles.roundedImg}
          >
            <TouchableOpacity activeOpacity={0.5} style={styles.playBox}>
              <Entypo name="controller-play" size={13} color="white" />
            </TouchableOpacity>
          </ImageBackground>
          <Text style={styles.songTitle}>Dance</Text>
          <Text style={styles.songDate}>Released: 15/02/19</Text>
        </View>
        <View style={styles.album}>
          <ImageBackground
            source={{
              uri: "https://cdns-images.dzcdn.net/images/cover/65f63c1898ec4e3458f5985b22f2392f/120x120-000000-80-0-0.jpg",
            }}
            style={styles.img}
            imageStyle={styles.roundedImg}
          >
            <TouchableOpacity activeOpacity={0.5} style={styles.playBox}>
              <Entypo name="controller-play" size={13} color="white" />
            </TouchableOpacity>
          </ImageBackground>
          <Text style={styles.songTitle}>Dance</Text>
          <Text style={styles.songDate}>Released: 15/02/19</Text>
        </View>
        <View style={styles.album}>
          <ImageBackground
            source={{
              uri: "https://cdns-images.dzcdn.net/images/cover/65f63c1898ec4e3458f5985b22f2392f/120x120-000000-80-0-0.jpg",
            }}
            style={styles.img}
            imageStyle={styles.roundedImg}
          >
            <TouchableOpacity activeOpacity={0.5} style={styles.playBox}>
              <Entypo name="controller-play" size={13} color="white" />
            </TouchableOpacity>
          </ImageBackground>
          <Text style={styles.songTitle}>Dance</Text>
          <Text style={styles.songDate}>Released: 15/02/19</Text>
        </View>
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
  },
  songDate: {
    color: "#FFFFFF",
    opacity: 0.7,
  },
});

export default ArtistAlbums;
