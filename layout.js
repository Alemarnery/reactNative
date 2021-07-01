import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import First from "./Exercise/First";
import Input from "./Components/Input";
import Third from "./Exercise/Third";

const layout = () => {
  /**
   * Square Exercise
   */
  // return (
  //   <SafeAreaView style={Style.SafeAreaViewStyles}>
  //     <First />
  //   </SafeAreaView>
  // );

  /**
   * Input Component
   */
  return (
    <SafeAreaView style={Style.SafeAreaViewStyles}>
      <Input
        placeholder="Enter your name"
        iconName="drive-file-rename-outline"
        iconLib="MaterialIcons"
      />
      <Input
        placeholder="Enter your lastNname"
        iconName="brush"
        iconLib="Ionicons"
      />
    </SafeAreaView>
  );

  /**
   * Tile Component
   */
  return (
    <SafeAreaView style={Style.SafeAreaViewStyles}>
      <Third />
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
