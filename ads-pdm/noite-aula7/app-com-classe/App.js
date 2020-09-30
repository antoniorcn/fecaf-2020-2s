import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';
import Cabecalho from './Disciplina';

class ComClasse extends Component { 
  constructor(props) { 
    super(props);
    this.state = {nome: "Antonio", disciplina: "PDM"};
  }

  render() { 
    var o1 = {nome: "João Silva", id: 3, salario: 2400.00};
    console.log("Dados do Objeto o1: ", o1);

    o1 = {...o1, nome:"Antonio"};
    console.log("Dados do Objeto o1 depois da mudança: ", o1);
    return (
      <View>
        <Cabecalho professor={this.state.nome} disciplina={this.state.disciplina}/>
        <Button title="Trocar Nome" onPress={() => {this.trocarNome();}}></Button>
      </View>
    )
  }

  trocarNome() { 
    this.setState({...this.state, nome: "João Silva", disciplina: "PROG1"});
  }

}

export default ComClasse;