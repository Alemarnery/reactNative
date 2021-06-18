import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet } from "react-native";

const layout = () => (
  <SafeAreaView style={Style.SafeAreaViewStyles}>
    <Text> Este es un texto de prueba</Text>
  </SafeAreaView>
);

const Style = StyleSheet.create({
  SafeAreaViewStyles: {
    borderWidth: 3,
    borderColor: "red",
  },
});

export default layout;
