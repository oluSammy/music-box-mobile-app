import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 20,
    minHeight: Dimensions.get("window").height - 100,
  },
  drawerImg: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  drawerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  drawerHeaderText: {
    fontSize: 13,
    color: "#fff",
    marginTop: 10,
  },
  drawerHeaderDetail: {
    alignItems: "center",
  },
  drawerNameText: {
    color: "#fff",
    fontFamily: "Lato_700Bold",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 2,
  },
  drawerEmailText: {
    color: "#fff",
    fontFamily: "Lato_400Regular",
    fontSize: 12,
  },
  line: {
    backgroundColor: "grey",
    height: 1,
    marginVertical: 20,
    // shadowColor: "red",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
  navList: {
    marginTop: 20,
  },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    // borderColor: "#2DCEEF",
    // borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderRadius: 5,
    marginBottom: 10,
  },
  navIcon: {
    marginRight: 16,
  },
  navItemText: {
    fontFamily: "Lato_700Bold",
    color: "#fff",
    fontSize: 18,
    marginRight: "auto",
  },
  copyright: {
    fontFamily: "Lato_400Regular",
    color: "#fff",
    marginTop: "auto",
  },
});
