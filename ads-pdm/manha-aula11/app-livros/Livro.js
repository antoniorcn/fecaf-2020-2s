import React from 'react';
import {View, Text} from 'react-native';

function Livro(props) { 
    return(
        <View>
            <Text>-------------</Text>
            <Text>Nome do Livro: {props.titulo}</Text>
            <Text>Autor: {props.autor}</Text>
            <Text>Ano: {props.ano}</Text>
        </View>
    );
}

export default Livro;