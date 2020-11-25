import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Tarefa from './Tarefa';
import tasklist from './resources/tasklist.png';
import WebViewExample from './Modal.js'

class App extends React.Component {
  state = { 
    listaTarefas : [
      { titulo: "Titulo Tarefa 1", 
        data: "17/11 - Terça Feira", check: true},
      { titulo: "Titulo Tarefa 2", 
        data: "18/11 - Quarta Feira", check: true},
      { titulo: "Titulo Tarefa 3", 
        data: "18/11 - Quinta Feira", check: false},                
    ]
  }

  toggleCheck( index ) { 
    const novoStatus = {...this.state};
    novoStatus.listaTarefas[index].check = !novoStatus.listaTarefas[index].check;
    this.setState(novoStatus);
  }

  render() {
    const tarefasExibir = [];
    for(let i = 0; i < this.state.listaTarefas.length; i++) {
      const tarefa = this.state.listaTarefas[i]; 
      tarefasExibir.push(
        <Tarefa key={i} tarefa={tarefa} id={i} onClick={(i) => {this.toggleCheck(i)}}/>
      );
    }

    return (
      <SafeAreaView style={styles.principal}>
        <ImageBackground style={styles.image} source={tasklist}>
          <Text style={styles.titulo}>Hoje</Text>
          <Text style={styles.subtitulo}>Quarta 17 de Novembro</Text>
          
        </ImageBackground>
        {/* <WebViewExample/> */}
        <View style={styles.container}>
          {tarefasExibir}
        </View>
      </SafeAreaView>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  principal: { 
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  },
  titulo: { 
    color: "white",
    fontSize: 36,
    backgroundColor: "#404040A0",
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20
  },
  subtitulo: { 
    color: "white",
    fontSize: 16,
    backgroundColor: "#404040A0",
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20, 
    marginTop: 20
  }
});


export default App;