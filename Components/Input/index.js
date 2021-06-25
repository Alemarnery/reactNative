import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Input = ({ placeholder, iconName, iconLib }) => {
  return (
    <View style={Style.viewInput}>
      <TextInput style={Style.input} placeholder={placeholder} />
      <MaterialIcons
        name={iconName}
        size={35}
        color="gray"
        style={Style.icon}
      />
    </View>
  );
};
const Style = StyleSheet.create({
  viewInput: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
});

export default Input;
