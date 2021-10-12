import React from "react";
import { Text, View, FlatList } from "react-native";
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
import { styles } from "../styles/genre.styles";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  navigation: any;
  artist: Record<string, any>[] | null;
  playlist: Record<string, any>[] | null;
  error: any;
};

const Overview: React.FC<Props> = ({ navigation, artist, playlist, error }) => {
  const RenderItem = ({ item }: any) => {
    return (
      <StyledBox>
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
          >
            <StyledIconBox>
              <Entypo name="controller-play" size={18} color="white" />
            </StyledIconBox>
          </RoundedImgBg>
        </StyledTouchBox>
        <LikeTitle>{item.name}</LikeTitle>
        <LikeBox>
          <LikeIcon name="heart" size={15} color="white" />
          <LikeText> {item.likesCount} </LikeText>
        </LikeBox>
      </StyledBox>
    );
  };

  const RenderArtists = ({ item }: any) => {
    return (
      <StyledBox>
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
        <LikeTitle> {item.name} </LikeTitle>
      </StyledBox>
    );
  };

  return (
    <View style={styles.root}>
      <View style={styles.playListBox}>
        {error.artistErr ||
          (error.artistErr && (
            <Text style={styles.errorTxt}>An Error Occurred</Text>
          ))}
        <View style={styles.playHeader}>
          <Text style={styles.playListTitle}>Playlists</Text>
        </View>
        <View style={styles.playlistContainer}>
          {playlist && playlist.length === 0 && (
            <View style={styles.createPlaylist}>
              <Ionicons name="add-circle" size={24} color="#5CCFEF" />
              <Text style={styles.addTxt}>Create</Text>
            </View>
          )}
          {playlist && (
            <FlatList
              data={playlist}
              renderItem={RenderItem}
              keyExtractor={(item) => `${item._id}`}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          )}
        </View>
        <View style={styles.contd}>
          <View style={styles.playHeader}>
            <Text style={styles.playListTitle}>Artists</Text>
          </View>
          <View style={styles.playlistContainer}>
            {artist && (
              <FlatList
                data={artist}
                renderItem={RenderArtists}
                keyExtractor={(item) => `${item.id}`}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default React.memo(Overview);
