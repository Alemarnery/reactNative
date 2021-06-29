import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Image = () => {
  return (
    <View style={Style.parentView}>
      <View style={Style.imageView}></View>
      <View style={Style.imageView}></View>
      <View style={Style.imageView}></View>
      <View style={Style.imageView}></View>
    </View>
  );
};

const Style = StyleSheet.create({
  parentView: {
    borderColor: "green",
    borderWidth: 3,
    flexDirection: "row",
  },
  imageView: {
    borderColor: "red",
    borderWidth: 1,
    flex: 1 / 2,
    margin: 6,
    height: 100,
  },
});

export default Image;
