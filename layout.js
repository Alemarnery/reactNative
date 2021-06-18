import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";

const layout = () => (
  <SafeAreaView style={Style.SafeAreaViewStyles}>
    <View style={Style.ViewGreen} />
    <View style={Style.ViewBlue} />
    <View style={Style.ViewYellow} />
  </SafeAreaView>
);

//Justify Content y align items, se utilizan cuando los elementos tienen un HEIGHT determinado

//JuSTIFY Content trabaja en fucion del eje princial, es decir, el vertical

const Style = StyleSheet.create({
  SafeAreaViewStyles: {
    borderWidth: 1,
    borderColor: "red",
    flex: 1,
    // flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  ViewGreen: {
    borderWidth: 3,
    borderColor: "green",
    height: 60,
    width: 30,
    //flex: 1 / 2,
  },
  ViewBlue: {
    borderWidth: 3,
    borderColor: "blue",
    height: 60,
    width: 30,
    //flex: 3 / 8,
  },
  ViewYellow: {
    borderWidth: 3,
    borderColor: "yellow",
    height: 60,
    width: 30,
    // flex: 1 / 8,
  },
});

export default layout;
