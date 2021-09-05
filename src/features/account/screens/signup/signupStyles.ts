import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  arrowBack: {
    marginLeft: "10%",
    marginTop: 10,
  },
  title: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 26,
    fontFamily: "Lato_700Bold",
    marginBottom: 10,
  },
  input: {
    height: 45,
    backgroundColor: "#E3D2FC",
    marginTop: 5,
    borderRadius: 11,
    paddingHorizontal: 20,
    fontFamily: "Lato_400Regular",
    color: "#000",
    fontSize: 18,
  },
  inputContainer: {
    marginTop: 8,
  },
  inputGroup: {
    paddingHorizontal: 20,
  },
  inputLabel: {
    color: "#FFFFFF",
    fontFamily: "Lato_700Bold",
    fontSize: 16,
  },
  inputBox: {
    flexDirection: "row",
    marginTop: 15,
    paddingHorizontal: "7%",
  },
  mr: {
    // marginRight: "15%",
    flex: 0.5,
    marginRight: 17,
  },
  ml: {
    flex: 0.5,
  },
  labelSpace: {
    marginBottom: 10,
  },
  touchInput: {
    borderWidth: 2,
    borderColor: "#FFFFFF",
    paddingVertical: 12,
    borderRadius: 10,
    paddingHorizontal: 8,
  },
  dateText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Lato_700Bold",
  },
  dropdownStyle: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  dropdownPlaceholderStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  dropdownLabelStyle: {
    color: "#FFFFFF",
    fontFamily: "Lato_700Bold",
    fontSize: 18,
  },
  btnContainer: {
    marginTop: 25,
    alignItems: "center",
  },
  creatAcctBtn: {
    borderColor: "#FFFFFF",
    borderWidth: 2,
    paddingHorizontal: 65,
    paddingVertical: 15,
    borderRadius: 30,
    minWidth: 180,
    alignItems: "center",
  },
  createAcctDone: {
    backgroundColor: "#6A42F2",
    borderWidth: 0,
    paddingHorizontal: 65,
    paddingVertical: 15,
    borderRadius: 30,
    minWidth: 180,
    alignItems: "center",
  },
  creatAcctText: {
    color: "#FFFFFF",
    fontFamily: "Lato_900Black",
    fontSize: 18,
  },
  pickerContainer: {
    minHeight: 100,
  },
  errorWrapper: {
    minHeight: 20,
    marginTop: 5,
  },
  errorText: {
    color: "white",
  },
});
