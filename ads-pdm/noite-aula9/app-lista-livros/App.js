import React from 'react';
import { TextInput, Text, View, Button } from 'react-native';

class ListaLivros extends React.Component {
  state = { livros: [
    "Senhor dos Aneis: As duas torres",
    "Harry Potter e a Pedra Filosofal",
    "Augusto Cury: O vendedor de sonhos",
    "Sete desafios para ser rei",
    "Mãos a Obra Aprendizagem de Máquina"
  ], livroDigitado: "Comer, Rezar e Amar"}
  mostrarLivros() { 
    const lista = []
    for (var i = 0; i < this.state.livros.length; i++) { 
      lista.push(<Text>{this.state.livros[i]}</Text>);
    }
    return lista;
  }
  adicionarLivro() { 
    const novoEstado = {...this.state};
    novoEstado.livros.push(this.state.livroDigitado);
    this.setState(novoEstado);
  }
  mudarNomeLivro( texto ) { 
    const novoEstado = {...this.state};
    novoEstado.livroDigitado = texto;
    this.setState(novoEstado);
  }
  render () { 
    return (
      <View>
        <Text></Text>
        <Text>Lista de Livros</Text>
        <Text></Text>
        <Text>Nome do Livro: </Text>
        <TextInput value={this.state.livroDigitado} 
                    onChangeText={(novoTexto) => {this.mudarNomeLivro(novoTexto)}}/>
        <Text>Aperte o botão para adicionar um livro na lista</Text>
        <Button title="Adicionar" onPress={()=>this.adicionarLivro()}/>
        {this.mostrarLivros()}
      </View>
    )
  }
}

export default ListaLivros;