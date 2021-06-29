import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

const ComponentImage = ({ imageURL, title, secondTitle }) => {
  return (
    <View style={Style.ContainerView}>
      <Image
        source={{
          uri: imageURL,
        }}
        style={{
          margin: 3,
          borderColor: "blue",
          borderWidth: 3,
          height: 100,
        }}
        s
      />

      <View style={{ flexDirection: "row" }}>
        <View style={Style.circle} />
        <View style={Style.circle} />
        <View style={Style.circle} />
      </View>

      <View style={{ borderWidth: 1, borderColor: "green", margin: 3 }}>
        <Text style={Style.text}>{title}</Text>
      </View>
      <View style={{ borderWidth: 1, borderColor: "red", margin: 3 }}>
        <Text style={Style.text}>{secondTitle} </Text>
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  ContainerView: {
    borderColor: "purple",
    borderWidth: 5,
    margin: 5,
    padding: 5,
  },
  circle: {
    width: 30,
    margin: 3,
    height: 30,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "black",
  },
});

export default ComponentImage;
