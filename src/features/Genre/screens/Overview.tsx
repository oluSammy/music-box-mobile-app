import React from "react";
import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import {
  StyledBox,
  StyledTouchBox,
  RoundedImgBg,
  StyledIconBox,
  LikeIcon,
  LikeBox,
  LikeText,
  LikeTitle,
} from "../../../components/playlistBox/PlaylistBox";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "../styles/genre.styles";

const Overview: React.FC<any> = ({ navigation }) => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.playListBox}>
        <View style={styles.playHeader}>
          <Text style={styles.playListTitle}>Playlists</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.viewTouch}>
            <Text style={styles.view}>View All</Text>
            <AntDesign name="right" size={15} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.playlistContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <StyledBox>
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
              >
                <StyledIconBox>
                  <Entypo name="controller-play" size={18} color="white" />
                </StyledIconBox>
              </RoundedImgBg>
            </StyledTouchBox>
            <LikeTitle>Workout Rock</LikeTitle>
            <LikeBox>
              <LikeIcon name="heart" size={15} color="white" />
              <LikeText>414,228</LikeText>
            </LikeBox>
          </StyledBox>
          <StyledBox>
            <StyledTouchBox activeOpacity={0.9}>
              <RoundedImgBg
                source={{
                  uri: "https://cdns-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/120x120-000000-80-0-0.jpg",
                }}
                resizeMode="cover"
                imageStyle={styles.imageStyle}
              >
                <StyledIconBox>
                  <Entypo name="controller-play" size={18} color="white" />
                </StyledIconBox>
              </RoundedImgBg>
            </StyledTouchBox>
            <LikeTitle>Workout Rock</LikeTitle>
            <LikeBox>
              <LikeIcon name="heart" size={15} color="white" />
              <LikeText>414,228</LikeText>
            </LikeBox>
          </StyledBox>
          <StyledBox>
            <StyledTouchBox activeOpacity={0.9}>
              <RoundedImgBg
                source={{
                  uri: "https://cdns-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/120x120-000000-80-0-0.jpg",
                }}
                resizeMode="cover"
                imageStyle={styles.imageStyle}
              >
                <StyledIconBox>
                  <Entypo name="controller-play" size={18} color="white" />
                </StyledIconBox>
              </RoundedImgBg>
            </StyledTouchBox>
            <LikeTitle>Workout Rock</LikeTitle>
            <LikeBox>
              <LikeIcon name="heart" size={15} color="white" />
              <LikeText>414,228</LikeText>
            </LikeBox>
          </StyledBox>
          <StyledBox>
            <StyledTouchBox activeOpacity={0.9}>
              <RoundedImgBg
                source={{
                  uri: "https://cdns-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/120x120-000000-80-0-0.jpg",
                }}
                resizeMode="cover"
                imageStyle={styles.imageStyle}
              >
                <StyledIconBox>
                  <Entypo name="controller-play" size={18} color="white" />
                </StyledIconBox>
              </RoundedImgBg>
            </StyledTouchBox>
            <LikeTitle>Workout Rock</LikeTitle>
            <LikeBox>
              <LikeIcon name="heart" size={15} color="white" />
              <LikeText>414,228</LikeText>
            </LikeBox>
          </StyledBox>
        </ScrollView>
      </View>
      <View style={styles.playListBox}>
        <View style={styles.playHeader}>
          <Text style={styles.playListTitle}>Artists</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.viewTouch}>
            <Text style={styles.view}>View All</Text>
            <AntDesign name="right" size={15} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.playlistContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <StyledBox>
            <StyledTouchBox
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate("ArtistScreen");
              }}
            >
              <RoundedImgBg
                source={{
                  uri: "https://cdns-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/120x120-000000-80-0-0.jpg",
                }}
                resizeMode="cover"
                imageStyle={styles.imageStyles}
              />
            </StyledTouchBox>
            <LikeTitle>Workout Rock</LikeTitle>
            <LikeBox>
              <LikeIcon name="heart" size={15} color="white" />
              <LikeText>414,228</LikeText>
            </LikeBox>
          </StyledBox>
          <StyledBox>
            <StyledTouchBox
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate("ArtistScreen");
              }}
            >
              <RoundedImgBg
                source={{
                  uri: "https://cdns-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/120x120-000000-80-0-0.jpg",
                }}
                resizeMode="cover"
                imageStyle={styles.imageStyles}
              />
            </StyledTouchBox>
            <LikeTitle>Workout Rock</LikeTitle>
            <LikeBox>
              <LikeIcon name="heart" size={15} color="white" />
              <LikeText>414,228</LikeText>
            </LikeBox>
          </StyledBox>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default React.memo(Overview);
