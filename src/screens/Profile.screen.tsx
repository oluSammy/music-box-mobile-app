import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import SafeAreaComp from "../components/SafeArea/SafeAreaComp";
import { styles } from "../features/library/styles/playlist.styles";
import { Ionicons } from "@expo/vector-icons";
// import { MaterialIcons } from "@expo/vector-icons";
import { profileStyles } from "../styles/profile.styles";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { drawerNavigationParamsList } from "../navigation/@types/navigation";
import RNPickerSelect from "react-native-picker-select";
// import { allCountries } from "../data/data";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AuthContext } from "../services/authentication/auth.service";
import { Avatar } from "../components/Avatar/Avatar.component";

type Props = any;

const formatDate = (dob: Date): string => {
  let month = `${dob.getMonth() + 1}`;
  let day = `${dob.getDate()}`;
  day = day.length === 1 ? `0${day}` : day;
  month = month.length === 1 ? `0${month}` : month;
  return `${dob.getFullYear()}/${month}/${day}`;
};

export const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  // const [country, setCountry] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const { user, updateProfile, isUpdatingProfile } = useContext(AuthContext);

  const handleUpdate = async () => {
    await updateProfile({
      email,
      firstName,
      lastName,
      gender,
      dateOfBirth: date,
    });
  };

  const [gender, setGender] = useState(
    user?.data.data.gender === "M" ? "male" : "female"
  );
  const [date, setDate] = useState<string>(
    formatDate(new Date(user?.data.data.dateOfBirth))
  );
  const [email, setEmail] = useState(user?.data.data.email);
  const [firstName, setFirstName] = useState(user?.data.data.firstName);
  const [lastName, setLastName] = useState(user?.data.data.lastName);

  // console.log(user?.data.data);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate: Date) => {
    setDate(formatDate(selectedDate));
    hideDatePicker();
  };

  return (
    <SafeAreaComp showSearchBar={false}>
      <View style={profileStyles.root}>
        <View style={profileStyles.header}>
          <View style={profileStyles.backContainer}>
            <TouchableOpacity
              style={styles.backBtn}
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={18} color="#FFFFFF" />
              <Text style={styles.backBtnText}>Back</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ ...styles.headerTitle }}>Account</Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu-outline" size={24} color="#2DCEEF" />
          </TouchableOpacity>
        </View>
        <Avatar isDrawer={true} />
        <View style={profileStyles.form}>
          <View style={profileStyles.formItem}>
            <Text style={profileStyles.formLabel}>First Name</Text>
            <TextInput
              style={profileStyles.input}
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View style={profileStyles.formItem}>
            <Text style={profileStyles.formLabel}>Last Name</Text>
            <TextInput
              style={profileStyles.input}
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
          <View style={profileStyles.formItem}>
            <Text style={profileStyles.formLabel}>Email</Text>
            <TextInput
              style={profileStyles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={profileStyles.formItem}>
            <Text style={profileStyles.formLabel}>Gender</Text>
            <RNPickerSelect
              onValueChange={(value) => setGender(value)}
              placeholder={{}}
              items={[
                { label: "male", value: "male" },
                { label: "female", value: "female" },
              ]}
            >
              <TextInput style={profileStyles.input} value={gender} />
            </RNPickerSelect>
          </View>
          {/* <View style={profileStyles.formItem}>
            <Text style={profileStyles.formLabel}>Country</Text>
            <RNPickerSelect
              onValueChange={(value) => setCountry(value)}
              placeholder={{}}
              items={allCountries.map((nation) => {
                return { label: nation.name, value: nation.name };
              })}
            >
              <TextInput style={profileStyles.input} value={country} />
            </RNPickerSelect>
          </View> */}
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          maximumDate={new Date()}
        />
        <View style={profileStyles.formItem}>
          <TouchableOpacity onPress={showDatePicker} activeOpacity={0.8}>
            <Text style={profileStyles.formLabel}>Date Of Birth</Text>
            <View style={profileStyles.dateInput}>
              <Text style={profileStyles.input}>
                {date ? date : "Select Date"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={profileStyles.btnContainer}>
          <TouchableOpacity activeOpacity={0.8} onPress={handleUpdate}>
            <Text style={profileStyles.btnText}>Update Profile </Text>
          </TouchableOpacity>
        </View>
      </View>
      {isUpdatingProfile && (
        <View style={profileStyles.overlay}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      )}
    </SafeAreaComp>
  );
};
