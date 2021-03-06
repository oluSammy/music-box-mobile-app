import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

type Prop = {
  img: string;
  artistName: string;
  likes: number;
  navigation: any;
  id: string;
};

const Artist: React.FC<Prop> = ({ img, artistName, likes, navigation, id }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate("ArtistHomeScreen", {
          id,
        })
      }
      style={styles.root}
    >
      <Image
        source={{
          uri: `${img}`,
        }}
        style={styles.img}
      />
      <Text style={styles.artistName}>{artistName}</Text>
      <View style={styles.likeBox}>
        <AntDesign name="heart" size={15} color="white" />
        <Text style={styles.likeCount}>{likes}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    marginRight: 15,
    alignItems: "center",
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  artistName: {
    color: "#FFFFFF",
    fontFamily: "Lato_700Bold",
    fontSize: 12,
    marginBottom: 3,
    marginTop: 5,
  },
  likeBox: {
    flexDirection: "row",
    marginTop: 5,
  },
  likeCount: {
    color: "#FFFFFF",
    marginLeft: 5,
  },
});

export default Artist;
