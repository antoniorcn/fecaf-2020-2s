import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';


class AplicacaoPrincipal extends Component { 

  numero = 0;

  render() { 
    return(
      <View>
        <Text></Text>
        <Text>Numero: {this.numero}</Text>
        <Button title="Me aperte"></Button>
      </View>
    );
  }

}

export default AplicacaoPrincipal;
