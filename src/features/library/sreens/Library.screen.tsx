import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import RecentlyPlayed from "../components/RecentlyPlayed";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { libraryParamList } from "../../../navigation/@types/navigation";

// type Props = NativeStackScreenProps<libraryParamList, "LibraryHome">;
type Props = any;

const Library: React.FC<Props> = ({ navigation }) => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#161A1A" />
        <SafeAreaView style={styles.flex}>
          <View>
            <View style={styles.header}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.openDrawer()}
              >
                <Ionicons name="menu-outline" size={24} color="#FFFFFF" />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Library</Text>
              <FontAwesome5 name="user-circle" size={24} color="#FFFFFF" />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.libraryList}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.touchableList}
                  onPress={() => {
                    navigation.navigate("AllPlayList");
                  }}
                >
                  <MaterialCommunityIcons
                    name="playlist-music-outline"
                    size={28}
                    color="#2DCEEF"
                    style={styles.listIcon}
                  />
                  <Text style={styles.listItem}>Playlists</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.touchableList}
                >
                  <AntDesign
                    name="hearto"
                    size={26}
                    color="#2DCEEF"
                    style={styles.listIcon}
                  />
                  <Text style={styles.listItem}>Favorite Songs</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.touchableList}
                  onPress={() => {
                    navigation.navigate("AllAlbum");
                  }}
                >
                  <MaterialCommunityIcons
                    name="record-circle-outline"
                    size={28}
                    color="#2DCEEF"
                    style={styles.listIcon}
                  />
                  <Text style={styles.listItem}>Albums</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.touchableList}
                  onPress={() => {
                    navigation.navigate("AllArtists");
                  }}
                >
                  <SimpleLineIcons
                    name="star"
                    size={28}
                    color="#2DCEEF"
                    style={styles.listIcon}
                  />
                  <Text style={styles.listItem}>Artists</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.touchableList}
                  onPress={() => {
                    navigation.navigate("ListeningHistoryScreen");
                  }}
                >
                  <MaterialCommunityIcons
                    name="history"
                    size={28}
                    color="#2DCEEF"
                    style={styles.listIcon}
                  />
                  <Text style={styles.listItem}>Listening History</Text>
                </TouchableOpacity>
              </View>
              <RecentlyPlayed navigation={navigation} />
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    </React.Fragment>
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
    marginBottom: 25,
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
