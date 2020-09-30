import React from 'react';
import {View, Text, Button} from 'react-native';

class Exercicio24 extends React.Component { 

  state = {msg: "Componente exercício 24"};
  
  render() { 
    return (
      <View>
        <Text></Text>
        <Text>{this.state.msg}</Text>
        <Button 
            title="Trocar"
            onPress={()=>{this.trocarMensagem()}} />
      </View>
    );
  }

  trocarMensagem() { 
    this.setState({msg: "Outra mensagem"});
  }
}

export default Exercicio24;