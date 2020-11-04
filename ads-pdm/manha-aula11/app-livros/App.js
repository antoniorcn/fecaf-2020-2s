import React from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Livro from './Livro';

class AppLivros extends React.Component { 

  state = { 
    livroAtual: {
      titulo: "",
      autor: "",
      ano: "2020"
    },

    listaLivros: [
      {
        titulo: "Tropa de Elite", 
        autor: "Hector Babenco",
        ano: "2003"
      },
      {
        titulo: "O Senhor dos Aneis",
        autor: "R.R. Tolkien",
        ano: "1958"
      },
      {
        titulo: "Pequeno Principe",
        autor: "Alexander Perry",
        ano: "1930"
      }
    ]
  }

  mudarTextoGenerica(texto, campo) { 
    const copiaState = {...this.state};
    copiaState.livroAtual[campo] = texto;
    this.setState(copiaState);
  }

  gravar() { 
    const copiaState = {...this.state};
    const copiaLivroAtual = {...copiaState.livroAtual};
    copiaState.listaLivros.push(copiaLivroAtual);
    this.setState(copiaState);
    Alert.alert("Livro gravado com sucesso");
  }

  render() { 
    const listaLivrosExibir = [];
    for(let i = 0; i < this.state.listaLivros.length; i++) { 
      const objLivro = this.state.listaLivros[i];
      listaLivrosExibir.push(
        <Livro  key={i} 
                titulo={objLivro.titulo}
                autor={objLivro.autor}
                ano={objLivro.ano}/>
      );
    }
    
    return (
      <ScrollView>
        <Text></Text>
        <Text>App Livros</Text>
        <Text>--------Formulario de Livro-------</Text>
        <Text>Titulo:</Text>
        <TextInput  value={this.state.livroAtual.titulo}
                    onChangeText={(txt)=>{this.mudarTextoGenerica(txt, "titulo")}}
                    placeholder="Digite aqui o titulo do livro"
                    style={estilos.input}/>
        <Text>Autor:</Text>
        <TextInput  value={this.state.livroAtual.autor}
                    onChangeText={(txt)=>{this.mudarTextoGenerica(txt, "autor")}}
                    placeholder="Digite aqui o nome completo do autor"
                    style={estilos.input}/>
        <Text>Ano:</Text>
        <TextInput  value={this.state.livroAtual.ano}
                    onChangeText={(txt)=>{this.mudarTextoGenerica(txt, "ano")}}
                    keyboardType="numeric"
                    maxLength={4}
                    style={estilos.input}/>
        <Text></Text>
        <Button title="Gravar" 
                onPress={()=>{this.gravar()}}
                style={estilos.botao}/>
        {listaLivrosExibir}
      </ScrollView>
    )
  }
}

const estilos = StyleSheet.create(
  {
    input: {  borderColor:"#FF7", 
              borderWidth: 2, 
              borderRadius: 15,
              paddingLeft: 20,
              marginLeft: 20,
              marginRight: 20
            },
    botao: { 
              borderWidth: 2,
              borderRadius: 15,
              backgroundColor: "#FCC",
              color: "#FCC"
    }
  }
)

export default AppLivros;