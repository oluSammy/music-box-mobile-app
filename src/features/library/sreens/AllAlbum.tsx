import React, { FC } from "react";
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { libraryParamList } from "../../../navigation/@types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles } from "../styles/playlist.styles";

type Props = NativeStackScreenProps<libraryParamList, "AllAlbum">;

const AllALbums: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#161A1A" />
      <SafeAreaView style={styles.flex}>
        <View style={styles.header}>
          <View style={styles.backBox}>
            <TouchableOpacity
              style={styles.backBtn}
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={18} color="#FFFFFF" />
              <Text style={styles.backBtnText}>Back</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.headerTitle}>ALBUMS</Text>
        </View>
        <ScrollView>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.playlistItem}
            onPress={() => {
              navigation.navigate("AlbumScreen");
            }}
          >
            <Image
              source={{
                uri: "https://cdns-images.dzcdn.net/images/cover/da2ab992d744dfd7811f223cc0708856/120x120-000000-80-0-0.jpg",
              }}
              style={styles.playlistImg}
            />
            <View style={styles.playlistText}>
              <Text style={styles.mainTxt}>Yellow Submarine</Text>
              <Text style={styles.subTxt}>Beatles / 13 songs</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.playlistItem}
            onPress={() => {
              navigation.navigate("AlbumScreen");
            }}
          >
            <Image
              source={{
                uri: "https://cdns-images.dzcdn.net/images/cover/da2ab992d744dfd7811f223cc0708856/120x120-000000-80-0-0.jpg",
              }}
              style={styles.playlistImg}
            />
            <View style={styles.playlistText}>
              <Text style={styles.mainTxt}>Yellow Submarine</Text>
              <Text style={styles.subTxt}>Beatles / 13 songs</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.playlistItem}
            onPress={() => {
              navigation.navigate("AlbumScreen");
            }}
          >
            <Image
              source={{
                uri: "https://cdns-images.dzcdn.net/images/cover/da2ab992d744dfd7811f223cc0708856/120x120-000000-80-0-0.jpg",
              }}
              style={styles.playlistImg}
            />
            <View style={styles.playlistText}>
              <Text style={styles.mainTxt}>Yellow Submarine</Text>
              <Text style={styles.subTxt}>Beatles / 13 songs</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.playlistItem}
            onPress={() => {
              navigation.navigate("AlbumScreen");
            }}
          >
            <Image
              source={{
                uri: "https://cdns-images.dzcdn.net/images/cover/da2ab992d744dfd7811f223cc0708856/120x120-000000-80-0-0.jpg",
              }}
              style={styles.playlistImg}
            />
            <View style={styles.playlistText}>
              <Text style={styles.mainTxt}>Yellow Submarine</Text>
              <Text style={styles.subTxt}>Beatles / 13 songs</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default AllALbums;
