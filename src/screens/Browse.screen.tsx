import React, { useContext } from "react";
import { StyleSheet, ScrollView, ActivityIndicator, View } from "react-native";
import GenreCard from "../components/GenreCard/GenreCard";
import SafeAreaComp from "../components/SafeArea/SafeAreaComp";
import { SectionTitle } from "../components/Text/SectionTitle";
import { GenreContext } from "../services/genre/genre.service";
import { genreParamList } from "../navigation/@types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<genreParamList, "BrowseGenre">;

const Browse: React.FC<Props> = ({ navigation }) => {
  const { isLoading, genres } = useContext(GenreContext);

  if (isLoading) {
    return (
      <SafeAreaComp showSearchBar>
        <View style={styles.indicatorContainer}>
          <ActivityIndicator size="small" color="#FFFFFF" />
        </View>
      </SafeAreaComp>
    );
  }

  return (
    <SafeAreaComp showSearchBar>
      <ScrollView style={styles.screen}>
        <SectionTitle>Genres</SectionTitle>
        <View style={styles.genreContainer}>
          {genres
            ? genres.map((genre: Record<string, any>) => {
                return (
                  <GenreCard
                    key={genre._id}
                    bgImage={genre.picture}
                    genreId={genre._id}
                    genreTitle={genre.name}
                    id={genre.id}
                    navigation={navigation}
                  />
                );
              })
            : null}
        </View>
      </ScrollView>
    </SafeAreaComp>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingLeft: 15,
  },
  genreContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  indicatorContainer: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    marginTop: "70%",
  },
});

export default Browse;
