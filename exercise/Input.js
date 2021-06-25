import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = () => (
  <SafeAreaView style={Style.SafeAreaViewStyles}>
    <View>
      <Text>Input Label</Text>
      <TextInput style={Style.input} placeholder="Text here!!!" />
    </View>
  </SafeAreaView>
);

const Style = StyleSheet.create({
  SafeAreaViewStyles: {
    backgroundColor: "#29d",
    borderWidth: 1,
    borderColor: "red",
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 4,
  },
});

export default Input;
