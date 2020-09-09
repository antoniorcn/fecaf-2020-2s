import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  var passos = 45;
  var erros = 10;
  var testes = 5;
  var velocidade = 60;
  var ganhos = 1000;
  var inflacao = 5 / 100;
  var lucro = 500;
  var coelhos = 3;
  var animais = 10;

  passos += 2;
  erros -= 1;
  testes += (4/2);
  velocidade += 10;
  ganhos *= 1.02;
  inflacao *= 1.01;
  lucro /= 1.03;
  animais += (5 * coelhos);

  return (
    <View>
      <Text></Text>
      <Text>Exercicio 10</Text>
      <Text>a) Passos: {passos}</Text>
      <Text>b) Erros: {erros}</Text>
      <Text>c) Testes: {testes}</Text>
      <Text>d) Velocidade: {velocidade}</Text>
      <Text>e) Ganhos: {ganhos}</Text>
      <Text>f) Inflação: {inflacao}</Text>
      <Text>g) Lucro: {lucro}</Text>
      <Text>h) Animais: {animais}</Text>
    </View>
  );
}

