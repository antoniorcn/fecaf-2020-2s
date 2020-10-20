import React from 'react';
import { Button, Text, View } from 'react-native';

class LojaVirtual extends React.Component { 

  state = { total: 0, 
            produtos: [ {titulo: "", qtd: 0, valor: 0},
                        {titulo: "", qtd: 0, valor: 0},
                        {titulo: "", qtd: 0, valor: 0} ],
            cep: "00000-000"}

  exibeProduto( indice ) { 
    return (
      <View>
        <Text></Text>
        <Text>Produto: {this.state.produtos[indice].titulo}</Text>
        <Text>Quantidade: {this.state.produtos[indice].qtd}</Text>
        <Text>Valor: {this.state.produtos[indice].valor}</Text>
      </View>
    )
  }

  render() { 
    return(
      <View>
        <Text></Text>
        <Text>Loja Virtual</Text>
        {this.exibeProduto(0)}
        {this.exibeProduto(1)}
        {this.exibeProduto(2)}
        <Text></Text>
        <Text>CEP: {this.state.cep}</Text>
        <Button title="Visualizar" 
                onPress={() => {this.visualizar()}}></Button>
        <Button title="Calcular"
                onPress={()=>{this.calcular()}}></Button>
        <Text>Valor Total do Pedido: {this.state.total}</Text>
      </View>
    )
  }

  calcular() { 
    const novoState = {...this.state};
    var totalProd1 = novoState.produtos[0].qtd * novoState.produtos[0].valor;
    var totalProd2 = novoState.produtos[1].qtd * novoState.produtos[1].valor;
    var totalProd3 = novoState.produtos[2].qtd * novoState.produtos[2].valor;
    var frete = 14.0;
    novoState.total = totalProd1 + totalProd2 + totalProd3 + frete;
    this.setState(novoState);
  }

  visualizar() { 
    const novoState = {...this.state};
    novoState.produtos[0].titulo = "Arroz Camil";
    novoState.produtos[0].qtd = 5;
    novoState.produtos[0].valor = 17.0;

    novoState.produtos[1].titulo = "Feijão Carioca KiCaldo";
    novoState.produtos[1].qtd = 3;
    novoState.produtos[1].valor = 6.99;

    novoState.produtos[2].titulo = "Maminha Congelada Friboi";
    novoState.produtos[2].qtd = 2;
    novoState.produtos[2].valor = 27.50;

    novoState.cep = "06764-045";

    this.setState(novoState);
  }

}

export default LojaVirtual;
