import React from "react";
import { ScrollView, View } from "react-native";
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

const PlaylistTab: React.FC<any> = ({ navigation }) => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.boxContainer}>
        <StyledBoxVar>
          <StyledTouchBox
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate("PlaylistScreen");
            }}
          >
            <RoundedImgBg
              source={{
                uri: "https://cdns-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/120x120-000000-80-0-0.jpg",
              }}
              resizeMode="cover"
              imageStyle={styles.imageStyle}
            />
          </StyledTouchBox>
          <LikeTitle>Workout Rock</LikeTitle>
          <LikeBox>
            <LikeIcon name="heart" size={15} color="white" />
            <LikeText>414,228</LikeText>
          </LikeBox>
        </StyledBoxVar>
        <StyledBoxVar>
          <StyledTouchBox activeOpacity={0.9}>
            <RoundedImgBg
              source={{
                uri: "https://cdns-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/120x120-000000-80-0-0.jpg",
              }}
              resizeMode="cover"
              imageStyle={styles.imageStyle}
            />
          </StyledTouchBox>
          <LikeTitle>Workout Rock</LikeTitle>
          <LikeBox>
            <LikeIcon name="heart" size={15} color="white" />
            <LikeText>414,228</LikeText>
          </LikeBox>
        </StyledBoxVar>
        <StyledBoxVar>
          <StyledTouchBox activeOpacity={0.9}>
            <RoundedImgBg
              source={{
                uri: "https://cdns-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/120x120-000000-80-0-0.jpg",
              }}
              resizeMode="cover"
              imageStyle={styles.imageStyle}
            />
          </StyledTouchBox>
          <LikeTitle>Workout Rock</LikeTitle>
          <LikeBox>
            <LikeIcon name="heart" size={15} color="white" />
            <LikeText>414,228</LikeText>
          </LikeBox>
        </StyledBoxVar>
        <StyledBoxVar>
          <StyledTouchBox activeOpacity={0.9}>
            <RoundedImgBg
              source={{
                uri: "https://cdns-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/120x120-000000-80-0-0.jpg",
              }}
              resizeMode="cover"
              imageStyle={styles.imageStyle}
            />
          </StyledTouchBox>
          <LikeTitle>Workout Rock</LikeTitle>
          <LikeBox>
            <LikeIcon name="heart" size={15} color="white" />
            <LikeText>414,228</LikeText>
          </LikeBox>
        </StyledBoxVar>
        <StyledBoxVar>
          <StyledTouchBox activeOpacity={0.9}>
            <RoundedImgBg
              source={{
                uri: "https://cdns-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/120x120-000000-80-0-0.jpg",
              }}
              resizeMode="cover"
              imageStyle={styles.imageStyle}
            />
          </StyledTouchBox>
          <LikeTitle>Workout Rock</LikeTitle>
          <LikeBox>
            <LikeIcon name="heart" size={15} color="white" />
            <LikeText>414,228</LikeText>
          </LikeBox>
        </StyledBoxVar>
      </View>
    </ScrollView>
  );
};

export default React.memo(PlaylistTab);
