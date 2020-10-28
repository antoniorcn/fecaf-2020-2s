import React from 'react';
import {View, Text} from 'react-native';

class Jogo extends React.Component { 
    constructor(props) { 
        super(props);
    }

    render() { 
        return (
            <View>
                <Text>Titulo: {this.props.titulo}</Text>
                <Text>Idade Mínima: {this.props.idade} </Text>
                <Text>Data Lançamento: {this.props.lancamento}</Text>
                <Text>Tipo do Jogo: {this.props.tipo}</Text>
            </View>
        )
    }
}

// function Jogo( props ) { 
//     return (<View>
//                 <Text>Titulo: {props.titulo}</Text>
//                 <Text>Idade Mínima:</Text>
//                 <Text>Data Lançamento:</Text>
//                 <Text>Tipo do Jogo:</Text>
//             </View>);
// }


export default Jogo;