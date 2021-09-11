import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  children: React.ReactNode;
  firstColor: string;
  secondColor: string;
};

const CardGradient: FC<Props> = (props) => {
  return (
    <LinearGradient
      colors={[props.firstColor, props.secondColor]}
      start={{ x: 0.3, y: 0.4 }}
      end={{ x: 0.4, y: 0.3 }}
      style={styles.container}
    >
      {props.children}
    </LinearGradient>
  );
};

export default CardGradient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
});
