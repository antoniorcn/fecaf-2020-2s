import React from 'react';
import { Button, SafeAreaView, Text, TextInput, View } from 'react-native';

class AgendaContatos extends React.Component { 

  state = {
    nome: "",
    telefone: "",
    email: "",
    nascimento: ""
  }

  // mudarInputNome( texto ) { 
  //   // console.log("Texto modificado: ", texto);
  //   let novoEstado = {...this.state};
  //   novoEstado.nome = texto;
  //   // console.log(novoEstado);
  //   this.setState(novoEstado);
  // }

  // mudarInputTelefone( texto ) { 
  //   let novoEstado = {...this.state};
  //   novoEstado.telefone = texto;
  //   this.setState(novoEstado);
  // }

  // mudarInputEmail( texto ) { 
  //   let novoEstado = {...this.state};
  //   novoEstado.email = texto;
  //   this.setState(novoEstado);
  // }

  // mudarInputNascimento( texto ) { 
  //   let novoEstado = {...this.state};
  //   novoEstado.nascimento = texto;
  //   this.setState(novoEstado);
  // }

  mudarInputUnico( texto, nomeCampo ) { 
    let novoEstado = {...this.state};
    novoEstado[nomeCampo] = texto;
    this.setState(novoEstado);
  }

  render() { 
    return (
      <SafeAreaView>
        <View>
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
          <Button title="Gravar"/>
          <Text></Text>
          <Text>Nome: {this.state.nome}</Text>
          <Text>Telefone: {this.state.telefone}</Text>
          <Text>Email: {this.state.email}</Text>
          <Text>Data Nascimento: {this.state.nascimento}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default AgendaContatos;