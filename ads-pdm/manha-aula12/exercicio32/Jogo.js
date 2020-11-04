import React from 'react';
import {Text, View} from 'react-native';

class Jogo extends React.Component { 
    constructor(props) { 
        super(props);
    }

    render() { 
        return (
            <View>
              <Text>Jogo</Text>
              <Text>Titulo: {this.props.titulo}</Text>
              <Text>Idade Mínima: {this.props.idade}</Text>
              <Text>Data Lançamento: {this.props.lancamento}</Text>
              <Text>Tipo do Jogo: {this.props.tipo}</Text>
              <Text>---------------------</Text>
            </View>
        )
    }
}

export default Jogo;