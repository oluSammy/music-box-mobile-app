import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "../styles/searchScreen";
import { SearchBar } from "react-native-elements";
import { SearchBarBaseProps } from "react-native-elements/dist/searchbar/SearchBar";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { searchParamsList } from "../../../navigation/@types/navigation";
import { styles as recentStyles } from "../../library/styles/playlist.styles";

const SafeSearchBar = SearchBar as unknown as React.FC<SearchBarBaseProps>;
type Props = NativeStackScreenProps<searchParamsList, "SearchScreen">;

const Search: React.FC<Props> = ({ navigation }) => {
  const [text, setText] = useState("");

  const updateText = (str: string) => {
    setText(str);
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#161A1A" />
      <SafeAreaView style={styles.flex}>
        <SafeSearchBar
          platform="default"
          placeholder="Search..."
          onChangeText={updateText}
          value={text}
          containerStyle={styles.containerStyle}
          searchIcon={
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="chevron-back" size={27} color="#FFFFFF" />
            </TouchableOpacity>
          }
        />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
          <View style={styles.recentHeader}>
            <Text style={styles.heading}>Recent Searches</Text>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.clear}>Clear</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.recentContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={recentStyles.playlistItem}
              onPress={() => {
                // navigation.navigate("AlbumScreen");
              }}
            >
              <Image
                source={{
                  uri: "https://cdns-images.dzcdn.net/images/cover/da2ab992d744dfd7811f223cc0708856/120x120-000000-80-0-0.jpg",
                }}
                style={recentStyles.playlistImg}
              />
              <View style={recentStyles.playlistText}>
                <Text style={recentStyles.mainTxt}>No Plan - EP</Text>
                <Text style={recentStyles.subTxt}>Album by David Bowie</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={recentStyles.playlistItem}
              onPress={() => {
                // navigation.navigate("AlbumScreen");
              }}
            >
              <Image
                source={{
                  uri: "https://cdns-images.dzcdn.net/images/cover/da2ab992d744dfd7811f223cc0708856/120x120-000000-80-0-0.jpg",
                }}
                style={recentStyles.playlistImg}
              />
              <View style={recentStyles.playlistText}>
                <Text style={recentStyles.mainTxt}>Yellow Submarine</Text>
                <Text style={recentStyles.subTxt}>Beatles / 13 songs</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.searchResults}>
            <View style={styles.resultsContainer}>
              <View style={styles.resultsHeader}>
                <Text style={styles.resultsTitle}>Artists</Text>
                <TouchableOpacity activeOpacity={0.8}>
                  <Text style={styles.clear}>View All</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={recentStyles.playlistItem}
                onPress={() => {
                  // navigation.navigate("AlbumScreen");
                }}
              >
                <Image
                  source={{
                    uri: "https://cdns-images.dzcdn.net/images/cover/da2ab992d744dfd7811f223cc0708856/120x120-000000-80-0-0.jpg",
                  }}
                  style={styles.roundedImg}
                />
                <View style={recentStyles.playlistText}>
                  <Text style={styles.titleText}>Yellow Submarine</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={recentStyles.playlistItem}
                onPress={() => {
                  // navigation.navigate("AlbumScreen");
                }}
              >
                <Image
                  source={{
                    uri: "https://cdns-images.dzcdn.net/images/cover/da2ab992d744dfd7811f223cc0708856/120x120-000000-80-0-0.jpg",
                  }}
                  style={styles.roundedImg}
                />
                <View style={recentStyles.playlistText}>
                  <Text style={styles.titleText}>Yellow Submarine</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={recentStyles.playlistItem}
                onPress={() => {
                  // navigation.navigate("AlbumScreen");
                }}
              >
                <Image
                  source={{
                    uri: "https://cdns-images.dzcdn.net/images/cover/da2ab992d744dfd7811f223cc0708856/120x120-000000-80-0-0.jpg",
                  }}
                  style={styles.roundedImg}
                />
                <View style={recentStyles.playlistText}>
                  <Text style={styles.titleText}>Yellow Submarine</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.resultsContainer}>
              <View style={styles.resultsHeader}>
                <Text style={styles.resultsTitle}>Albums</Text>
                <TouchableOpacity activeOpacity={0.8}>
                  <Text style={styles.clear}>View All</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={recentStyles.playlistItem}
                onPress={() => {
                  // navigation.navigate("AlbumScreen");
                }}
              >
                <Image
                  source={{
                    uri: "https://cdns-images.dzcdn.net/images/cover/da2ab992d744dfd7811f223cc0708856/120x120-000000-80-0-0.jpg",
                  }}
                  style={recentStyles.playlistImg}
                />
                <View style={recentStyles.playlistText}>
                  <Text style={styles.titleText}>Yellow Submarine</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={recentStyles.playlistItem}
                onPress={() => {
                  // navigation.navigate("AlbumScreen");
                }}
              >
                <Image
                  source={{
                    uri: "https://cdns-images.dzcdn.net/images/cover/da2ab992d744dfd7811f223cc0708856/120x120-000000-80-0-0.jpg",
                  }}
                  style={recentStyles.playlistImg}
                />
                <View style={recentStyles.playlistText}>
                  <Text style={styles.titleText}>Yellow Submarine</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={recentStyles.playlistItem}
                onPress={() => {
                  // navigation.navigate("AlbumScreen");
                }}
              >
                <Image
                  source={{
                    uri: "https://cdns-images.dzcdn.net/images/cover/da2ab992d744dfd7811f223cc0708856/120x120-000000-80-0-0.jpg",
                  }}
                  style={recentStyles.playlistImg}
                />
                <View style={recentStyles.playlistText}>
                  <Text style={styles.titleText}>Yellow Submarine</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.resultsContainer}>
              <View style={styles.resultsHeader}>
                <Text style={styles.resultsTitle}>Playlists</Text>
                <TouchableOpacity activeOpacity={0.8}>
                  <Text style={styles.clear}>View All</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={recentStyles.playlistItem}
                onPress={() => {
                  // navigation.navigate("AlbumScreen");
                }}
              >
                <Image
                  source={{
                    uri: "https://cdns-images.dzcdn.net/images/cover/da2ab992d744dfd7811f223cc0708856/120x120-000000-80-0-0.jpg",
                  }}
                  style={recentStyles.playlistImg}
                />
                <View style={recentStyles.playlistText}>
                  <Text style={styles.titleText}>Yellow Submarine</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={recentStyles.playlistItem}
                onPress={() => {
                  // navigation.navigate("AlbumScreen");
                }}
              >
                <Image
                  source={{
                    uri: "https://cdns-images.dzcdn.net/images/cover/da2ab992d744dfd7811f223cc0708856/120x120-000000-80-0-0.jpg",
                  }}
                  style={recentStyles.playlistImg}
                />
                <View style={recentStyles.playlistText}>
                  <Text style={styles.titleText}>Yellow Submarine</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={recentStyles.playlistItem}
                onPress={() => {
                  // navigation.navigate("AlbumScreen");
                }}
              >
                <Image
                  source={{
                    uri: "https://cdns-images.dzcdn.net/images/cover/da2ab992d744dfd7811f223cc0708856/120x120-000000-80-0-0.jpg",
                  }}
                  style={recentStyles.playlistImg}
                />
                <View style={recentStyles.playlistText}>
                  <Text style={styles.titleText}>Yellow Submarine</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Search;
