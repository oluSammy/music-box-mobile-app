import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

type Props = {
  children: React.ReactNode;
};

const GradientBg: React.FC<Props> = (props) => {
  return (
    <LinearGradient
      colors={["#CA42F2", "#6A42F2", "#4294F2", "#42B5F2"]}
      style={styles.container}
    >
      {props.children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GradientBg;
