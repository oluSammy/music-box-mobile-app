import { StyleSheet } from "react-native";

export const profileStyles = StyleSheet.create({
  root: {
    marginHorizontal: 15,
    paddingBottom: 70,
  },
  backContainer: {
    flex: 0.5,
  },

  avatarContainer: {
    height: 120,
    width: 120,
    borderRadius: 70,
    backgroundColor: "#2DCEEF",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  badge: {
    width: 30,
    height: 30,
    backgroundColor: "#fff",
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  profileHeader: {
    flex: 1,
    alignItems: "center",
  },
  initials: {
    color: "#fff",
    fontSize: 40,
    fontFamily: "Lato_700Bold",
  },
  username: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Lato_400Regular",
    marginTop: 20,
  },
  form: {
    marginTop: 30,
  },
  formItem: {
    marginBottom: 20,
  },
  formLabel: {
    color: "#99999F",
  },
  input: {
    borderBottomColor: "#949494",
    borderBottomWidth: 1,
    color: "#fff",
    fontSize: 18,
    marginTop: 10,
    paddingBottom: 7,
  },
  dateInput: {
    borderBottomColor: "#949494",
    borderBottomWidth: 1,
  },
  btnContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Lato_700Bold",
    borderWidth: 2,
    borderColor: "#fff",
    paddingHorizontal: 35,
    paddingVertical: 12,
    borderRadius: 25,
  },
});
