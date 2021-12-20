import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#161A1A",
    paddingTop: 70,
    paddingHorizontal: 15,
  },
  flex: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  backBox: {
    marginBottom: 20,
    flex: 0.3,
  },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#454848",
    paddingHorizontal: 13,
    paddingVertical: 5,
    borderRadius: 9,
    width: 75,
  },
  backBtnText: {
    color: "#FFFFFF",
    fontFamily: "Lato_700Bold",
  },
  top: {
    flexDirection: "row",
  },
  title: {
    color: "#ffffff",
    fontSize: 22,
    fontFamily: "Lato_900Black",
    flex: 0.5,
  },
  titleBox: {
    marginBottom: 20,
  },
  textTitle: {
    color: "#FFFFFF",
    fontFamily: "Lato_700Bold",
    fontSize: 18,
    marginBottom: 6,
  },
  textArtist: {
    color: "#FFFFFF",
    fontFamily: "Lato_700Bold",
    fontSize: 18,
  },
  playlist: {
    width: "100%",
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  playlistCover: {
    width: windowWidth * 0.3 - 15,

    marginRight: windowWidth * 0.03333,
    marginBottom: 18,
  },
  playlistContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "space-between",
  },
  playlistTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Lato_700Bold",
  },
  playlistSongs: {
    color: "#FFFFFF",
    fontSize: 13,
    fontFamily: "Lato_700Bold",
  },
});
