import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import SafeAreaComp from "../components/SafeArea/SafeAreaComp";
import { styles } from "../features/library/styles/playlist.styles";
import { Ionicons } from "@expo/vector-icons";
// import { MaterialIcons } from "@expo/vector-icons";
import { profileStyles } from "../styles/profile.styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { drawerNavigationParamsList } from "../navigation/@types/navigation";
import RNPickerSelect from "react-native-picker-select";
import { allCountries } from "../data/data";
import DateTimePickerModal from "react-native-modal-datetime-picker";

type Props = NativeStackScreenProps<
  drawerNavigationParamsList,
  "ProfileScreen"
>;
const isAndroid = Platform.OS === "android";

export const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  const [date, setDate] = useState<null | string>(null);
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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
    <SafeAreaComp showSearchBar={false}>
      <View style={profileStyles.root}>
        <View style={styles.header}>
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
        </View>
        <View style={profileStyles.profileHeader}>
          <View style={profileStyles.avatarContainer}>
            <Text style={profileStyles.initials}>OS</Text>
            <TouchableOpacity style={profileStyles.badge} activeOpacity={0.8}>
              <Ionicons name="add-outline" size={28} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={profileStyles.username}>Olumorin Samuel</Text>
        </View>
        <View style={profileStyles.form}>
          <View style={profileStyles.formItem}>
            <Text style={profileStyles.formLabel}>First Name</Text>
            <TextInput style={profileStyles.input} value="Samuel" />
          </View>
          <View style={profileStyles.formItem}>
            <Text style={profileStyles.formLabel}>Last Name</Text>
            <TextInput style={profileStyles.input} value="Olumorin" />
          </View>
          <View style={profileStyles.formItem}>
            <Text style={profileStyles.formLabel}>Email</Text>
            <TextInput
              style={profileStyles.input}
              value="olumorinsammy@gmail.com"
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
          <View style={profileStyles.formItem}>
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
          </View>
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
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={profileStyles.btnText}>Update Profile </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaComp>
  );
};
