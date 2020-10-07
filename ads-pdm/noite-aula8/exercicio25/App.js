import React from 'react';
import { Text, View, Button } from 'react-native';


class Tabuada extends React.Component { 

  state = { numero: 7, 
            resposta1: 0, 
            resposta2: 0, 
            resposta3: 0, 
            resposta4: 0, 
            resposta5: 0, 
            resposta6: 0, 
            resposta7: 0, 
            resposta8: 0, 
            resposta9: 0, 
            resposta10: 0 
          } 

  render() { 
    return (
      <View>
        <Text></Text>
        <Text>Tabuada do numero {this.state.numero}</Text>
        <Text>{this.state.numero} X 1 = {this.state.resposta1}</Text>
        <Text>{this.state.numero} X 2 = {this.state.resposta2}</Text>
        <Text>{this.state.numero} X 3 = {this.state.resposta3}</Text>
        <Text>{this.state.numero} X 4 = {this.state.resposta4}</Text>
        <Text>{this.state.numero} X 5 = {this.state.resposta5}</Text>
        <Text>{this.state.numero} X 6 = {this.state.resposta6}</Text>
        <Text>{this.state.numero} X 7 = {this.state.resposta7}</Text>
        <Text>{this.state.numero} X 8 = {this.state.resposta8}</Text>
        <Text>{this.state.numero} X 9 = {this.state.resposta9}</Text>
        <Text>{this.state.numero} X 10 = {this.state.resposta10}</Text>
        <Button title="Calcular" onPress={()=>{this.calcular();}}></Button>
      </View>
    );
  }

  calcular() { 
    const estado = {...this.state};
    estado.resposta1 = estado.numero * 1;
    estado.resposta2 = estado.numero * 2;
    estado.resposta3 = estado.numero * 3;
    estado.resposta4 = estado.numero * 4;
    estado.resposta5 = estado.numero * 5;
    estado.resposta6 = estado.numero * 6;
    estado.resposta7 = estado.numero * 7;
    estado.resposta8 = estado.numero * 8;
    estado.resposta9 = estado.numero * 9;
    estado.resposta10 = estado.numero * 10;
    this.setState(estado);
  }

}

export default Tabuada;

