import React from "react";
import { FlatList } from "react-native";
import ComponentImage from "../../Components/Image";

const Third = () => {
  const DATA = [
    {
      id: 1,
      imageURL: "https://random.imagecdn.app/500/200",
      title: "Primer Titulo",
      secondTitle: "Segundo Titulo",
    },
    {
      id: 2,
      imageURL: "https://random.imagecdn.app/500/100",
      title: "Titulo de la segunda tarjeta",
      secondTitle: "Subtitulo de la segunda tarjeta",
    },
    {
      id: 3,
      imageURL: "https://random.imagecdn.app/400/250",
      title: "Tercer Titulo",
      secondTitle: "Subtitulo de la terca tarjeta",
    },
    {
      id: 4,
      imageURL: "https://random.imagecdn.app/400/250",
      title: "Tercer Titulo",
      secondTitle: "Subtitulo de la terca tarjeta",
    },
    {
      id: 5,
      imageURL: "https://random.imagecdn.app/400/250",
      title: "Tercer Titulo",
      secondTitle: "Subtitulo de la terca tarjeta",
    },
  ];

  const renderImageComponent = ({ item }) => {
    return (
      <ComponentImage
        imageURL={item.imageURL}
        title={item.title}
        secondTitle={item.secondTitle}
      />
    );
  };

  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={renderImageComponent}
      numColumns={2}
    />
  );
};

export default Third;
