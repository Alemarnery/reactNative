import React from "react";
import { View } from "react-native";
import Input from "../../Components/Input";

const Second = () => {
  return (
    <View>
      <Input
        placeholder="Enter your name"
        iconName="drive-file-rename-outline"
        iconLib="MaterialIcons"
      />
      <Input
        placeholder="Enter your lastNname"
        iconName="brush"
        iconLib="Ionicons"
      />
    </View>
  );
};

export default Second;
