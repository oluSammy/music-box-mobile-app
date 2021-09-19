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
import { styles } from "../styles/playlist.styles";
import { Ionicons } from "@expo/vector-icons";
import { libraryParamList } from "../../../navigation/@types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Accordion from "../../../components/Accordion/Accordion";
import { styles as songStyles } from "../styles/albumSongList";

type Props = NativeStackScreenProps<libraryParamList, "AllArtists">;

const ListeningHistory: FC<Props> = ({ navigation }) => {
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
          <Text style={styles.headerTitle}>Listening History</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Accordion title="Today">
            <View style={songStyles.playlistItem}>
              <View style={songStyles.play}>
                <Image
                  source={require("../../../../assets/images/playlist-img.jpeg")}
                  style={songStyles.playlistImg}
                />
                <View style={songStyles.playlistDetail}>
                  <Text style={songStyles.songTitle}>Bicycle Race</Text>
                  <Text style={songStyles.songDuration}>Queen / 3:15</Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.7}>
                <Ionicons name="add" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View style={songStyles.playlistItem}>
              <View style={songStyles.play}>
                <Image
                  source={require("../../../../assets/images/playlist-img.jpeg")}
                  style={songStyles.playlistImg}
                />
                <View style={songStyles.playlistDetail}>
                  <Text style={songStyles.songTitle}>Bicycle Race</Text>
                  <Text style={songStyles.songDuration}>Queen / 3:15</Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.7}>
                <Ionicons name="add" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View style={songStyles.playlistItem}>
              <View style={songStyles.play}>
                <Image
                  source={require("../../../../assets/images/playlist-img.jpeg")}
                  style={songStyles.playlistImg}
                />
                <View style={songStyles.playlistDetail}>
                  <Text style={songStyles.songTitle}>Bicycle Race</Text>
                  <Text style={songStyles.songDuration}>Queen / 3:15</Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.7}>
                <Ionicons name="add" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View style={songStyles.playlistItem}>
              <View style={songStyles.play}>
                <Image
                  source={require("../../../../assets/images/playlist-img.jpeg")}
                  style={songStyles.playlistImg}
                />
                <View style={songStyles.playlistDetail}>
                  <Text style={songStyles.songTitle}>Bicycle Race</Text>
                  <Text style={songStyles.songDuration}>Queen / 3:15</Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.7}>
                <Ionicons name="add" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </Accordion>
          <Accordion title="Yesterday">
            <View style={songStyles.playlistItem}>
              <View style={songStyles.play}>
                <Image
                  source={require("../../../../assets/images/playlist-img.jpeg")}
                  style={songStyles.playlistImg}
                />
                <View style={songStyles.playlistDetail}>
                  <Text style={songStyles.songTitle}>Bicycle Race</Text>
                  <Text style={songStyles.songDuration}>Queen / 3:15</Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.7}>
                <Ionicons name="add" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View style={songStyles.playlistItem}>
              <View style={songStyles.play}>
                <Image
                  source={require("../../../../assets/images/playlist-img.jpeg")}
                  style={songStyles.playlistImg}
                />
                <View style={songStyles.playlistDetail}>
                  <Text style={songStyles.songTitle}>Bicycle Race</Text>
                  <Text style={songStyles.songDuration}>Queen / 3:15</Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.7}>
                <Ionicons name="add" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View style={songStyles.playlistItem}>
              <View style={songStyles.play}>
                <Image
                  source={require("../../../../assets/images/playlist-img.jpeg")}
                  style={songStyles.playlistImg}
                />
                <View style={songStyles.playlistDetail}>
                  <Text style={songStyles.songTitle}>Bicycle Race</Text>
                  <Text style={songStyles.songDuration}>Queen / 3:15</Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.7}>
                <Ionicons name="add" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View style={songStyles.playlistItem}>
              <View style={songStyles.play}>
                <Image
                  source={require("../../../../assets/images/playlist-img.jpeg")}
                  style={songStyles.playlistImg}
                />
                <View style={songStyles.playlistDetail}>
                  <Text style={songStyles.songTitle}>Bicycle Race</Text>
                  <Text style={songStyles.songDuration}>Queen / 3:15</Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.7}>
                <Ionicons name="add" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </Accordion>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ListeningHistory;
