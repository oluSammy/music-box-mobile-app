import React, { useContext } from "react";
import { View, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import GenreCard from "../GenreCard/GenreCard";
import { GenreContext } from "../../services/genre/genre.service";

const BrowseGenre = () => {
  const { isLoading, genres } = useContext(GenreContext);

  return (
    <View>
      {isLoading && <ActivityIndicator size="small" color="#FFFFFF" />}
      <ScrollView
        horizontal={true}
        style={styles.sectionContainer}
        showsHorizontalScrollIndicator={false}
      >
        {genres
          ? genres.map((genre: Record<string, any>) => {
              return (
                <GenreCard
                  key={genre._id}
                  bgImage={genre.picture}
                  genreId={genre._id}
                  genreTitle={genre.name}
                  id={genre.id}
                />
              );
            })
          : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 15,
  },
});

export default BrowseGenre;
