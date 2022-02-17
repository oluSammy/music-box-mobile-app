import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  root: {
    position: "absolute",
    bottom: 0,
    width: width,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    height: 70,
  },
  container: {
    backgroundColor: "#000",
    width: 0.9 * width,
    borderRadius: 10,
    padding: 10,
    opacity: 0.6,
  },
});
