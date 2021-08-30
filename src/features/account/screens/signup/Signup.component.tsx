import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { accountNavigatorParamsList } from "../../../../navigation/@types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownPicker from "react-native-dropdown-picker";
import { SimpleLineIcons } from "@expo/vector-icons";
import { StyledSafeArea } from "../../../../components/SafeArea/SafeArea";
import GradientBg from "../../../../components/Ui/GradientBg";

type Props = NativeStackScreenProps<accountNavigatorParamsList, "StartScreen">;
const isAndroid = Platform.OS === "android";

const Signup: React.FC<Props> = ({ navigation }) => {
  let passwordRef: any;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState<null | string>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ]);

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
        <Text style={styles.title}>Create Account</Text>
        <KeyboardAvoidingView>
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
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Create a Password</Text>
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
          <View style={styles.inputBox}>
            <View style={styles.mr}>
              <Text
                style={Object.assign({}, styles.inputLabel, styles.labelSpace)}
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
                style={Object.assign({}, styles.inputLabel, styles.labelSpace)}
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
                  placeholderStyle={styles.dropdownPlaceholderStyle}
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
        </KeyboardAvoidingView>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          maximumDate={new Date()}
        />

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.creatAcctBtn} activeOpacity={0.7}>
            <Text style={styles.creatAcctText}>DONE</Text>
          </TouchableOpacity>
        </View>
      </StyledSafeArea>
    </GradientBg>
  );
};

const styles = StyleSheet.create({
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
  inputContainer: {
    marginTop: 30,
  },
  inputGroup: {
    paddingHorizontal: 20,
  },
  inputLabel: {
    color: "#FFFFFF",
    fontFamily: "Lato_700Bold",
    fontSize: 18,
  },
  inputBox: {
    flexDirection: "row",
    marginTop: 60,
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
    marginTop: 70,
    alignItems: "center",
  },
  creatAcctBtn: {
    borderColor: "#FFFFFF",
    borderWidth: 2,
    paddingHorizontal: 65,
    paddingVertical: 15,
    borderRadius: 30,
  },
  creatAcctText: {
    color: "#FFFFFF",
    fontFamily: "Lato_900Black",
    fontSize: 18,
  },
  pickerContainer: {
    minHeight: 100,
  },
});

export default Signup;
