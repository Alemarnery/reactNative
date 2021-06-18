import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet, Text } from "react-native";

const layout = () => (
  <SafeAreaView style={Style.SafeAreaViewStyles}>
    <View style={Style.ViewGreen}>
      <Text style={Style.textHeader}>Alemarnery</Text>
      <Text style={Style.textHeader}>Villalobos</Text>
    </View>
    <View style={Style.ViewBlue}>
      <View style={Style.ViewRedChild} />
      <View style={Style.ViewRedChild} />
      <View style={Style.ViewRedChild} />
      <View style={Style.ViewRedChild} />
      <View style={Style.ViewRedChild} />
    </View>
    <View style={Style.parentViewT}>
      <View style={[Style.child, { marginRight: 4 }]} />
      <View style={Style.child} />
    </View>
    <View style={Style.parentViewF}>
      <View style={[Style.child, { marginRight: 4 }]} />
      <View style={Style.child} />
    </View>
    <View style={Style.View} />
    <View style={Style.View} />
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
    // justifyContent: "flex-end",
    //alignItems: "center",
  },
  View: {
    borderWidth: 3,
    borderColor: "blue",
    flex: 1 / 6,
  },
  textHeader: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  ViewGreen: {
    borderWidth: 3,
    borderColor: "green",
    flex: 1 / 6,
    justifyContent: "center",
  },
  ViewBlue: {
    borderWidth: 3,
    borderColor: "blue",
    flex: 1 / 6,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  ViewYellow: {
    borderWidth: 3,
    borderColor: "yellow",
    flex: 1 / 6,
  },
  ViewRedChild: {
    borderWidth: 2,
    borderColor: "red",
    height: 60,
    width: 60,
  },
  parentViewT: {
    borderWidth: 3,
    borderColor: "black",
    flex: 1 / 6,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  parentViewF: {
    borderWidth: 3,
    borderColor: "black",
    flex: 1 / 6,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  child: {
    borderWidth: 3,
    borderColor: "red",
    height: 60,
    width: 120,
  },
});

export default layout;
