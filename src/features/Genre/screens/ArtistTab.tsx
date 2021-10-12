import React from "react";
import { ScrollView, View, Text } from "react-native";
import { styles } from "../styles/genre.styles";
import {
  StyledTouchBox,
  RoundedImgBg,
  LikeTitleVar,
  StyledBoxVar,
} from "../../../components/playlistBox/PlaylistBox";

type Props = {
  navigation: any;
  artist: Record<string, any>[] | null;
  error: any;
};

const ArtistTab: React.FC<Props> = ({ navigation, artist, error }) => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.boxContainer}>
        {error && <Text style={styles.errorTxt}>An Error Occurred</Text>}
        {artist &&
          artist.map((item) => (
            <StyledBoxVar key={item.id}>
              <StyledTouchBox
                activeOpacity={0.9}
                onPress={() => {
                  navigation.navigate("ArtistScreen", {
                    id: item.id,
                  });
                }}
              >
                <RoundedImgBg
                  source={{
                    uri: `${item.picture}`,
                  }}
                  resizeMode="cover"
                  imageStyle={styles.imageStyles}
                />
              </StyledTouchBox>
              <LikeTitleVar>{item.name}</LikeTitleVar>
            </StyledBoxVar>
          ))}
      </View>
    </ScrollView>
  );
};

export default React.memo(ArtistTab);
