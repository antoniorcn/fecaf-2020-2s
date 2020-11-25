import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default () =>  { 
    return (
        <View>
            <Text style={estilos.text}>Pagina 2</Text>
            <Text style={estilos.text}>Detalhes da pagina 2</Text>
        </View>
    );
}

const estilos = StyleSheet.create({ 
    text: { 
        color: "red"
    }
});