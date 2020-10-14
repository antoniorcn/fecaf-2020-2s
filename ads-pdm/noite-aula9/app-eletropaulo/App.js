import React from 'react';
import { Text, View } from 'react-native';


class Eletropaulo extends React.Component { 
  state = [ 
    {numero: 14, kvh: 230, valor: 115},   // 0
    {numero: 35, kvh: 120, valor: 60},    // 1
    {numero: 54, kvh: 350, valor: 175},   // 2
    {numero: 71, kvh: 410, valor: 205},   // 3
    {numero: 92, kvh: 70, valor: 35}      // 4
  ]

  casa(num, kvh, val) { 
    return (
      <Text>Casa nº {num}    KV/h: {kvh}     R$: {val}</Text>
    )
  }

  render() {
    const lista = []
    for (var i = 0; i < 5; i++) { 
      const obj = this.casa(this.state[i].numero, this.state[i].kvh, this.state[i].valor)
      lista.push(obj);
    }

    return (
      <View>
        <Text></Text>
        <Text>App Eletropaulo</Text>
        {lista}
      </View>
    )
  }
}

export default Eletropaulo;