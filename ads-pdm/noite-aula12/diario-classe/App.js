import React from 'react';
import {Button, Switch, Text, TextInput, View} from 'react-native';
import Aluno from './Aluno';
class DiarioDeClasse extends React.Component { 
  state = {
    alunoAtual: {
        nome: "",
        data: "",
        presente: false,
        atividade: "",
        nota: 0.0},
    lista: [
      {
        nome: "",
        data: "",
        presente: true,
        atividade: "",
        nota: 0.0
      },

      {
        nome: "",
        data: "",
        presente: true,
        atividade: "",
        nota: 0.0
      },

      {
        nome: "",
        data: "",
        presente: false,
        atividade: "",
        nota: 0.0
      }
    ]
  } 

  render() { 
    let listaExibir = []; 
    for (let i = 0; i < this.state.lista.length; i++) { 
      let aluno = this.state.lista[i];
      listaExibir.push(
        <Aluno  key={i}
                nome={aluno.nome} 
                data={aluno.data} 
                pres={aluno.presente}
                atividade={aluno.atividade}
                nota={aluno.nota} />
      )
    }    
    return (
      <View style={{flex: 1, flexDirection: "column"}}>
        <View style={{flex: 1, flexDirection: "column"}}>
          <Text>Nome: </Text>
          <TextInput/>
          <Text>Dia/Mês:</Text>
          <TextInput/>
          <View style={{flex: 1, flexDirection: "row", justifyContent:"space-between"}}>
            <Text>Presente:</Text>
            <Switch/>
          </View>
          <Text>Atividade:</Text>
          <TextInput multiline={true} numberOfLines={3} />
          <Text>Nota:</Text>
          <TextInput/>
          <View style={{flex: 1, flexDirection: "row", justifyContent:"space-evenly"}}>
            <Button title="Gravar"/>
            <Button title="Apagar"/>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: "column"}}>
          {listaExibir}
        </View>
      </View>
    )
  }

}


export default DiarioDeClasse;
