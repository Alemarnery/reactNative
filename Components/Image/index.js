import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

const ComponentImage = () => {
  return (
    <ScrollView style={Style.scrollView}>
      <View style={Style.ContainerView}>
        <View>
          <Image
            source={{ uri: "https://reactjs.org/logo-og.png" }}
            style={{
              margin: 3,
              borderColor: "blue",
              borderWidth: 3,
              height: 100,
            }}
          />
        </View>
        <View style={{ borderWidth: 1, borderColor: "green", margin: 3 }}>
          <Text style={Style.text}>Title</Text>
        </View>
        <View style={{ borderWidth: 1, borderColor: "red", margin: 3 }}>
          <Text style={Style.text}>Title</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const width = Dimensions.get("window").width;

const Style = StyleSheet.create({
  scrollView: {
    margin: 10,
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
  ContainerView: {
    borderColor: "purple",
    borderWidth: 5,
    margin: 5,
    padding: 5,
    width: width / 3,
  },
});

export default ComponentImage;
