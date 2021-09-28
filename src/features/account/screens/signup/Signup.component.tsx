import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  NativeSyntheticEvent,
  NativeTouchEvent,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Button,
  StatusBar,
} from "react-native";
import { accountNavigatorParamsList } from "../../../../navigation/@types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownPicker from "react-native-dropdown-picker";
import { SimpleLineIcons } from "@expo/vector-icons";
import { StyledSafeArea } from "../../../../components/SafeArea/SafeArea";
import GradientBg from "../../../../components/Ui/GradientBg";
import { Formik } from "formik";
import * as Yup from "yup";
import { styles } from "./signupStyles";
import {
  ErrorWrapper,
  ErrorText,
} from "../../../../components/Text/ErrorWrapper";
import {
  AuthContext,
  ISignupParam,
} from "../../../../services/authentication/auth.service";
import Modal from "react-native-modal";
import {
  ModalContainer,
  ModalContent,
  ModalErrText,
} from "../../../../components/Ui/Modals/AuthModal";

type Props = NativeStackScreenProps<accountNavigatorParamsList, "StartScreen">;
const isAndroid = Platform.OS === "android";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(1, "first Name too short")
    .max(50, "first Name is too long")
    .required("Required*"),
  lastName: Yup.string()
    .min(1, "last Name too short")
    .max(50, "last Name is too long")
    .required("Required*"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(7, "password must be at least 7 characters")
    .required("required*"),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords do not match"
  ),
});

const Signup: React.FC<Props> = ({ navigation }) => {
  let passwordRef: any;
  let lastNameRef: any;
  let emailRef: any;
  let confirmPasswordRef: any;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const { signUp, isSigningUp, signupError, setSignupError } =
    useContext(AuthContext);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState<null | string>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ]);

  useEffect(() => {
    if (signupError) {
      setIsModalVisible(true);
      setErrMsg(signupError);
    }

    return () => {
      setSignupError(null);
    };
  }, [setSignupError, signupError]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate: Date) => {
    if (isAndroid) {
      setDate(
        selectedDate.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    } else {
      setDate(selectedDate.toLocaleString().split(",")[0]);
    }
    hideDatePicker();
  };

  const handleSignUp = (vals: ISignupParam) => {
    signUp(vals);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setErrMsg("");
  };

  return (
    <GradientBg>
      <StatusBar barStyle="light-content" backgroundColor="#161A1A" />
      <StyledSafeArea>
        <KeyboardAvoidingView behavior={!isAndroid ? "padding" : "height"}>
          <ScrollView>
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
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={styles.arrowBack}
                >
                  <Ionicons name="arrow-back" size={29} color="#FFFFFF" />
                </TouchableOpacity>
                <Text style={styles.title}>Create Account</Text>
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    passwordConfirm: "",
                  }}
                  validateOnMount={true}
                  validationSchema={SignupSchema}
                  onSubmit={(values) => {
                    if (date && value) {
                      const dateArr = date.split("/");
                      const month =
                        dateArr[0].length === 2
                          ? `${dateArr[0]}`
                          : `0${dateArr[0]}`;
                      const day =
                        dateArr[1].length === 2
                          ? `${dateArr[1]}`
                          : `0${dateArr[1]}`;
                      const newDate = `${dateArr[2]}/${month}/${day}`;

                      handleSignUp({
                        ...values,
                        dateOfBirth: newDate,
                        gender: value,
                      });
                    }
                  }}
                >
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    touched,
                    errors,
                    isValid,
                  }) => (
                    <View>
                      <View>
                        <View style={styles.inputContainer}>
                          <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>First Name</Text>
                            <TextInput
                              style={styles.input}
                              textContentType="givenName"
                              selectionColor="#000"
                              // autoFocus={true}
                              autoCapitalize="none"
                              keyboardType="default"
                              returnKeyType="next"
                              onSubmitEditing={() => lastNameRef.focus()}
                              blurOnSubmit={false}
                              onChangeText={handleChange("firstName")}
                              onBlur={handleBlur("firstName")}
                              value={values.firstName}
                            />
                            <ErrorWrapper>
                              <ErrorText>
                                {errors.firstName &&
                                  touched.firstName &&
                                  errors.firstName}
                              </ErrorText>
                            </ErrorWrapper>
                          </View>
                        </View>
                        <View style={styles.inputContainer}>
                          <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>Last Name</Text>
                            <TextInput
                              style={styles.input}
                              textContentType="familyName"
                              selectionColor="#000"
                              // autoFocus={true}
                              autoCapitalize="none"
                              keyboardType="default"
                              returnKeyType="next"
                              onSubmitEditing={() => emailRef.focus()}
                              blurOnSubmit={false}
                              ref={(ref) => (lastNameRef = ref)}
                              onChangeText={handleChange("lastName")}
                              onBlur={handleBlur("lastName")}
                              value={values.lastName}
                            />
                            <ErrorWrapper>
                              <ErrorText>
                                {errors.lastName &&
                                  touched.lastName &&
                                  errors.lastName}
                              </ErrorText>
                            </ErrorWrapper>
                          </View>
                        </View>
                        <View style={styles.inputContainer}>
                          <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>Your Email</Text>
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
                              ref={(ref) => (emailRef = ref)}
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
                            <Text style={styles.inputLabel}>
                              Create a Password
                            </Text>
                            <TextInput
                              style={styles.input}
                              textContentType="password"
                              selectionColor="#000"
                              autoCapitalize="none"
                              returnKeyType="next"
                              secureTextEntry={true}
                              onSubmitEditing={() => confirmPasswordRef.focus()}
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
                        </View>

                        <View style={styles.inputContainer}>
                          <View style={styles.inputGroup}>
                            <Text style={styles.inputLabel}>
                              Confirm Password
                            </Text>
                            <TextInput
                              style={styles.input}
                              textContentType="password"
                              selectionColor="#000"
                              autoCapitalize="none"
                              returnKeyType="done"
                              secureTextEntry={true}
                              ref={(ref) => (confirmPasswordRef = ref)}
                              onChangeText={handleChange("passwordConfirm")}
                              onBlur={handleBlur("passwordConfirm")}
                              value={values.passwordConfirm}
                            />
                            <ErrorWrapper>
                              <ErrorText>
                                {errors.passwordConfirm &&
                                  touched.passwordConfirm &&
                                  errors.passwordConfirm}
                              </ErrorText>
                            </ErrorWrapper>
                          </View>
                        </View>

                        <View style={styles.inputBox}>
                          <View style={styles.mr}>
                            <Text
                              style={Object.assign(
                                {},
                                styles.inputLabel,
                                styles.labelSpace
                              )}
                            >
                              Date Of Birth
                            </Text>
                            <TouchableOpacity
                              style={styles.touchInput}
                              onPress={showDatePicker}
                              activeOpacity={0.8}
                            >
                              <Text style={styles.dateText}>
                                {date ? date : "Select Date"}
                              </Text>
                            </TouchableOpacity>
                          </View>
                          <View style={styles.ml}>
                            <Text
                              style={Object.assign(
                                {},
                                styles.inputLabel,
                                styles.labelSpace
                              )}
                            >
                              Gender
                            </Text>
                            <View style={styles.pickerContainer}>
                              <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                placeholder="select Gender"
                                style={styles.dropdownStyle}
                                placeholderStyle={
                                  styles.dropdownPlaceholderStyle
                                }
                                ArrowUpIconComponent={() => (
                                  <SimpleLineIcons
                                    name="arrow-up"
                                    size={13}
                                    color="#FFFFFF"
                                  />
                                )}
                                ArrowDownIconComponent={() => (
                                  <SimpleLineIcons
                                    name="arrow-down"
                                    size={13}
                                    color="#FFFFFF"
                                  />
                                )}
                                labelStyle={styles.dropdownLabelStyle}
                              />
                            </View>
                          </View>
                        </View>
                        <DateTimePickerModal
                          isVisible={isDatePickerVisible}
                          mode="date"
                          onConfirm={handleConfirm}
                          onCancel={hideDatePicker}
                          maximumDate={new Date()}
                        />
                        <View style={styles.btnContainer}>
                          <TouchableOpacity
                            style={
                              isValid && date && value
                                ? styles.createAcctDone
                                : styles.creatAcctBtn
                            }
                            activeOpacity={0.7}
                            onPress={
                              isValid
                                ? (handleSubmit as unknown as (
                                    ev: NativeSyntheticEvent<NativeTouchEvent>
                                  ) => void)
                                : () => {}
                            }
                          >
                            {isSigningUp ? (
                              <ActivityIndicator size="small" color="#FFFFFF" />
                            ) : (
                              <Text style={styles.creatAcctText}>DONE</Text>
                            )}
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  )}
                </Formik>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </KeyboardAvoidingView>
      </StyledSafeArea>
    </GradientBg>
  );
};

export default Signup;
