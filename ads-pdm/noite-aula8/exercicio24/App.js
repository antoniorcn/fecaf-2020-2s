import React from 'react';
import { Text, View, Button } from 'react-native';


class Cadeira { 
   quantidadePernas = 0;
   altura = 0;
   largura = 0;
   cor = "preta";
   material = "madeira";

   reclinar() { 
     console.log("Cadeira reclinada");
   }

   levantar() { 
     console.log("Cadeira Levantada");
   }

   sentar() { 
    console.log("Há alguem sentado na cadeira");  
   }
}

class Ventilador { 
    potencia = "60w";
    velocidade = "100 rpm";
    marca = "";
    modelo = "";
    pas = 0;
    vontagem = 110;

    ligar() { 
      console.log("Ventilando o ambiente");
    }

    desligar() { 
      console.log("Ventilador desligado");
    }

    mudarVelocidade() { 
      console.log("Velocidade alterada");
    }

    mudarVoltagem() { 
      console.log("Trocado para 220v");
    }
}


class Retangulo extends React.Component { 
  state = {base: 30, altura: 4, resultado: 0};

  render()  {
    return (
      <View>
        <Text></Text>
        <Text>Base: {this.state.base}</Text>
        <Text>Altura: {this.state.altura}</Text>
        <Text>Resultado: {this.state.resultado}</Text>
        <Button onPress={() => {this.atualizar()}} title="Calcular Area"/>
      </View>
    )
  }

  atualizar() { 

    var cadeira1 = new Cadeira();
    cadeira1.material = "plastico";
    cadeira1.altura = 50;

    var cadeira2 = new Cadeira();
    cadeira2.material = "aluminio";
    cadeira2.altura = 65;

    var ventQuarto = new Ventilador();
    ventQuarto.marca = "Britania";
    ventQuarto.modelo = "BRT1000";
    ventQuarto.ligar();

    var ventSala = new Ventilador();
    ventSala.marca = "Philco";
    ventSala.modelo = "PH2000";
    ventSala.mudarVoltagem();
    ventSala.mudarVelocidade();
    ventSala.ligar();

    const estado = {...this.state};
    estado.resultado = estado.base * estado.altura;
    this.setState(estado);
  }
}


export default Retangulo;