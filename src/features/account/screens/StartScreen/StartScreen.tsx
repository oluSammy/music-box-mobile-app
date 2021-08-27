import React from "react";
import { View, Text, Button } from "react-native";
import { accountNavigatorParamsList } from "../../../../navigation/@types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<accountNavigatorParamsList, "StartScreen">;

const StartScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Start Screen</Text>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <Button
        title="Signup"
        onPress={() => {
          navigation.navigate("Signup");
        }}
      />
    </View>
  );
};

export default StartScreen;
