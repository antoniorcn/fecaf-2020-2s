import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  var contadorPessoas = 190;
  // contadorPessoas += 1;
  var msg = "";

  if (contadorPessoas > 100) {
    msg = "Há mais do que 100 pessoas";
  } else {
    msg = "Há menos do que 100 pessoas"
  }

  if (contadorPessoas === 100) { 
    msg = "Existem exatamente 100 pessoas";
  }


  return (
    <View>
      <Text></Text>
      <Text>Contador de Pessoas: {contadorPessoas}</Text>
      <Text>{msg}</Text>
    </View>
  );
}
