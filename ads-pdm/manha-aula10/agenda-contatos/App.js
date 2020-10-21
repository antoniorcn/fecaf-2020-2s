import React from 'react';
import { Button, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import Contato from './Contato';

class AgendaContatos extends React.Component { 

  state = {
    nome: "",
    telefone: "",
    email: "",
    nascimento: "",

    listaContatos: [
      { 
        nome: "Antonio Carvalho",
        telefone: "(11) 2222-3333",
        email: "antonio@teste.com",
        nascimento: "03/10/2000"
      },
    ],
  }

  mudarInputUnico( texto, nomeCampo ) { 
    let novoEstado = {...this.state};
    novoEstado[nomeCampo] = texto;
    this.setState(novoEstado);
  }

  gravar() { 
    let novoContato = {
      nome: this.state.nome,
      telefone: this.state.telefone,
      email: this.state.email,
      nascimento: this.state.nascimento
    };

    let novoEstado = {...this.state};
    novoEstado.listaContatos.push( novoContato );
    this.setState(novoEstado);
  }

  render() { 
    let contatoExibir = [];

    for(let i = 0; i < this.state.listaContatos.length; i++) { 
      contatoExibir.push( 
        <Contato  key={i}
                  nome={this.state.listaContatos[i].nome}
                  telefone={this.state.listaContatos[i].telefone}/> 
      );
    }

    return (
      <SafeAreaView>
        <ScrollView>
          <Text></Text>
          <Text>Nome:</Text>
          <TextInput  value={this.state.nome} 
                      onChangeText={(txt)=>{this.mudarInputUnico(txt, "nome")}}/>
          <Text>Telefone:</Text>
          <TextInput  value={this.state.telefone}
                      onChangeText={(txt)=>{this.mudarInputUnico(txt, "telefone")}}/>
          <Text>Email:</Text>
          <TextInput  value={this.state.email}
                      onChangeText={(txt)=>{this.mudarInputUnico(txt, "email")}}/>
          <Text>Data Nascimento:</Text>
          <TextInput  value={this.state.nascimento}
                      onChangeText={(txt)=>{this.mudarInputUnico(txt, "nascimento")}}/>
          <Button title="Gravar" onPress={()=>{this.gravar();}}/>   
          {contatoExibir}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default AgendaContatos;