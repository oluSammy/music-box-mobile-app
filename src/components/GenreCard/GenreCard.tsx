import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

type Props = {
  bgImage: string;
  genreId: string;
  genreTitle: string;
  id: string;
  navigation: any;
};

const GenreCard: React.FC<Props> = ({ genreTitle, bgImage, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate("GenreTabs");
      }}
    >
      <ImageBackground
        source={{
          uri: `${bgImage}`,
        }}
        style={styles.root}
        imageStyle={styles.roundedImg}
      >
        <View style={styles.purple}>
          <Text style={styles.genreText}>{genreTitle}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    marginRight: 15,
    height: 90,
    width: 100,
    marginBottom: 10,
  },
  roundedImg: {
    borderRadius: 9,
  },
  purple: {
    flex: 1,
    backgroundColor: "#9B2DEF",
    opacity: 0.6,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    borderRadius: 9,
    padding: 10,
  },
  genreText: {
    color: "#FFFFFF",
    fontFamily: "Lato_900Black",
    fontSize: 14,
  },
});

export default GenreCard;
