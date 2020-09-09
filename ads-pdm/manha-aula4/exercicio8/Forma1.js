import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  var temperatura = 4;
  var msg = "";

  if (temperatura < 0) { 
    msg = "Está muito frio não saia de casa";
  }

  if (temperatura >= 0 && temperatura < 5) { 
    msg = "Está muito frio, se agasalhe muito bem se planejar sair";
  }

  if (temperatura >= 5 && temperatura < 10) { 
    msg = "Está muito frio, leve um casaco";
  }

  if (temperatura >= 10 && temperatura < 15) { 
    msg = "Está frio, leve uma blusa";
  }

  if (temperatura >= 15 && temperatura < 20) { 
    msg = "Está razoavelmente frio";
  }

  if (temperatura >= 20 && temperatura < 25) { 
    msg = "Está agradável";
  }

  if (temperatura >= 25 && temperatura < 30) { 
    msg = "Está calor";
  }

  if (temperatura >= 30 && temperatura < 35) { 
    msg = "Está muito calor leve uma bermuda";
  }

  if (temperatura >= 35) { 
    msg = "Está muito quente, fique em uma piscina ";
  }

  return (
    <View>
      <Text></Text>
      <Text>Exercício 8</Text>
      <Text>App de dicas sobre o clima</Text>
      <Text>{msg}</Text>
    </View>
  );
}