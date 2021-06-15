import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";

import { otherStyle } from "./AppStyles";

export default function App() {
  return (
    <View
      style={[
        {
          paddingVertical: 25,
          marginVertical: 50,
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
