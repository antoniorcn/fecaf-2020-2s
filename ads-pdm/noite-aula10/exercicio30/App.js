import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

class DadosContato extends React.Component { 
  state = {
      nome:"", 
      telefone: "",
      email: "",
      nascimento: ""
  }

  atualizaInput(texto, nomeCampo) { 
    let novoEstado = {...this.state};
    novoEstado[nomeCampo] = texto;
    this.setState(novoEstado);
  }

  // atualizaInputTelefone(texto) { 
  //   let novoEstado = {...this.state};
  //   novoEstado.telefone = texto;
  //   this.setState(novoEstado);
  // }

  gravar() { 
    let estadoNovo = {...this.state};
    estadoNovo.nome2 = estadoNovo.nome;
    estadoNovo.telefone2 = estadoNovo.telefone;
    estadoNovo.email2 = estadoNovo.email;
    estadoNovo.nascimento2 = estadoNovo.nascimento;
    this.setState(estadoNovo);
  }

  render() { 
    return ( 
      <View>
        <Text></Text>
        <Text>Nome:</Text>
        <TextInput  value={this.state.nome} 
                    onChangeText={(txt)=>this.atualizaInput(txt, "nome")}/>
        <Text>Telefone:</Text>
        <TextInput  value={this.state.telefone} 
                    onChangeText={(txt)=>this.atualizaInput(txt, "telefone")}/>
        <Text>Email:</Text>
        <TextInput  value={this.state.email}
                    onChangeText={(txt)=>this.atualizaInput(txt, "email")}/>
        <Text>Data Nascimento:</Text>
        <TextInput  value={this.state.nascimento}
                    onChangeText={(txt)=>this.atualizaInput(txt, "nascimento")}/>         
        <Button title="Gravar" onPress={()=>this.gravar()}/>     
        <Text></Text>   
        <Text>Nome: {this.state.nome2}</Text>    
        <Text>Telefone: {this.state.telefone2}</Text>    
        <Text>Email: {this.state.email2}</Text>    
        <Text>Data Nascimento: {this.state.nascimento2}</Text>       
      </View>
    )
  }
}

export default DadosContato;