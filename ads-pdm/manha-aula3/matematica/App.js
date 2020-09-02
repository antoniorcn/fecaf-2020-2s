import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  var a = 4;
  var b = 8;
  var c = 4;
  var resultado = a * b / c;
  return (
    <View>
      <Text></Text>
      <Text>Exercício de Matematica</Text>
      <Text>{a} * {b} / {c} = {resultado}</Text>
    </View>
  );
}