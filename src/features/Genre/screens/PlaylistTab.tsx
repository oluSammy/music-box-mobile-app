import React from "react";
import { ScrollView, View, Text } from "react-native";
import { styles } from "../styles/genre.styles";
import {
  StyledTouchBox,
  RoundedImgBg,
  LikeIcon,
  LikeBox,
  LikeText,
  LikeTitle,
  StyledBoxVar,
} from "../../../components/playlistBox/PlaylistBox";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  navigation: any;
  playlist: Record<string, any>[] | null;
  error: any;
};

const PlaylistTab: React.FC<Props> = ({ navigation, playlist, error }) => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.boxContainer}>
        {error && <Text style={styles.errorTxt}>An Error Occurred</Text>}
        {playlist && playlist.length === 0 && (
          <View style={styles.createPlaylist}>
            <Ionicons name="add-circle" size={24} color="#5CCFEF" />
            <Text style={styles.addTxt}>Create</Text>
          </View>
        )}
        {playlist &&
          playlist.map((item) => (
            <StyledBoxVar key={item._id}>
              <StyledTouchBox
                activeOpacity={0.9}
                onPress={() => {
                  navigation.navigate("PlaylistScreen", {
                    id: item._id,
                  });
                }}
              >
                <RoundedImgBg
                  source={{
                    uri: `${item.imgURL}`,
                  }}
                  resizeMode="cover"
                  imageStyle={styles.imageStyle}
                />
              </StyledTouchBox>
              <LikeTitle>{item.name}</LikeTitle>
              <LikeBox>
                <LikeIcon name="heart" size={15} color="white" />
                <LikeText>{item.likesCount} </LikeText>
              </LikeBox>
            </StyledBoxVar>
          ))}
      </View>
    </ScrollView>
  );
};

export default React.memo(PlaylistTab);
