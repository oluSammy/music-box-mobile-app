import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#161A1A",
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  playListBox: {
    marginBottom: 40,
  },
  playListTitle: {
    color: "#FFFFFF",
    fontFamily: "Lato_700Bold",
    fontSize: 22,
  },
  playlistContainer: {
    paddingTop: 20,
  },
  imageStyle: {
    borderRadius: 5,
  },
  imageStyles: {
    borderRadius: 50,
  },
  playHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  view: {
    color: "#FFFFFF",
    fontFamily: "Lato_700Bold",
    marginRight: 5,
    opacity: 0.7,
  },
  viewTouch: {
    flexDirection: "row",
    alignItems: "center",
  },
  boxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
