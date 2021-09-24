import React from "react";
import { ScrollView, View } from "react-native";
import { styles } from "../styles/genre.styles";
import {
  StyledTouchBox,
  RoundedImgBg,
  LikeTitleVar,
  StyledBoxVar,
} from "../../../components/playlistBox/PlaylistBox";
// import { genreParamList } from "../../../navigation/@types/navigation";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";

// type Props = NativeStackScreenProps<genreParamList, "GenreTabs">;

const ArtistTab: React.FC<any> = ({ navigation }) => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.boxContainer}>
        <StyledBoxVar>
          <StyledTouchBox
            activeOpacity={0.9}
            onPress={() => navigation.navigate("ArtistScreen")}
          >
            <RoundedImgBg
              source={{
                uri: "https://api.deezer.com/artist/288166/image",
              }}
              resizeMode="cover"
              imageStyle={styles.imageStyles}
            />
          </StyledTouchBox>
          <LikeTitleVar>Justin</LikeTitleVar>
        </StyledBoxVar>
        <StyledBoxVar>
          <StyledTouchBox
            activeOpacity={0.9}
            onPress={() => navigation.navigate("ArtistScreen")}
          >
            <RoundedImgBg
              source={{
                uri: "https://api.deezer.com/artist/246791/image",
              }}
              resizeMode="cover"
              imageStyle={styles.imageStyles}
            />
          </StyledTouchBox>
          <LikeTitleVar>Drake</LikeTitleVar>
        </StyledBoxVar>
        <StyledBoxVar>
          <StyledTouchBox
            activeOpacity={0.9}
            onPress={() => navigation.navigate("ArtistScreen")}
          >
            <RoundedImgBg
              source={{
                uri: "https://api.deezer.com/artist/3977201/image",
              }}
              resizeMode="cover"
              imageStyle={styles.imageStyles}
            />
          </StyledTouchBox>
          <LikeTitleVar>Lil Durk</LikeTitleVar>
        </StyledBoxVar>
        <StyledBoxVar>
          <StyledTouchBox
            activeOpacity={0.9}
            onPress={() => navigation.navigate("ArtistScreen")}
          >
            <RoundedImgBg
              source={{
                uri: "https://api.deezer.com/artist/165930/image",
              }}
              resizeMode="cover"
              imageStyle={styles.imageStyles}
            />
          </StyledTouchBox>
          <LikeTitleVar>Future</LikeTitleVar>
        </StyledBoxVar>
      </View>
    </ScrollView>
  );
};

export default React.memo(ArtistTab);
