import React from 'react';
import { Text, View } from 'react-native';

export default function App() {

  // var i = 0;
  // while( i <= 10 ) { 
  //   var resultado = 7 * i;
  //   console.log("7 X " + i + " = " + resultado);
  //   i = i + 1; 
  // }


  // mostrar na console os numeros de 1 a 5
  for (var i = 1; i <= 5; i = i + 1) { 
    // console.log("Valor de I: " + i);
    console.log(`Valor de I: ${i}`);
  }

  return (
    <View>
      <Text></Text>
      <Text>Tabuada do 7</Text>
    </View>
  );
}