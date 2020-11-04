import React from 'react';
import {Button, View, SafeAreaView, Text, TextInput, ScrollView} from 'react-native';
import Jogo from './Jogo';

class Jogos extends React.Component {
  state = { 
      jogoAtual: { 
        titulo: "",
        idade: "10",
        lancamento: "04/11/2020",
        tipo: "Ação"
      },
      lista: [
        {
          titulo: "jogo 1",
          idade: 10,
          lancamento: "01/11/2020",
          tipo: "RPG"
        },
        {
          titulo: "jogo 2",
          idade: 14,
          lancamento: "05/07/2019",
          tipo: "Ação"
        },
      ],
  }

  mudarTextoInput(texto, nomeCampo) { 
    //console.log("Texto " + texto + " foi digitado");
    const copiaState = {...this.state};
    copiaState.jogoAtual[nomeCampo] = texto;
    this.setState(copiaState);
  }

  gravar() { 
    console.log("Botão Gravar apertado");
    const copiaState = {...this.state};
    const copiaJogoAtual = {...copiaState.jogoAtual};
    copiaState.lista.push(copiaJogoAtual);
    this.setState(copiaState);
  }

  limpar() { 
    const copiaState = {...this.state};
    copiaState.lista = [];
    this.setState(copiaState);
  }

  render() { 
    const listaExibir = [];
    for (let i = 0; i < this.state.lista.length; i++) {
      const jogo = this.state.lista[i];
      listaExibir.push(
            <Jogo key={i}
              titulo={jogo.titulo}
              idade={jogo.idade}
              lancamento={jogo.lancamento}
              tipo={jogo.tipo}/>
      );
    }
    return (
      <ScrollView>
        <View>
          <Text>Titulo do jogo</Text>
          <TextInput  value={this.state.jogoAtual.titulo}
                      onChangeText={(txt)=>{this.mudarTextoInput(txt, "titulo");}}/>
          <Text>Idade mínima</Text>
          <TextInput  value={this.state.jogoAtual.idade}
                      onChangeText={(txt)=>{this.mudarTextoInput(txt, "idade");}}/>
          <Text>Data lançamento</Text>
          <TextInput  value={this.state.jogoAtual.lancamento}
                      onChangeText={(txt)=>{this.mudarTextoInput(txt, "lancamento");}}/>
          <Text>Tipo do jogo</Text>
          <TextInput  value={this.state.jogoAtual.tipo}
                      onChangeText={(txt)=>{this.mudarTextoInput(txt, "tipo");}}/>
          <Button title="Gravar" onPress={()=>{this.gravar();}}/>
          <Button title="Limpar" onPress={()=>{this.limpar();}}/>
        </View>
        <View>
          {listaExibir}
        </View>
      </ScrollView>
    );
  }
}

export default Jogos;