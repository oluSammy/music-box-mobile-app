import React, { useState } from "react";
import { SearchBar as Search } from "react-native-elements";
import { StyleSheet } from "react-native";
import { SearchBarBaseProps } from "react-native-elements/dist/searchbar/SearchBar";

const SafeSearchBar = Search as unknown as React.FC<SearchBarBaseProps>;

const SearchBar = () => {
  const [txt, setText] = useState("");

  const updateText = (str: string) => {
    setText(str);
  };

  return (
    <SafeSearchBar
      platform="default"
      placeholder="Search..."
      onChangeText={updateText}
      value={txt}
      containerStyle={styles.containerStyle}
      inputContainerStyle={styles.inputContainerStyle}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "transparent",
    paddingHorizontal: 15,
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },
  inputContainerStyle: {
    borderRadius: 25,
    height: 35,
  },
});

export default SearchBar;
