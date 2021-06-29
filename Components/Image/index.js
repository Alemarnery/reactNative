import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

const ComponentImage = () => {
  return (
    <ScrollView style={Style.scrollView} numColumns={2}>
      <View style={Style.ContainerView}>
        <Image
          source={{ uri: "https://reactjs.org/logo-og.png" }}
          style={{
            margin: 3,
            borderColor: "darkorange",
            borderWidth: 3,
            height: 100,
          }}
        />
        <Text style={Style.text}>Title</Text>
      </View>
    </ScrollView>
  );
};

const Style = StyleSheet.create({
  scrollView: {
    backgroundColor: "pink",
    margin: 10,
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
  ContainerView: {
    borderColor: "red",
    borderWidth: 5,
    margin: 5,
  },
});

export default ComponentImage;
