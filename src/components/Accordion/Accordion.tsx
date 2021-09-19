import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Transition, Transitioning } from "react-native-reanimated";

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

type Props = {
  children: React.ReactNode;
  title: string;
};

const Accordion: React.FC<Props> = (props) => {
  const [expand, setExpand] = useState(true);
  const ref: any = React.useRef();

  return (
    <Transitioning.View style={styles.root} ref={ref} transition={transition}>
      <TouchableOpacity
        style={styles.header}
        activeOpacity={0.8}
        onPress={() => {
          ref.current.animateNextTransition();
          setExpand(!expand);
        }}
      >
        <Text style={styles.title}> {props.title} </Text>
        {expand ? (
          <MaterialIcons name="expand-less" size={24} color="#FFFFFF" />
        ) : (
          <MaterialIcons name="expand-more" size={24} color="#FFFFFF" />
        )}
      </TouchableOpacity>
      {expand ? props.children : null}
    </Transitioning.View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    marginBottom: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  title: {
    color: "#FFFFFF",
    fontFamily: "Lato_900Black",
    fontSize: 22,
  },
});

export default Accordion;
