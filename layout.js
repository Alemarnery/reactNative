import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, ScrollView, StyleSheet, Text, Dimensions } from "react-native";
import Input from "./Components/Input";

const layout = () => (
  <SafeAreaView style={Style.SafeAreaViewStyles}>
    <View style={Style.ViewGreen}>
      <Text style={Style.textHeader}>
        Alemarnery, ancho {Dimensions.get("window").width}
      </Text>
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
      <View style={[Style.child, { marginRight: space }]} />
      <View style={Style.child} />
    </View>
    <View style={Style.parentViewF}>
      <View style={[Style.child, { marginRight: space }]} />
      <View style={Style.child} />
    </View>
    <View style={Style.parentViewFi}>
      <View style={{ flexDirection: "row" }}>
        <View style={Style.childViewFi} />
        <View style={Style.childViewFi} />
        <View style={Style.childViewFi} />
        <View style={Style.childViewFi} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={Style.childViewFi} />
        <View style={Style.childViewFi} />
        <View style={Style.childViewFi} />
        <View style={Style.childViewFi} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={Style.childViewFi} />
        <View style={Style.childViewFi} />
        <View style={Style.childViewFi} />
        <View style={Style.childViewFi} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={Style.childViewFi} />
        <View style={Style.childViewFi} />
        <View style={Style.childViewFi} />
        <View style={Style.childViewFi} />
      </View>
    </View>
    <View style={Style.ViewGreen}>
      <ScrollView>
        <Input
          placeholder="Ingrese Nombre"
          iconName="email"
          iconLib="MaterialIcon"
        />
        <Input
          placeholder="Ingrese el apellido"
          iconName="5g"
          iconLib="MaterialIcon"
        />
        <Input
          placeholder="Ingrese el email"
          iconName="5g"
          iconLib="MaterialIcon"
        />
        <Input
          placeholder="Ingrese el edad"
          iconName="5g"
          iconLib="MaterialIcon"
        />
      </ScrollView>
    </View>
  </SafeAreaView>
);

const height = 60;
const width = 60;
const space = (Dimensions.get("window").width - width * 5) / 4;

const Style = StyleSheet.create({
  SafeAreaViewStyles: {
    borderWidth: 1,
    borderColor: "red",
    flex: 1,
  },

  textHeader: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  ViewGreen: {
    borderWidth: 1,
    borderColor: "green",
    flex: 1 / 6,
    justifyContent: "center",
  },
  ViewBlue: {
    borderWidth: 1,
    borderColor: "blue",
    flex: 1 / 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ViewRedChild: {
    borderWidth: 2,
    borderColor: "red",
    height,
    width,
  },
  parentViewT: {
    borderWidth: 1,
    borderColor: "black",
    flex: 1 / 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  parentViewF: {
    borderWidth: 1,
    borderColor: "black",
    flex: 1 / 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  child: {
    borderWidth: 2,
    borderColor: "red",
    height,
    width: width * 2 + space,
  },
  parentViewFi: {
    borderWidth: 1,
    borderColor: "black",
    flex: 1 / 6,
    justifyContent: "flex-start",
  },
  childViewFi: {
    borderWidth: 1,
    borderColor: "red",
    height: height / 4,
    width: (width * 2) / 4,
    marginTop: space / 3,
    marginRight: space / 3,
  },
});

export default layout;
