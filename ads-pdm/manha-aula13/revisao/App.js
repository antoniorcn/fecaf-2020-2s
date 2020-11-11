import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, Image, StyleSheet, Switch, Text, ToastAndroid, TouchableHighlight, View } from 'react-native';
import imgDog from './cachorrinho.jpg';


const Texto = (props)=> { 
  return (
    <View>
      <Text style={estilos.texto}>{props.titulo}</Text>
      <Text style={estilos.texto}>{props.subtitulo}</Text>
    </View>
  );
}

class Cachorrinho extends React.Component { 
  
  constructor(props) { 
    super(props);
    this.state = {
      like: true
     };
  }

  mudar() { 
    const copiaEstado = {...this.state};
    copiaEstado.like = ! copiaEstado.like;
    this.setState(
        copiaEstado
        // {
        //   ... this.state,
        //   like: ! this.state.like
        // }
    )
  }

  render() { 
    return (
      <View>
        <Image source={imgDog} style={{width: 100, height: 100}}/>
        <Switch value={this.state.like} thumbColor={this.props.cor} 
                      trackColor={{true: "yellow", false: "#AA4"}}
                      onValueChange={()=>{this.mudar();}}/>
      </View>
    );
  }
}

export default function App() {
  return (
    <View style={{flex:1,
        flexDirection: "column", 
        justifyContent: "space-evenly",
        alignItems: "center"}}>
      <TouchableHighlight underlayColor="#CCC" activeOpacity={false}
            onPress={() => {
            ToastAndroid.show("Apertado", ToastAndroid.LONG)}}>
        <Texto  titulo="Pets"
                subtitulo="Cachorrinhos Fofos"/>
      </TouchableHighlight>
      <Button title="Ok"  style={{alignSelf: "flex-start"}}></Button>
      <Texto  titulo="Sharpei"
              subtitulo="Cachorro da lingua azul"/>
      <Cachorrinho  cor="red"/>
      <Cachorrinho  cor="blue"/>
      {/* <Image source={imgDog} style={{width: 100, height: 100}}/> */}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: { 
    fontSize: 30,
    color: "yellow",
    backgroundColor: "#C77"
    
  }
});
