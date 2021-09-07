import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const ImageBg: React.FC<any> = (props) => {
  return (
    <ImageBackground style={styles.root} source={props.image}>
      {props.children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default ImageBg;
