import React from 'react';
import { Button, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import Contato from './Contato';

class DadosContato extends React.Component { 
  state = {
      contatoAtual: {
        nome:"", 
        telefone: "",
        email: "",
        nascimento: ""
      },
      listaContatos: [
      ]
  }

  atualizaInput(texto, nomeCampo) { 
    let novoEstado = {...this.state};
    novoEstado.contatoAtual[nomeCampo] = texto;
    this.setState(novoEstado);
  }

  gravar() { 
    let estadoNovo = {...this.state};
    estadoNovo.listaContatos.push({...estadoNovo.contatoAtual});
    this.setState(estadoNovo);
  }

  render() { 

    let contatosExibir = [];

    for(let i = 0; i < this.state.listaContatos.length; i++) {
      contatosExibir.push(
        <Contato  key={"k-" + i}
                  nome={this.state.listaContatos[i].nome} 
                  telefone={this.state.listaContatos[i].telefone}
                  email={this.state.listaContatos[i].email}
                  nascimento={this.state.listaContatos[i].nascimento}/>
      );
    }

    return ( 
      <SafeAreaView>
        <View>
          <Text>Nome:</Text>
          <TextInput  value={this.state.contatoAtual.nome} 
                      onChangeText={(txt)=>this.atualizaInput(txt, "nome")}/>
          <Text>Telefone:</Text>
          <TextInput  value={this.state.contatoAtual.telefone} 
                      onChangeText={(txt)=>this.atualizaInput(txt, "telefone")}/>
          <Text>Email:</Text>
          <TextInput  value={this.state.contatoAtual.email}
                      onChangeText={(txt)=>this.atualizaInput(txt, "email")}/>
          <Text>Data Nascimento:</Text>
          <TextInput  value={this.state.contatoAtual.nascimento}
                      onChangeText={(txt)=>this.atualizaInput(txt, "nascimento")}/>         
          <Button title="Gravar" onPress={()=>this.gravar()}/>  
        </View>
        <ScrollView>
          {contatosExibir}   
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default DadosContato;