import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, FlatList } from "react-native";
//import Input from "./Components/Input";
import ComponentImage from "./Components/Image";
import First from "./Exercise/First";

const layout = () => {
  //First exercise, was a rectanguler
  return (
    <SafeAreaView style={Style.SafeAreaViewStyles}>
      <First />
    </SafeAreaView>
  );

  //**********Tile Component
  const DATA = [
    {
      id: 1,
      imageURL: "https://random.imagecdn.app/500/200",
      title: "Primer Titulo",
      secondTitle: "Segundo Titulo",
    },
    {
      id: 2,
      imageURL: "https://random.imagecdn.app/400/100",
      title: "Titulo de la segunda tarjeta",
      secondTitle: "Subtitulo de la segunda tarjeta",
    },
    {
      id: 3,
      imageURL: "https://random.imagecdn.app/400/250",
      title: "Tercer Titulo",
      secondTitle: "Subtitulo de la terca tarjeta",
    },
  ];

  const renderImageComponent = ({ item }) => {
    <ComponentImage
      imageURL={item.imageURL}
      title={item.title}
      secondTitle={item.secondTitle}
    />;
  };

  return (
    <SafeAreaView style={Style.SafeAreaViewStyles}>
      {/* <ScrollView style={{ flex: 1 / 2 }}>
        <ComponentImage
          imageURL="https://random.imagecdn.app/500/200"
          title="Primer Titulo"
          secondTitle="Segundo Titulo"
        />
        <ComponentImage
          imageURL="https://random.imagecdn.app/400/100"
          title="Titulo de la segunda tarjeta"
          secondTitle="Subtitulo de la segunda tarjeta"
        />
        <ComponentImage
          imageURL="https://random.imagecdn.app/400/250"
          title="Tercer Titulo"
          secondTitle="Subtitulo de la terca tarjeta"
        />
      </ScrollView> */}
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderImageComponent}
      />
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({
  SafeAreaViewStyles: {
    borderWidth: 1,
    borderColor: "red",
    flex: 1,
  },
});

export default layout;
