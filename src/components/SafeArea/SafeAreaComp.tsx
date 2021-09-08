import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from "react-native";

type Props = {
  children: React.ReactNode;
};

const SafeAreaComp: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161A1A" />
      <ScrollView style={styles.flex}>
        <SafeAreaView>{props.children}</SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161A1A",
    flex: 1,
  },
  flex: {
    flex: 1,
  },
});

export default SafeAreaComp;
