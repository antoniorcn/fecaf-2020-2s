import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  var temperatura = 4;
  var msg = "";

  if (temperatura < 0) { 
    msg = "Está muito frio não saia de casa";
  } else { 
    if (temperatura < 5) { 
      msg = "Está muito frio, se agasalhe muito bem se planejar sair";
    } else { 
      if (temperatura < 10) { 
        msg = "Está muito frio, leve um casaco";
      } else { 
        if (temperatura < 15) { 
          msg = "Está frio, leve uma blusa";
        } else { 
          if (temperatura < 20) { 
            msg = "Está razoavelmente frio";
          } else { 
            if (temperatura < 25) { 
              msg = "Está agradável";
            } else { 
              if (temperatura < 30) { 
                msg = "Está calor";
              } else { 
                if (temperatura < 35) { 
                  msg = "Está muito calor leve uma bermuda";
                } else { 
                  msg = "Está muito quente, fique em uma piscina ";
                }
              }
            }
          }
        }
      }
    }
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