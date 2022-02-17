import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { profileStyles } from "../../styles/profile.styles";
import { AuthContext } from "../../services/authentication/auth.service";
import { Ionicons } from "@expo/vector-icons";


type Props = {
  isDrawer?: boolean;
};

export const Avatar: React.FC<Props> = ({ isDrawer }) => {
  const { user } = useContext(AuthContext);

  return (
    <View
      style={
        isDrawer
          ? profileStyles.profileHeader
          : profileStyles.profileHeaderDrawer
      }
    >
      <View style={profileStyles.avatarContainer}>
        <Text style={profileStyles.initials}>
          {user?.data.data.firstName[0]} {user?.data.data.lastName[0]}
        </Text>
        {isDrawer && (
          <TouchableOpacity style={profileStyles.badge} activeOpacity={0.8}>
            <Ionicons name="add-outline" size={28} color="black" />
          </TouchableOpacity>
        )}
      </View>
      {isDrawer && (
        <Text style={profileStyles.username}>
          {user?.data.data.firstName} {user?.data.data.lastName}
        </Text>
      )}
    </View>
  );
};
