import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import Tarefa from './Tarefa';
import imgTaskList from './assets/tasklist.png';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NovaTarefa from './NovaTarefa';

const Tab = createBottomTabNavigator();

class App extends React.Component {
  state = {
    listaTarefas : [
      {titulo: "Tarefa 1", data: "qua, 18 de novembro", concluido: true},
      {titulo: "Tarefa 2", data: "qua, 19 de novembro", concluido: false},
      {titulo: "Tarefa 3", data: "qua, 20 de novembro", concluido: true},
      {titulo: "Tarefa 4", data: "qua, 21 de novembro", concluido: false},
    ]
  }

  gravar(tarefa) { 
    // console.log("Botão Gravar apertado");
    // console.log("Tarefa: ", tarefa);
    const novoEstado = {...this.state};
    novoEstado.listaTarefas.push( tarefa );
    this.setState(novoEstado);
  }

  trocarCheck(id) { 
    const novoEstado = {...this.state};
    novoEstado.listaTarefas[id].concluido = !novoEstado.listaTarefas[id].concluido;
    this.setState(novoEstado);
  }

  ListaTarefas = () => { 
    const exibirTarefas = [];
    for (let i = 0; i < this.state.listaTarefas.length; i++) { 
      const tarefa = this.state.listaTarefas[i];
      exibirTarefas.push(
        <Tarefa id={i}
                key={i}
                titulo={tarefa.titulo} 
                data={tarefa.data}
                concluido={tarefa.concluido}
                trocarCheck={(index)=>{this.trocarCheck(index)}}/>
      );
    }

    return (
      <ScrollView>
        <View style={styles.container}>
          {exibirTarefas}
        </View>
      </ScrollView>
    );
  }

  Formulario = () => { 
    return (
      <NovaTarefa onClick={(obj)=>{this.gravar(obj)}}/>
    );
  }

  render() {
    return (
      <NavigationContainer>
        <View style={styles.principal}>
          <ImageBackground  style={styles.image}
                  source={imgTaskList}>
            <Text style={styles.titulo}>Hoje</Text>
            <Text style={styles.data}>qua, 18 de Novembro</Text>
          </ImageBackground>
        </View>
        <Tab.Navigator>
          <Tab.Screen name="Nova Tarefa" 
                component={()=>{return this.Formulario()}}/>
          <Tab.Screen name="Lista" 
                component={()=>{return this.ListaTarefas()}}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  titulo: { 
    textAlign: "center",
    backgroundColor: "#8888",
    color: "white",
    marginLeft: 20,
    marginRight: 20,
    fontSize: 36,
    marginBottom: 30
  },
  data: {
    textAlign: "center",
    color: "white",
    backgroundColor: "#8888",
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18,
  },
  principal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    width: "100%",
  },
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
});

export default App;