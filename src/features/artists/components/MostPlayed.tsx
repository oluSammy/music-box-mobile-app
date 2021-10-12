import React, { useContext } from "react";
import { ScrollView, StyleSheet, ActivityIndicator, View } from "react-native";
import Artist from "./Artist";
import { ArtistContext } from "../../../services/artists/artist.service";

type Props = {
  navigation: any;
};

const MostPlayed: React.FC<Props> = ({ navigation }) => {
  const { isLoadingMostPlayed, mostPlayed } = useContext(ArtistContext);

  if (isLoadingMostPlayed) {
    return (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator size="small" color="#FFFFFF" />
      </View>
    );
  }

  return (
    <ScrollView horizontal={true} style={styles.container}>
      {mostPlayed &&
        mostPlayed
          .slice(0, 9)
          .map((artist) => (
            <Artist
              likes={artist.likedCount}
              artistName={artist.name}
              img={artist.picture}
              key={artist._id}
              navigation={navigation}
              id={artist.id}
            />
          ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
    flex: 1,
  },
  indicatorContainer: {
    justifyContent: "center",
    flex: 1,
  },
});

export default MostPlayed;
