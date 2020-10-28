import React from 'react';
import { StyleSheet, Button, ScrollView, Text, TextInput, View, Switch, Alert, ToastAndroid, TouchableHighlight } from 'react-native';
import Jogo from './Jogo';

class App extends React.Component {
  state = { jogoAtual : {
                          titulo: "",
                          idade: "6",
                          lancamento: "2020",
                          tipo: ""
                        },
    listaJogos: [
      { titulo: "Counter Strike GO",
        idade: 12,
        lancamento: 2013,
        tipo: "FPS"
      },

      {
        titulo: "Civilization V",
        idade: 12,
        lancamento: 2013,
        tipo: "Simulador"
      },
    ]
  }

  limpar() { 
    const outroEstado = {...this.state};
    outroEstado.listaJogos = [];
    this.setState(outroEstado);
    ToastAndroid.showWithGravity(
      "Lista de jogos foi limpa", ToastAndroid.LONG,
      ToastAndroid.CENTER);
  }

  trocaTextoGenerica( texto, campo ) { 
    const outroEstado = {...this.state};
    outroEstado.jogoAtual[campo] = texto;
    this.setState(outroEstado);
  }

  gravar() {
    const outroEstado = {...this.state};
    const copiaJogo = {...outroEstado.jogoAtual};
    outroEstado.listaJogos.push(copiaJogo);
    outroEstado.jogoAtual = {
      titulo: "",
      idade: "6",
      lancamento: "2020",
      tipo: ""
    } 
    this.setState(outroEstado);
    Alert.alert("App Jogo", "Jogo foi gravado com sucesso");
  }


  render() {
    const listaExibir = [];
    for (let i = 0; i < this.state.listaJogos.length; i++) { 
      const jogo = this.state.listaJogos[i];
      listaExibir.push(
        <TouchableHighlight 
          key={i}
          onPress={
            ()=> {ToastAndroid.show("Jogo Clicado", ToastAndroid.SHORT)}
          }
          activeOpacity={0.5}
          underlayColor={"#CC0"}
          >
          <Jogo 
                titulo={jogo.titulo} 
                idade={jogo.idade} 
                lancamento={jogo.lancamento} 
                tipo={jogo.tipo} />
        </TouchableHighlight>
      );
    }

    return (
      <ScrollView>
        <View>
          <Text>App de Jogos</Text>
          <Text></Text>
          <Text style={estilos.texto}>Titulo</Text>
          <TextInput value={this.state.jogoAtual.titulo}
                      onChangeText={(txt) => {this.trocaTextoGenerica(txt, "titulo");}}
                      placeholder="Coloque aqui o nome do jogo"
                      style={estilos.input}/>
          <Text style={estilos.texto}>Idade Minima</Text>
          <TextInput value={this.state.jogoAtual.idade}
                      onChangeText={(txt) => {this.trocaTextoGenerica(txt, "idade");}}
                      keyboardType="number-pad"
                      style={estilos.input}/>
          <Text style={estilos.texto}>Data Lançamento</Text>
          <TextInput value={this.state.jogoAtual.lancamento}
                      onChangeText={(txt) => {this.trocaTextoGenerica(txt, "lancamento");}}
                      keyboardType="number-pad"
                      maxLength={4}
                      style={estilos.input}/>
          <Text style={estilos.texto}>Tipo do Jogo</Text>
          <TextInput value={this.state.jogoAtual.tipo}
                      onChangeText={(txt) => {this.trocaTextoGenerica(txt, "tipo");}}
                      placeholder="Informe o tipo do jogo"
                      style={estilos.input}/>
          <Switch value={false} thumbColor={"#0CC"} trackColor={{false: "#FF0", true: "#0F0"}}/>
        </View>
        <View>
          <Button title="Gravar" onPress={()=>{this.gravar();}}/>
          <Button title="Limpar" onPress={()=>{this.limpar();}}/>
        </View>
        {listaExibir}
      </ScrollView>
    );
  }
}

const estilos = StyleSheet.create({
    texto: {
      color: "#666"
    },
    input: { height: 50, 
      borderColor: "blue", 
      borderWidth: 2,
      borderRadius: 15
    }
  });


export default App;
