import React from 'react';
import {View, Text} from 'react-native';

function Contato( props ) { 
    return(
        <View>
            <Text></Text>   
            <Text>Nome: {props.nome}</Text>    
            <Text>Telefone: {props.telefone}</Text>    
            <Text>Email: {props.email}</Text>    
            <Text>Data Nascimento: {props.nascimento}</Text>   
        </View>
    );
}

export default Contato;
