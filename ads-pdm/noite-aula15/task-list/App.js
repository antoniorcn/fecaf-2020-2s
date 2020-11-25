import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Tarefa from './Tarefa';
import tasklist from './resources/tasklist.png';
import NovaTarefa from './NovaTarefa';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

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

  toggleTask(indice) { 
    const novoStatus = {...this.state};
    console.log("ToggleTask foi executado para o indice: ", indice);
    novoStatus.listaTarefas[indice].check = !novoStatus.listaTarefas[indice].check;
    this.setState(novoStatus);
  }

  adicionarTarefa(obj) { 
    const novoEstado = {...this.state};
    novoEstado.listaTarefas.push(obj);
    this.setState(novoEstado);
  }

  render() {
    const tarefasExibir = [];
    for(let i = 0; i < this.state.listaTarefas.length; i++) {
      const tarefa = this.state.listaTarefas[i]; 
      tarefasExibir.push(
        <Tarefa key={i}
                id={i}
                titulo={tarefa.titulo}
                data={tarefa.data}
                check={tarefa.check}
                onClick={(idx)=>{this.toggleTask(idx)}}/>
      );
    }

    const TarefasExibirComponente = () => { 
      return (
        <ScrollView>
          {tarefasExibir}
        </ScrollView>
      )
    }

    const NovaTarefaComponente = () => {
      return (
        <NovaTarefa adicionarTarefa={(obj)=>this.adicionarTarefa(obj)}/>
      )
    }

    return (
      <NavigationContainer>
        <SafeAreaView style={styles.principal}>
          <ImageBackground style={styles.image} source={tasklist}>
            <Text style={styles.titulo}>Hoje</Text>
            <Text style={styles.subtitulo}>Quarta 17 de Novembro</Text>
          </ImageBackground>
        </SafeAreaView>
        <Tab.Navigator>
          <Tab.Screen name="Nova Tarefa" component={NovaTarefaComponente}/>
          <Tab.Screen name="Lista Tarefas" component={TarefasExibirComponente}/>
        </Tab.Navigator>
      </NavigationContainer>
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