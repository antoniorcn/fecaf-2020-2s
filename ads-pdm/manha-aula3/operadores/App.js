import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  var temperatura = -2;
  var mensagem = "sem dicas";

  if (temperatura < 5) { 
    mensagem = "Está frio, leve um casaco";
  } else { 
    if (temperatura < 15) { 
      mensagem = "Está frio, leve uma blusa";
    } else { 
      if (temperatura < 25) { 
        mensagem = "Está agradável";
      } else { 
        mensagem = "Está calor";
      }
    }
  }

  return (
    <View>
      <Text></Text>
      <Text>Aplicação de dicas do tempo</Text>
      <Text></Text>
      <Text>{mensagem}</Text>
    </View>
  );
}


