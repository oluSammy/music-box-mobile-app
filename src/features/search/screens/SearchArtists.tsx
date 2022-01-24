import React, { useEffect } from "react";
import {
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
} from "react-native";
import { styles } from "../../library/styles/playlist.styles";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { searchParamsList } from "../../../navigation/@types/navigation";

type Props = NativeStackScreenProps<searchParamsList, "SearchArtist">;

const SearchArtists: React.FC<Props> = ({ navigation, route }) => {
  const [allArtist, setAllArtist] = React.useState<Record<string, any>[] | []>(
    []
  );

  useEffect(() => {
    if (route.params) {
      //   setAllArtist(route.params.artist);
      const { artist } = route.params;
      setAllArtist(artist);
    }
  }, [route.params]);

  const RenderItem = ({ item }: any) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.playlistItem}
      onPress={() => {
        navigation.navigate("SearchArtistScreen", {
          id: item.id,
        });
      }}
    >
      <Image
        source={{
          uri: `${item.picture}`,
        }}
        style={styles.playlistImgRound}
      />
      <View style={styles.playlistText}>
        <Text style={styles.mainTxt}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
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
          <Text style={styles.headerTitle}>ARTISTS</Text>
        </View>
        <FlatList
          data={allArtist}
          renderItem={RenderItem}
          keyExtractor={(item: any) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
};

export default SearchArtists;
