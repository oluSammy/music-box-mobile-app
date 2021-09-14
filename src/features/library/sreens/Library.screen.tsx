import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import RecentlyPlayed from "../components/RecentlyPlayed";

const isAndroid = Platform.OS === "android";

const TouchableComp: any = isAndroid
  ? TouchableNativeFeedback
  : TouchableOpacity;

const Library = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161A1A" />
      <SafeAreaView style={styles.flex}>
        <View style={styles.header}>
          <Ionicons name="menu-outline" size={24} color="#FFFFFF" />
          <Text style={styles.headerTitle}>Library</Text>
          <FontAwesome5 name="user-circle" size={24} color="#FFFFFF" />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.libraryList}>
            <TouchableComp activeOpacity={0.7} style={styles.touchableList}>
              <MaterialCommunityIcons
                name="playlist-music-outline"
                size={28}
                color="#2DCEEF"
                style={styles.listIcon}
              />
              <Text style={styles.listItem}>Playlists</Text>
            </TouchableComp>
            <TouchableComp activeOpacity={0.7} style={styles.touchableList}>
              <AntDesign
                name="hearto"
                size={26}
                color="#2DCEEF"
                style={styles.listIcon}
              />
              <Text style={styles.listItem}>Favorite Songs</Text>
            </TouchableComp>
            <TouchableComp activeOpacity={0.7} style={styles.touchableList}>
              <MaterialCommunityIcons
                name="record-circle-outline"
                size={28}
                color="#2DCEEF"
                style={styles.listIcon}
              />
              <Text style={styles.listItem}>Albums</Text>
            </TouchableComp>
            <TouchableComp activeOpacity={0.7} style={styles.touchableList}>
              <SimpleLineIcons
                name="star"
                size={28}
                color="#2DCEEF"
                style={styles.listIcon}
              />
              <Text style={styles.listItem}>Artists</Text>
            </TouchableComp>
            <TouchableComp activeOpacity={0.7} style={styles.touchableList}>
              <MaterialCommunityIcons
                name="history"
                size={28}
                color="#2DCEEF"
                style={styles.listIcon}
              />
              <Text style={styles.listItem}>Listening History</Text>
            </TouchableComp>
          </View>
          <RecentlyPlayed />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161A1A",
    flex: 1,
    minHeight: "100%",
  },
  flex: {
    flex: 1,
    marginHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "Lato_900Black",
  },
  libraryList: {
    marginTop: 40,
  },
  touchableList: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  listIcon: {
    marginRight: 10,
  },
  listItem: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Lato_700Bold",
  },
});

export default Library;
