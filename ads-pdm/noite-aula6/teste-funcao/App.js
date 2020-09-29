import React, { Component, Fragment } from 'react';
import { Text, View, SafeAreaView } from 'react-native';


class Aluno { 
  id = 0;
  nome = "";
  curso = "Analise e Desenvolvimento de Sistemas";
  turma = "3º e 4º Noite";

  pagarMensalidade( valor ) { 
    console.log(`Pagando a mensalidade no valor de ${valor}`);
  }

  fazerAtividadeComplementar() { 
    console.log("Fazendo atividade complementar");
  }

  estudar() { 
    console.log("Estudando");
  }
}


function cabecalho( nomePrograma, nomeAutor ) { 
  return (
    <Fragment>
      <Text></Text>
      <Text>Programa: {nomePrograma}</Text>
      <Text>Feito por: {nomeAutor}</Text>
    </Fragment>
  );
}
function rodape() { 
  return (
    <Text>Feito pelos alunos da FECAF</Text>
  );
}

function cabecalhoComQuadro(nomeFaculdade, nomePrograma, nomeAutor) { 
  return (
    <View>
      <Text>##############################</Text>
      <Text>#      Faculdade {nomeFaculdade} #</Text>
      <Text>#      {nomePrograma}      #</Text>
      <Text># Desenvolvido por: {nomeAutor} #</Text>
      <Text>##############################</Text>
    </View>
  );
}

function somaNumeros(numero1, numero2) {
  var soma = numero1 + numero2;
  return soma;
}

var multiplicaNumerosArrow = (n1, n2) => { 
  return n1 * n2;
}

var gerarEstilo = () => { 
  return {color: "red"}
}

// function textoEmVermelho( texto ) { 
// const textoEmVermelho = (texto) => {
//  return(<Text style={{color: "red"}}>{texto}</Text>);
//}

const textoEmVermelho = texto =>
  (<Text style={{color: "red"}}>{texto}</Text>); 

// function App() {
var App = () => {
  var s = multiplicaNumerosArrow(11, 23);

  var a1 = new Aluno();
  var a2 = new Aluno();
  var a3 = new Aluno();

  a1.id = "00001";
  a1.nome = "João";
  a1.pagarMensalidade(100.0);

  a2.id = "00002";
  a2.nome = "Maria";
  a2.pagarMensalidade(200.0);

  return (
    <SafeAreaView>
      {textoEmVermelho("Teste de Texto em vermelho")}
      {cabecalhoComQuadro("FECAF", "Teste de Função", "Antonio Carvalho")}
  <Text>{textoEmVermelho("Open up App.js to start working on your app!")}</Text>
    <Text>{s}</Text>
    </SafeAreaView>
  );
}

export default App;
