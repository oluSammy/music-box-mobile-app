import React, { useState, useCallback, useContext, FC, useEffect } from "react";
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
import axios from "axios";
import { AuthContext } from "../../../services/authentication/auth.service";
import { API_URL } from "../../../constants/url";

type Props = NativeStackScreenProps<libraryParamList, "AllArtists">;

const ListeningHistory: FC<Props> = ({ navigation }) => {
  const [today, setToday] = useState(null);
  const [yesterday, setYesterday] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [error, setError] = useState(null);

  const { user } = useContext(AuthContext);

  const fetchHistory = useCallback(async () => {
    const config = {
      headers: { Authorization: `Bearer ${user?.data.token}` },
    };
    const { data } = await axios.get(`${API_URL}history/getHistory`, config);
    console.log(data);
    try {
    } catch (err: any) {
      setError(err.response);
      console.log(err.response);
    }
  }, [user?.data.token]);

  useEffect(() => {
    const getHistory = async () => {
      await fetchHistory();
    };
    getHistory();
  }, [fetchHistory]);

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
