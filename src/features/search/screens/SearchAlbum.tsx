import {
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import { styles } from "../../library/styles/playlist.styles";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { searchParamsList } from "../../../navigation/@types/navigation";

type Props = NativeStackScreenProps<searchParamsList, "SearchAlbum">;

const SearchAlbum: React.FC<Props> = ({ navigation, route }) => {
  const [allAlbum, setAllAlbum] = React.useState<Record<string, any>[] | []>(
    []
  );

  useEffect(() => {
    if (route.params) {
      //   setAllArtist(route.params.artist);
      const { album } = route.params;
      console.log(album[0]);
      setAllAlbum(album);
    }
  }, [route.params]);
  const RenderItem = ({ item }: any) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.playlistItem}
      onPress={() => {
        navigation.navigate("SearchAlbumScreen", {
          id: item.id,
        });
      }}
    >
      <Image
        source={{
          uri: `${item.cover_small}`,
        }}
        style={styles.playlistImg}
      />
      <View style={styles.playlistText}>
        <Text style={styles.mainTxt}>{item.title}</Text>
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
          <Text style={styles.headerTitle}>ALBUMS</Text>
        </View>
        <FlatList
          data={allAlbum}
          renderItem={RenderItem}
          keyExtractor={(item: any) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
};

export default SearchAlbum;
