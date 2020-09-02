import React from 'react';
import { Text, View } from 'react-native';

function Exercicio4() {
  var nome;       // Declaração
  nome = "Antonio Rodrigues Carvalho Neto";   // Inicialização
  var ra = "000001";    // Declaração e Inicialização na mesma linha
  var idade = 35;
  var peso = 80.5;
  var altura = 1.72;
  var trabalha = false;
  var testeVariavelBoolean = true;
  var disciplinas = ["GTI-POO", "ADS-PDM"];

  console.log("Nome: ", nome);
  console.log("Ra: ", ra);
  console.log("Idade: ", idade);
  console.log("Peso: ", peso);
  console.log("Altura: ", altura);
  if (trabalha == true) { 
    console.log("Trabalha: SIM");
  } else { 
    console.log("Trabalha: NÃO");
  }
  console.log("Disciplinas: ", disciplinas);

  return (
    <View>
      <Text>Exercício 4</Text>
      <Text>Nome: {nome}</Text>
    </View>
  );
}


function testeOperadoresAritmeticos() { 
  
  var x = 10;
  var w = x + 20;
  console.log("W: ", w);

  var a = x - 10 / 2;
  console.log("A: ", a);

  x = 20;
  var y = x * 2 / a;
  console.log("Y: ", y);

  var b = Math.floor(11 / 3);
  console.log("B: ", b);

  var c = 11 % 3;
  console.log("C: ", c);

  return (
    <View>
      <Text>Operadores Aritméticos</Text>
      <Text></Text>
    </View>
  );

}



function testeOperadoresRelacionais() { 
  var altura = "2.10";
  var porta = 2.10;
  var passarPelaPorta = altura < porta;

  var temperatura = 15;
  var frio = temperatura < 5;
  var calor = temperatura > 27;
  console.log("Está Frio: ", frio);
  console.log("Está Calor: ", calor);

  var taoAltoQuantoAPorta = altura === porta;
  console.log("Tão Alto quanto a porta: ", taoAltoQuantoAPorta);
  console.log("Passa pela Porta: ", passarPelaPorta);

  var quantidadeCarrosNaRua = 100;
  var quantidadeCarrosNaFransciscoMorato = 100; 
  var asRuasPossuemQtdDif = quantidadeCarrosNaFransciscoMorato != quantidadeCarrosNaRua;
  console.log("Ruas tem qtd de carros diferentes: ", asRuasPossuemQtdDif);
  return (
    <View>
      <Text></Text>
      <Text>Operadores Realacionais</Text>

    </View>
  );

}


export default testeOperadoresRelacionais;