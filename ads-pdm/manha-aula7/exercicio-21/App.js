import React from 'react';
import { Text, View } from 'react-native';

class Dinossauro { 
  nome = "";
  energia = 0;
  velocidade = 0;
  temperatura = 0;
  humor = "";

  pular() { 
    console.log("Dinossauro está pulando");
  }

  correr() { 
    console.log("Dinossauro está correndo");
  }

  comer() { 
    console.log("Dinossauro está comendo");
  }
}

export default function App() {

  const rex = new Dinossauro();
  const blue = new Dinossauro();

  rex.nome = "Tiranossauro Rex";
  rex.energia = 100;
  rex.velocidade = 60;
  rex.temperatura = 15;
  rex.humor = "Bravo";

  blue.nome = "Velociraptor";
  blue.energia = 120;
  blue.velocidade = 80;
  blue.temperatura = 15;
  blue.humor = "Sarcástico";

  let dinoDisplay = blue;

  return (
    <View>
      <Text></Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Nome: {dinoDisplay.nome}</Text>
      <Text>Energia: {dinoDisplay.energia}</Text>
      <Text>Velocidade: {dinoDisplay.velocidade}</Text>
      <Text>Temperatura: {dinoDisplay.temperatura}</Text>
      <Text>Humor: {dinoDisplay.humor}</Text>
    </View>
  );
}
