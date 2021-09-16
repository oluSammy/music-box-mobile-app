import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const RecentlyPlayed = () => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.recentlyItem, ...styles.mr }}>
        <View style={styles.roundedBG}>
          <ImageBackground
            source={{
              uri: "https://cdns-images.dzcdn.net/images/artist/96f95f0659720ec5bda8ffd4f5317b2f/250x250-000000-80-0-0.jpg",
            }}
            style={styles.img}
            resizeMode="cover"
            imageStyle={styles.imageStyle}
          >
            <TouchableOpacity activeOpacity={0.5} style={styles.iconBox}>
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
          <Text style={styles.recentlyName}>Adam West</Text>
          <Text style={styles.recentlyArtist}>Adam Wessst</Text>
          <View style={styles.likesBox}>
            <AntDesign name="heart" size={15} color="white" />
            <Text style={styles.recentlyLiked}>3</Text>
          </View>
        </View>
      </View>
      <View style={{ ...styles.recentlyItem, ...styles.mr }}>
        <View style={styles.roundedBG}>
          <ImageBackground
            source={{
              uri: "https://cdns-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/120x120-000000-80-0-0.jpg",
            }}
            style={styles.imgVariant}
            resizeMode="cover"
            // imageStyle={styles.imageStyle}
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
          <Text style={styles.recentlyName}>Adam West</Text>
          <Text style={styles.recentlyArtist}>Adam Wessst</Text>
          <View style={styles.likesBox}>
            <AntDesign name="heart" size={15} color="white" />
            <Text style={styles.recentlyLiked}>3</Text>
          </View>
        </View>
      </View>
      <View style={styles.recentlyItem}>
        <View style={styles.roundedBG}>
          <ImageBackground
            source={{
              uri: "https://cdns-images.dzcdn.net/images/cover/d0f5b22e23e1e300dc1476274495a1f1/250x250-000000-80-0-0.jpg",
            }}
            style={styles.imgVariant}
            resizeMode="cover"
            // imageStyle={styles.imageStyle}
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
          <Text style={styles.recentlyName}>Adam West</Text>
          <Text style={styles.recentlyArtist}>Adam Wessst</Text>
          <View style={styles.likesBox}>
            <AntDesign name="heart" size={15} color="white" />
            <Text style={styles.recentlyLiked}>3</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
  },
  mr: {
    marginRight: 20,
  },
  recentlyBox: {},
  roundedBG: {
    height: 100,
    width: 100,
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
    // alignItems: "center",
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
    fontSize: 17,
    marginVertical: 5,
  },
  recentlyArtist: {
    color: "#FFFFFF",
    opacity: 0.8,
    marginBottom: 7,
  },
  loveIcon: {
    opacity: 0.8,
  },
  likesBox: {
    flexDirection: "row",
    justifyContent: "center",
  },
  recentlyLiked: {
    color: "#FFFFFF",
    marginLeft: 5,
  },
});

export default RecentlyPlayed;
