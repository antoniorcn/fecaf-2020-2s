import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Tarefa from './Tarefa';
import imgTaskList from './assets/tasklist.png';

class App extends React.Component {
  render() {
    return (
      <View style={styles.principal}>
        <ImageBackground  style={styles.image}
                source={imgTaskList}>
          <Text style={styles.titulo}>Hoje</Text>
          <Text style={styles.data}>qua, 18 de Novembro</Text>
        </ImageBackground>
        <View style={styles.container}>
          <Tarefa titulo="Tarefa 1"
                  data="qua, 18 de novembro"
                  concluido={true}/>
          <Tarefa titulo="Tarefa 2"
                  data="qui, 19 de novembro"
                  concluido={true}/>
          <Tarefa titulo="Tarefa 3"
                  data="sex, 20 de novembro"
                  concluido={false}/>
        </View>
      </View>
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