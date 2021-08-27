import React from "react";
import { View, Text, Button } from "react-native";
import { accountNavigatorParamsList } from "../../../../navigation/@types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<accountNavigatorParamsList, "StartScreen">;

const Signup: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Hello Login </Text>
      <Button
        onPress={() => {
          navigation.navigate("Login");
        }}
        title="Login"
      />
    </View>
  );
};

export default Signup;
