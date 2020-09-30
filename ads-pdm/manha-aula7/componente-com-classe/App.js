// import React, { Component } from 'react';
import React from 'react';
import {View, Text, Button} from 'react-native';

// class Principal extends Component { 
class Principal extends React.Component {
  state = {valor: 20, nome: "Tiranossauro Rex", energia: 100};
  // aluno1 = {ra: "0001", nome: "JOão Silva", idade: 19};

  render() { 
    console.log("Valor: ", this.state.valor);
    return (
      <View>
        <Text></Text>
        <Text>Componente feito com classe</Text>
        <Text>Valor: {this.state.valor}</Text>
        <Button title="Mudar valor" 
                onPress={()=>{this.mudarValor();}}/>
      </View>
    );
  }

  mudarValor() { 
    // this.aluno1.idade = 20
    this.setState({valor: 80, nome : "Tiranossauro Rex", energia: 100});
  }
}

export default Principal;