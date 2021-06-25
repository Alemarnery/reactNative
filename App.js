import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View, StyleSheet, Platform } from "react-native";
import { otherStyle } from "./AppStyles";

import Layout from "./layout";
import Input from "./exercise/Input";

export default function App() {
  // //Second Exercise
  // return (
  //   <SafeAreaProvider>
  //     <Input />
  //   </SafeAreaProvider>
  // );

  // First Exercise
  return (
    <SafeAreaProvider>
      <Layout />
    </SafeAreaProvider>
  );

  return (
    <View
      style={[
        {
          paddingVertical: 100,
          marginVertical: 200,
        },
        styles.viewContainer,
        otherStyle.otherViewContainer,
      ]}
    >
      <Text>Irosshi - {Platform.OS}</Text>
      <Text>Alemarnery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: "#ECECEC",
  },
});
