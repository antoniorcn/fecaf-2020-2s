import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  var nome = "Antonio Rodrigues Carvalho Neto";
  var idade = 30;
  var ra = "0001";
  var peso = 82.3;
  var altura = 1.72;
  var trabalha = true;
  var disciplinas = ["PDM", "POO", "PROG WEB"];
  return (
    <View>
      <Text>{"\n"}Variaveis</Text>
      <Text>Nome Completo: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>RA: {ra}</Text>
      <Text>Peso: {peso}</Text>
      <Text>Altura: {altura}</Text>
      <Text>Trabalha: {trabalha}</Text>
      <Text>Disciplinas: {disciplinas}</Text>
    </View>
  );
}