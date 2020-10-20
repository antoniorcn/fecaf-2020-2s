import React from 'react';
import { Button, TextInput, Text, View } from 'react-native';

class AppLivros extends React.Component { 

  state = { livro: "Senhor dos aneis: As duas torres", 
            livros: []}

  alterarTexto( texto ) {
    console.log("Texto mudado: ", texto);
    const novoState = {...this.state};
    novoState.livro = texto;
    this.setState(novoState);
  }

  salvarLivro() { 
    const novoState = {...this.state};
    console.log("Lista Livros antes: ", novoState.livros);
    novoState.livros.push( novoState.livro );
    console.log("Lista Livros depois: ", novoState.livros);
    this.setState(novoState);
  }

  render() { 
    return(
      <View>
        <Text></Text>
        <Text>App Livros</Text>
        <Text></Text>
        <Text>Informe o titulo do livro:</Text>
        <TextInput value={this.state.livro} onChangeText={(valor)=>this.alterarTexto(valor)}/>
        <Text></Text>
        <Button title="Salvar" onPress={()=>this.salvarLivro()}/>
        <Text>Lista de Livros:</Text>
        <Text>{this.state.livros[0]}</Text>
        <Text>{this.state.livros[1]}</Text>
        <Text>{this.state.livros[2]}</Text>
        <Text>{this.state.livros[3]}</Text>
      </View>
    )
  }
}


export default AppLivros;
