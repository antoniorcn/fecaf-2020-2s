import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tarefa from './Tarefa';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tarefa/>
        <Tarefa/>
        <Tarefa/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;