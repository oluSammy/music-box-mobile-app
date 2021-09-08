import React from "react";
import { Text, View } from "react-native";
import SafeAreaComp from "../components/SafeArea/SafeAreaComp";

const Homepage = () => {
  return (
    <SafeAreaComp>
      <View>
        <Text>Hello world</Text>
      </View>
    </SafeAreaComp>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#161A1A",
//     flex: 1,
//     // paddingTop: 100,
//   },
// });

export default Homepage;
