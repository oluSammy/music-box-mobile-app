import * as React from "react";
import {
  View,
  useWindowDimensions,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import { Ionicons } from "@expo/vector-icons";
import { genreParamList } from "../../../navigation/@types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import OverViewTab from "../screens/Overview";
import PlaylistTab from "../screens/PlaylistTab";
import ArtistTab from "../screens/ArtistTab";

type Props = NativeStackScreenProps<genreParamList, "GenreTabs">;

const GenreTabView: React.FC<Props> = ({ navigation }) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Overview" },
    { key: "second", title: "Playlist" },
    { key: "third", title: "Artists" },
  ]);

  //   const renderScene = SceneMap({
  //     first: OverViewTab,
  //     second: PlaylistTab,
  //     third: ArtistTab,
  //   });

  const renderScene = ({ route }: any) => {
    switch (route.key) {
      case "first":
        return <OverViewTab navigation={navigation} />;
      case "second":
        return <PlaylistTab navigation={navigation} />;
      case "third":
        return <ArtistTab navigation={navigation} />;
      default:
        return null;
    }
  };

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      activeColor={"white"}
      inactiveColor={"white"}
      style={styles.tabBarStyle}
      indicatorStyle={styles.indicator}
      labelStyle={styles.label}
    />
  );

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#161A1A" />
      <SafeAreaView style={styles.flex}>
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.backBtn}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="arrow-back" size={20} color="white" />
            <Text style={styles.backTxt}>Back </Text>
          </TouchableOpacity>
        </View>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#161A1A",
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  header: {
    marginLeft: 15,
    marginTop: 10,
  },
  backTxt: {
    color: "#FFFFFF",
    marginLeft: 10,
  },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#303033",
    width: 90,
    justifyContent: "center",
    paddingVertical: 6,
    borderRadius: 8,
  },
  indicator: {
    backgroundColor: "#2DCEEF",
  },
  label: {
    fontFamily: "Lato_700Bold",
    fontSize: 17,
  },
  tabBarStyle: {
    marginTop: 10,
    backgroundColor: "transparent",
  },
});

export default GenreTabView;
