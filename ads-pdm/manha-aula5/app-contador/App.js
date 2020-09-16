import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  var capacidade = 20;
  var contadorPessoas = 13;
  var mensagem = "";

  if (contadorPessoas > capacidade) {
    mensagem = "O estabelecimento está super lotado, com mais pessoas do que o permitido";;
  } else { 
    if (capacidade == contadorPessoas) {
      mensagem = "O estabelecimento está com a capacidade total";
    } else { 
      var vagasDisponiveis = capacidade - contadorPessoas;
      // mensagem = `Há locais disponíveis para ${vagasDisponiveis} pessoas`;
      mensagem = "Há locais disponíveis para " + vagasDisponiveis + " pessoas";
    }
  }

  return (
    <View>
      <Text></Text>
      <Text>Aplicação de contagem de pessoas</Text>
      <Text>{mensagem}</Text>
    </View>
  );
}