import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Input = () => {
  const [text, setText] = useState("");
  return (
    <SafeAreaView style={Style.SafeAreaViewStyles}>
      <View style={Style.viewContainer}>
        <TextInput
          style={Style.input}
          placeholder="Escribe tu correo electronico"
          defaulValue={text}
          onChangeText={(text) => setText(text)}
        />
        <MaterialIcons
          name="email"
          size={24}
          color="gray"
          style={Style.MaterialIcons}
        />
      </View>
    </SafeAreaView>
  );
};
const Style = StyleSheet.create({
  SafeAreaViewStyles: {
    borderWidth: 4,
    borderColor: "red",
    flex: 1,
  },
  viewContainer: {
    flex: 1 / 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red",
    borderWidth: 1,
    marginHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    backgroundColor: "white",
  },
});

export default Input;
