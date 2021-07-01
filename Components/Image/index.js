import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const ComponentImage = ({ imageURL, title, secondTitle }) => {
  return (
    <View style={Style.ContainerView}>
      <Image
        source={{
          uri: imageURL,
        }}
        style={Style.image}
      />

      <View style={Style.viewCircle}>
        <View style={Style.circle} />
        <View style={Style.circle} />
        <View style={Style.circle} />
      </View>

      <View style={[Style.viewText, { borderColor: "green" }]}>
        <Text style={Style.text}>{title}</Text>
      </View>

      <View style={[Style.viewText, { borderColor: "red" }]}>
        <Text style={Style.text}>{secondTitle} </Text>
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  ContainerView: {
    borderColor: "purple",
    borderWidth: 5,
    margin: 5,
    padding: 5,
    flex: 1,
  },
  image: {
    margin: 3,
    borderColor: "blue",
    borderWidth: 3,
    height: 100,
    resizeMode: "cover",
  },
  viewText: {
    borderWidth: 1,
    margin: 3,
  },

  text: {
    fontSize: 20,
    textAlign: "center",
  },
  viewCircle: {
    flexDirection: "row",
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
