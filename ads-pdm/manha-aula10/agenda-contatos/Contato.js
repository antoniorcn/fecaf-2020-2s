import React from 'react';
import {View, Text} from 'react-native';

function Contato( props ) { 
    return (
        <View>
            <Text></Text>    
            <Text>Nome: {props.nome}</Text>
            <Text>Telefone: {props.telefone}</Text>
            <Text>Email: </Text>
            <Text>Nascimento: </Text>
        </View>
    );
}

export default Contato;