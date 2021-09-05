import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  Button,
} from "react-native";
import Modal from "react-native-modal";
import { accountNavigatorParamsList } from "../../../../navigation/@types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { StyledSafeArea } from "../../../../components/SafeArea/SafeArea";
import GradientBg from "../../../../components/Ui/GradientBg";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  ErrorWrapper,
  ErrorText,
} from "../../../../components/Text/ErrorWrapper";
import { styles } from "./loginStyles";
import { AuthContext } from "../../../../services/authentication/auth.service";
import {
  ModalContainer,
  ModalContent,
  ModalErrText,
} from "../../../../components/Ui/Modals/AuthModal";

type Props = NativeStackScreenProps<accountNavigatorParamsList, "StartScreen">;
const isAndroid = Platform.OS === "android" && Platform.Version >= 21;

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("required*"),
  password: Yup.string().required("required*"),
});

const Login: React.FC<Props> = ({ navigation }) => {
  let passwordRef: any;
  const { login, isLoggingIn, error, setError } = useContext(AuthContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    if (error) {
      setIsModalVisible(true);
      setErrMsg(error);
    }

    return () => {
      setError(null);
    };
  }, [error, setError]);

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setErrMsg("");
  };

  return (
    <GradientBg>
      <StyledSafeArea>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Modal
              isVisible={isModalVisible}
              onBackdropPress={handleCloseModal}
              animationInTiming={450}
              animationOutTiming={400}
              onBackButtonPress={handleCloseModal}
            >
              <ModalContainer>
                <ModalContent>
                  <ModalErrText>{errMsg}</ModalErrText>
                  <Button title="Close" onPress={handleCloseModal} />
                </ModalContent>
              </ModalContainer>
            </Modal>

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
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={LoginSchema}
              validateOnMount={true}
            >
              {({
                handleChange,
                handleBlur,
                values,
                touched,
                errors,
                isValid,
              }) => (
                <KeyboardAvoidingView
                  behavior={!isAndroid ? "padding" : "height"}
                >
                  <View style={styles.inputContainer}>
                    <View style={styles.inputGroup}>
                      <Text style={styles.inputLabel}>Email</Text>
                      <TextInput
                        style={styles.input}
                        textContentType="emailAddress"
                        selectionColor="#000"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.focus()}
                        blurOnSubmit={false}
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                      />
                      <ErrorWrapper>
                        <ErrorText>
                          {errors.email && touched.email && errors.email}
                        </ErrorText>
                      </ErrorWrapper>
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
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                      />
                      <ErrorWrapper>
                        <ErrorText>
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </ErrorText>
                      </ErrorWrapper>
                    </View>
                    {/* <TouchableOpacity
                      activeOpacity={0.7}
                      style={styles.inputGroup}
                    >
                      <Text style={styles.forgotPassword}>
                        Forgot Password? click here
                      </Text>
                    </TouchableOpacity> */}
                  </View>
                  <View style={styles.btnBox}>
                    <TouchableOpacity
                      style={isValid ? styles.loginBtnDone : styles.loginBtn}
                      activeOpacity={0.8}
                      onPress={() => {
                        login(values);
                      }}
                    >
                      {isLoggingIn ? (
                        <ActivityIndicator size="small" color="#FFFFFF" />
                      ) : (
                        <Text style={styles.loginBtnText}>Log In</Text>
                      )}
                    </TouchableOpacity>
                  </View>
                </KeyboardAvoidingView>
              )}
            </Formik>

            <View style={styles.socials}>
              <TouchableOpacity activeOpacity={0.8} style={styles.socialBtnBox}>
                <View style={styles.socialBtn}>
                  <FontAwesome name="facebook" size={28} color="#FFFFFF" />
                  <Text style={styles.socialBtnText}>
                    Sign Up With Facebook
                  </Text>
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
          </View>
        </TouchableWithoutFeedback>
      </StyledSafeArea>
    </GradientBg>
  );
};

export default Login;
