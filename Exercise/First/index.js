import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet, Text, Dimensions } from "react-native";

const firstExercise = () => {
  const square = () => {
    const arr = [];
    for (let index = 0; index < 4; index++) {
      arr.push(<View key={index} style={Style.fourthSquareChild} />);
    }
    return arr;
  };

  const minSquare = () => {
    const arr = [];
    for (let index = 0; index < 4; index++) {
      arr.push(<View style={Style.minSquare} />);
    }
    return arr;
  };

  return (
    <SafeAreaView style={Style.SafeAreaViewStyles}>
      <View style={Style.ViewContainer}>
        <Text style={Style.textHeader}>Exercise</Text>
      </View>
      <View
        style={[
          Style.ViewContainer,
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          },
        ]}
      >
        {square()}
      </View>

      <View style={[Style.parentTwoSquare, { justifyContent: "flex-start" }]}>
        <View style={[Style.child, { marginRight: space }]} />
        <View style={Style.child} />
      </View>

      <View style={[Style.parentTwoSquare, { justifyContent: "flex-end" }]}>
        <View style={[Style.child, { marginRight: space }]} />
        <View style={Style.child} />
      </View>

      <View style={[Style.ViewContainer, { justifyContent: "flex-start" }]}>
        <View style={Style.tableSquare}>{minSquare()}</View>
        <View style={Style.tableSquare}>{minSquare()}</View>
        <View style={Style.tableSquare}>{minSquare()}</View>
        <View style={Style.tableSquare}>{minSquare()}</View>
      </View>

      <View style={Style.ViewContainer} />
    </SafeAreaView>
  );
};

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
  ViewContainer: {
    borderWidth: 1,
    borderColor: "black",
    flex: 1 / 6,
  },
  fourthSquareChild: {
    borderWidth: 2,
    borderColor: "red",
    height,
    width,
  },
  parentTwoSquare: {
    borderWidth: 1,
    borderColor: "black",
    flex: 1 / 6,
    flexDirection: "row",
    alignItems: "center",
  },
  child: {
    borderWidth: 2,
    borderColor: "red",
    height,
    width: width * 2 + space,
  },
  minSquare: {
    borderWidth: 1,
    borderColor: "red",
    height: height / 4,
    width: (width * 2) / 4,
    marginTop: space / 3,
    marginRight: space / 3,
  },
  tableSquare: {
    flexDirection: "row",
  },
});

export default firstExercise;
