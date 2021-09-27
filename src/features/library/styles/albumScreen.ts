import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  back: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  playlistImg: {
    width: 160,
    height: 160,
  },
  playlistImgRound: {
    width: 150,
    height: 150,
    borderRadius: 70,
  },
  imgBox: {
    alignItems: "center",
  },
  scroll: {
    flex: 1,
  },
  playlistTitle: {
    marginVertical: 8,
    color: "#FFFFFF",
    fontFamily: "Lato_700Bold",
    fontSize: 26,
    textAlign: "center",
  },
  songDetail: {
    color: "#FFFFFF",
    opacity: 0.7,
  },
  btnBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    alignItems: "center",
  },
  transparentBtn: {
    flexDirection: "row",
    // width: 170,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FFFFFF",
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 2,
  },
  gradientBtn: {
    flexDirection: "row",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 18,
  },
  btnText: {
    color: "#FFFFFF",
    marginLeft: 4,
    fontFamily: "Lato_700Bold",
    textTransform: "uppercase",
    fontSize: 15,
  },
  input: {
    height: 20,
    borderBottomColor: "white",
    borderBottomWidth: 1.5,
    marginLeft: 10,
    width: 130,
    color: "#FFFFFF",
    fontFamily: "Lato_400Regular",
    paddingBottom: 5,
  },
  playlistSongsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    justifyContent: "space-between",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  playlistAjasa: {
    flexDirection: "row",
    alignItems: "center",
  },
  txt: {
    color: "#FFFFFF",
    fontFamily: "Lato_700Bold",
  },
  btnBoxAlbum: {
    marginTop: 30,
    alignItems: "center",
  },
  likeBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  likes: {
    marginRight: 4,
  },
});
