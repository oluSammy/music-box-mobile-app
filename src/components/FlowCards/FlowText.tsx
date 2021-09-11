import React from "react";
import { Text, StyleSheet } from "react-native";

type Props = {
  text: string;
  color: string;
};

const FlowText: React.FC<Props> = ({ text, color }) => {
  return <Text style={{ ...{ color }, ...styles.text }}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontFamily: "Lato_900Black",
    fontSize: 20,
    marginBottom: 15,
  },
});

export default FlowText;
