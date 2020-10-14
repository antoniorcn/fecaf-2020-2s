import React from 'react';
import { Button, Text, View } from 'react-native';

class LojaVirtual extends React.Component { 

  state = {total: 0, 
            produto1Qtd: 0, produto2Qtd: 0, produto3Qtd: 0,
            produto1Titulo: "", produto2Titulo: "", produto3Titulo: "",
            produto1Valor: 0, produto2Valor: 0, produto3Valor: 0,
            cep: "00000-000"}

  render() { 
    return(
      <View>
        <Text></Text>
        <Text>Loja Virtual</Text>
        <Text></Text>
        <Text>Produto: {this.state.produto1Titulo}</Text>
        <Text>Quantidade: {this.state.produto1Qtd}</Text>
        <Text>Valor: {this.state.produto1Valor}</Text>
        <Text></Text>
        <Text>Produto: {this.state.produto2Titulo}</Text>
        <Text>Quantidade: {this.state.produto2Qtd}</Text>
        <Text>Valor: {this.state.produto2Valor}</Text>
        <Text></Text>
        <Text>Produto: {this.state.produto3Titulo}</Text>
        <Text>Quantidade: {this.state.produto3Qtd}</Text>
        <Text>Valor: {this.state.produto3Valor}</Text>
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
    var totalProd1 = novoState.produto1Qtd * novoState.produto1Valor;
    var totalProd2 = novoState.produto2Qtd * novoState.produto2Valor;
    var totalProd3 = novoState.produto3Qtd * novoState.produto3Valor;
    var frete = 14.0;
    novoState.total = totalProd1 + totalProd2 + totalProd3 + frete;
    this.setState(novoState);
  }

  visualizar() { 
    const novoState = {...this.state};
    novoState.produto1Titulo = "Arroz Camil";
    novoState.produto1Qtd = 5;
    novoState.produto1Valor = 17.0;

    novoState.produto2Titulo = "Feijão Carioca KiCaldo";
    novoState.produto2Qtd = 3;
    novoState.produto2Valor = 6.99;

    novoState.produto3Titulo = "Maminha Congelada Friboi";
    novoState.produto3Qtd = 2;
    novoState.produto3Valor = 27.50;

    novoState.cep = "06764-045";

    this.setState(novoState);
  }

}

export default LojaVirtual;
