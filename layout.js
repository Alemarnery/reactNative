import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import First from "./Exercise/First";
import Second from "./Exercise/Second";
import Third from "./Exercise/Third";

const layout = () => {
  return (
    <SafeAreaView style={Style.SafeAreaViewStyles}>
      {/* Square Exercise */}
      <First />

      {/* Input Exercise */}
      <Second />

      {/* Tile Component */}
      {/* <Third /> */}
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({
  SafeAreaViewStyles: {
    borderWidth: 1,
    borderColor: "red",
    flex: 1,
  },
});

export default layout;
