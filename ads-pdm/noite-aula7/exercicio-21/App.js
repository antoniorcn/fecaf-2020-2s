import React from 'react';
import { Text, View } from 'react-native';

class Aluno { 
  id = 0;
  nome = "";
  ra = "";
  nascimento = "";

  estudar() { 
    console.log("Aluno estudando");
  }

  descansar() { 
    console.log("Aluno descansando");
  }
}

export default function App() {

  const aluno1 = new Aluno();
  const aluno2 = new Aluno();

  aluno1.nome = "João Silva";
  aluno1.ra = "0001";
  aluno1.id = 1;
  aluno1.nascimento = "2000-08-13";

  aluno2.nome = "Maria Silva";
  aluno2.ra = "0002";
  aluno2.id = 2;
  aluno2.nascimento = "1998-07-15";

  var alunoTemp = aluno2;
  return (
    <View>
      <Text></Text>
      <Text>Informações do Aluno</Text>
      <Text>Nome: {alunoTemp.nome}</Text>
      <Text>RA: {alunoTemp.ra}</Text>
      <Text>Nascimento: {alunoTemp.nascimento}</Text>
    </View>
  );
}