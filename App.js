import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View, StyleSheet, Platform } from "react-native";

import Layout from "./layout";
import { otherStyle } from "./AppStyles";

export default function App() {
  if (true) {
    return (
      <SafeAreaProvider>
        <Layout />
      </SafeAreaProvider>
    );
  }

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
