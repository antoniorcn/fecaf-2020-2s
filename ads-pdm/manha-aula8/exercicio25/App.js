import React from 'react';
import { Text, View, Button } from 'react-native';


class VideoGame { 
  marca = "";
  cor = "";
  modelo = "";
  ledEnergia = false;
  tamanho = 0;

  jogar() { 
    console.log("Jogando jogo no video game");
  }

  mostrarImage() { 
    console.log("Mostrando imagem do jogo");
  }

  resfriar() { 
    console.log("Refriando o video game");
  }

  ligar() { 
    this.ledEnergia = true;
    console.log("Video game ligado");
  }

  desligar() { 
    this.ledEnergia = false;
    console.log("Video game desligado");
  }
}


class Retangulo extends React.Component {

  state = {base: 40, altura: 5, area: 0};

  render() { 

    var sega = new VideoGame();
    var nintendo = new VideoGame();
    var xbox = new VideoGame();

    sega.marca = "SEGA";
    sega.modelo = "MEGA DRIVE";

    nintendo.marca = "NINTENDO";
    nintendo.modelo = "WII";

    xbox.marca = "MICROSOFT";
    xbox.ligar();


    return (
      <View>
        <Text></Text>
        <Text>Calcular área do retangulo</Text>
        <Text>Base: {this.state.base}</Text>
        <Text>Altura: {this.state.altura}</Text>
        <Text>Area: {this.state.area}</Text>
        <Button title="Calcular"
                onPress={()=>this.calcular()}></Button>
      </View>
    );
  }

  calcular() { 
    const estado = {...this.state};
    estado.area = estado.base * estado.altura;
    this.setState(estado);
    // this.setState({...this.state, 
    //   area: this.state.altura * this.state.base});
  }
}

export default Retangulo;

