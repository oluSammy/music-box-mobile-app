import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
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
    alignItems: "center",
    marginTop: 15,
    marginBottom: 40,
  },
  backBox: {
    flex: 0.5,
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
  headerTitle: {
    fontFamily: "Lato_900Black",
    color: "#FFFFFF",
    fontSize: 18,
  },
  playlistImg: {
    height: 50,
    width: 50,
    borderRadius: 6,
    marginRight: 20,
  },
  playlistImgRound: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 20,
  },
  playlistItem: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  playlistText: {
    marginRight: "auto",
  },
  mainTxt: {
    color: "#FFFFFF",
    fontFamily: "Lato_700Bold",
  },
  subTxt: {
    color: "#FFFFFF",
    opacity: 0.7,
  },
});
