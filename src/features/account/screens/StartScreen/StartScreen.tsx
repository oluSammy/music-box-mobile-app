import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { accountNavigatorParamsList } from "../../../../navigation/@types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";
import {
  StyledFacebookBtn,
  StyledFacebookGoogle,
  StyledFacebookEmail,
} from "../../../../components/Buttons/SocialButtons";
import ImageBg from "../../../../components/Ui/ImageBg";

type Props = NativeStackScreenProps<accountNavigatorParamsList, "StartScreen">;

const StartScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161A1A" />
      <ImageBg
        image={require("../../../../../assets/images/start-screen-bg.png")}
      >
        <View style={styles.imgBox}>
          <Image
            source={require("../../../../../assets/images/app-logo.png")}
          />
        </View>
        <Text style={styles.startScreenText}>
          Play your favorite songs and artists.
        </Text>

        <View>
          <TouchableOpacity activeOpacity={0.8} style={styles.socialBtnBox}>
            <StyledFacebookBtn>
              <FontAwesome name="facebook" size={28} color="#FFFFFF" />
              <Text style={styles.socialBtnText}>Sign Up With Facebook</Text>
            </StyledFacebookBtn>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={styles.socialBtnBox}>
            <StyledFacebookGoogle>
              <FontAwesome name="google" size={28} color="red" />
              <Text style={styles.socialBtnTextGoogle}>
                Sign Up With Google
              </Text>
            </StyledFacebookGoogle>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.socialBtnBox}
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <StyledFacebookEmail>
            <Text style={styles.socialBtnTextEmail}>Sign Up With Email</Text>
          </StyledFacebookEmail>
        </TouchableOpacity>
        <View style={styles.loginBox}>
          <Text style={styles.loginQ}>Already have an account?</Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.loginAction}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ImageBg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  startScreenText: {
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: "30%",
    fontSize: 18,
    fontFamily: "Lato_700Bold",
  },
  imgBox: {
    marginBottom: "10%",
    alignItems: "center",
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
  socialBtnBox: {
    alignItems: "center",
    marginBottom: 20,
  },

  socialBtnTextEmail: {
    color: "#FFFFFF",
    fontFamily: "Lato_700Bold",
    fontSize: 18,
  },
  loginBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 48,
    marginTop: "7%",
  },
  loginQ: {
    color: "#FFFFFF",
    fontSize: 17,
    opacity: 0.8,
  },
  loginAction: {
    color: "#FFFFFF",
    fontFamily: "Lato_700Bold",
    fontSize: 20,
  },
});

export default StartScreen;
