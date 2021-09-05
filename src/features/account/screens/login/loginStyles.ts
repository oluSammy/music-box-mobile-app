import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  arrowBack: {
    marginLeft: "10%",
    marginTop: 10,
  },
  title: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 26,
    fontFamily: "Lato_700Bold",
    marginBottom: 40,
  },
  inputContainer: {
    marginTop: 30,
  },
  forgotPassword: {
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 20,
    fontFamily: "Lato_700Bold",
  },
  inputGroup: {
    paddingHorizontal: 20,
  },
  inputLabel: {
    color: "#FFFFFF",
    fontFamily: "Lato_400Regular",
    fontSize: 18,
  },
  input: {
    height: 50,
    backgroundColor: "#E3D2FC",
    marginTop: 10,
    borderRadius: 11,
    paddingHorizontal: 20,
    fontFamily: "Lato_400Regular",
    color: "#000",
    fontSize: 18,
  },
  btnBox: {
    alignItems: "center",
    marginTop: 80,
  },
  loginBtn: {
    width: "40%",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 30,
    borderColor: "#FFFFFF",
    borderWidth: 2,
    alignItems: "center",
    minHeight: 52,
    justifyContent: "center",
  },
  loginBtnDone: {
    width: "40%",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 30,
    borderWidth: 0,
    alignItems: "center",
    backgroundColor: "#6A42F2",
    minHeight: 52,
    justifyContent: "center",
  },
  loginBtnText: {
    fontFamily: "Lato_700Bold",
    color: "#FFFFFF",
    fontSize: 20,
    textTransform: "uppercase",
  },
  socialBtnBox: {
    alignItems: "center",
    marginBottom: 20,
  },
  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4267B2",
    width: "85%",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 30,
  },
  socialBtnText: {
    marginLeft: "16%",
    color: "#FFFFFF",
    fontFamily: "Lato_700Bold",
    fontSize: 18,
  },
  socialBtnTextGoogle: {
    marginLeft: "16%",
    color: "#303033",
    fontFamily: "Lato_700Bold",
    fontSize: 18,
  },
  socialBtnGoogle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: "85%",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 30,
  },
  socials: {
    marginTop: "30%",
  },
});
