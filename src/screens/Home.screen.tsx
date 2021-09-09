import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import SafeAreaComp from "../components/SafeArea/SafeAreaComp";
import SearchBar from "../components/SearchBar/SearchBar";
import { Entypo } from "@expo/vector-icons";
import CardGradient from "../components/Ui/CardGradient";

// colors={["#B3BBC8", ""]}

const Homepage = () => {
  return (
    <SafeAreaComp>
      <SearchBar />
      <View style={styles.screen}>
        <View style={styles.flowContainer}>
          <Text style={styles.flowText}>Flow</Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={styles.content}>
            <CardGradient firstColor="#B3BBC8" secondColor="#7B8089">
              <View style={styles.controlImages}>
                <Image
                  source={require("../../assets/images/player-img.jpg")}
                  style={styles.flowImg}
                />
                <TouchableOpacity style={styles.touch} activeOpacity={0.6}>
                  <View>
                    <Entypo name="controller-play" size={24} color="white" />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.controlText}>
                <Text style={styles.controlTextTitle}>Control</Text>
                <Text style={styles.controlSubText}>Player</Text>
                <Text style={styles.controlMinText}>
                  Current Song appears here
                </Text>
              </View>
            </CardGradient>
          </View>
        </ScrollView>
      </View>
    </SafeAreaComp>
  );
};

const styles = StyleSheet.create({
  flowContainer: {
    marginVertical: 10,
  },
  screen: {
    paddingHorizontal: 15,
  },
  flowText: {
    color: "#FFFFFF",
    fontSize: 26,
    fontFamily: "Lato_700Bold",
  },
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    flex: 1,
    height: 150,
    width: 250,
  },
  controlImages: {
    alignItems: "center",
  },
  touch: {
    height: 40,
    width: 40,
    backgroundColor: "#000000",
    marginTop: -24,
    borderRadius: 50,
    opacity: 0.65,
    justifyContent: "center",
    alignItems: "center",
  },
  controlText: {
    flex: 0.7,
  },
  controlTextTitle: {
    textAlign: "center",
    color: "#B2C5C8",
    fontFamily: "Lato_900Black",
    fontSize: 20,
    marginBottom: 15,
  },
  controlSubText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: "Lato_700Bold",
    fontSize: 14,
    marginBottom: 10,
  },
  controlMinText: {
    textAlign: "center",
    fontSize: 12,
    color: "#384D6D",
  },
  flowImg: {
    width: 100,
    height: 100,
    borderRadius: 7,
  },
});

export default Homepage;
