import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { accountNavigatorParamsList } from "../../../../navigation/@types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { StyledSafeArea } from "../../../../components/SafeArea/SafeArea";
import GradientBg from "../../../../components/Ui/GradientBg";

type Props = NativeStackScreenProps<accountNavigatorParamsList, "StartScreen">;
const isAndroid = Platform.OS === "android" && Platform.Version >= 21;

const Login: React.FC<Props> = ({ navigation }) => {
  let passwordRef: any;

  return (
    <GradientBg>
      <StyledSafeArea>
        {isAndroid ? (
          <TouchableNativeFeedback
            onPress={() => navigation.goBack()}
            style={styles.arrowBack}
          >
            <Ionicons name="arrow-back" size={29} color="#FFFFFF" />
          </TouchableNativeFeedback>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.arrowBack}
          >
            <Ionicons name="arrow-back" size={29} color="#FFFFFF" />
          </TouchableOpacity>
        )}

        <Text style={styles.title}>Log In</Text>
        <KeyboardAvoidingView>
          <View style={styles.inputContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                textContentType="emailAddress"
                selectionColor="#000"
                // autoFocus={true}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.focus()}
                blurOnSubmit={false}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                textContentType="password"
                selectionColor="#000"
                autoCapitalize="none"
                returnKeyType="done"
                secureTextEntry={true}
                ref={(ref) => (passwordRef = ref)}
              />
            </View>
          </View>
          <View style={styles.btnBox}>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginBtnText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.socials}>
          <TouchableOpacity activeOpacity={0.8} style={styles.socialBtnBox}>
            <View style={styles.socialBtn}>
              <FontAwesome name="facebook" size={28} color="#FFFFFF" />
              <Text style={styles.socialBtnText}>Sign Up With Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={styles.socialBtnBox}>
            <View style={styles.socialBtnGoogle}>
              <FontAwesome name="google" size={28} color="red" />
              <Text style={styles.socialBtnTextGoogle}>
                Sign Up With Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </StyledSafeArea>
    </GradientBg>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
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
    marginTop: 30,
  },
  loginBtn: {
    marginTop: 50,
    width: "40%",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 30,
    borderColor: "#FFFFFF",
    borderWidth: 2,
    alignItems: "center",
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

export default Login;
