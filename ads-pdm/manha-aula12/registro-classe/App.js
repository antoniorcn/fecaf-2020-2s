import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={estilos.viewPrincipal}>
      <View style={{flexDirection: "row"}}>
        <Text style={estilos.texto}>Nome</Text>
        <TextInput style={estilos.input}/>
      </View>
      <Text style={estilos.texto}>Dia/Mês</Text>
      <TextInput style={estilos.input}/>
      <Text style={estilos.texto}>Presente</Text>
      <TextInput style={estilos.input}/>
      <Text style={estilos.texto}>Atividade</Text>
      <TextInput style={estilos.input}/>
      <Text style={estilos.texto}>Nota</Text>
      <TextInput style={estilos.input}/>
      <View style={{flexDirection: "row", justifyContent:"space-evenly"}}>
        <Button title="Gravar"/>
        <Button title="Limpar"/>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  texto: { 
    // marginTop: 5, 
    marginLeft: 10,
    marginRight: 10,
    color: '#33F',
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    // textShadowColor: '#CCC',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  }, 
  input: {  borderColor: '#F99', 
            borderWidth: 2,
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
            // marginBottom: 15
          },
  viewPrincipal: { 
    flex: 1,
    flexDirection: "column",
    marginTop: 30,
    justifyContent: "space-evenly",
    alignItems: "stretch",
  }
}); 
