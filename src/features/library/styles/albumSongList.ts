import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    marginTop: 30,
    paddingBottom: 40,
    flex: 1,
  },
  playlistItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  playlistImg: {
    height: 50,
    width: 50,
    borderRadius: 5,
    marginRight: 20,
  },
  playlistDetail: {
    width: "55%",
  },
  songTitle: {
    color: "#FFFFFF",
    fontFamily: "Lato_700Bold",
  },
  songDuration: {
    color: "#FFFFFF",
    opacity: 0.7,
    fontFamily: "Lato_700Bold",
  },
  play: {
    flexDirection: "row",
    // alignItems: "center",
  },
  textNum: {
    color: "#FFF",
    fontFamily: "Lato_700Bold",
    marginRight: 15,
  },
});
