import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    backgroundColor: "#161A1A",
    flex: 1,
    minHeight: "100%",
    paddingBottom: 40,
  },
  flex: {
    flex: 1,
  },
  containerStyle: {
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    width: "100%",
    padding: 0,
  },
  content: {
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 100,
  },
  recentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    color: "#FFFFFF",
    fontFamily: "Lato_900Black",
    fontSize: 20,
    marginBottom: 20,
  },
  clear: {
    color: "#FFFFFF",
    fontFamily: "Lato_700Bold",
    fontSize: 14,
    textTransform: "uppercase",
    opacity: 0.6,
  },
  recentContainer: {
    flex: 1,
  },
  searchResults: {},
  resultsContainer: {
    marginTop: 20,
  },
  resultsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  resultsTitle: {
    color: "#FFFFFF",
    fontFamily: "Lato_900Black",
    fontSize: 20,
  },
  titleText: {
    fontFamily: "Lato_900Black",
    fontSize: 16,
    color: "#FFFFFF",
  },
  roundedImg: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    opacity: 0.6,
  },
});
