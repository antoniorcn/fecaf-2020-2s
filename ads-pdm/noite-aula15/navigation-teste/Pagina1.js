import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default () =>  { 
    return (
        <View>
            <Text style={estilos.text}>Pagina 1</Text>
            <Text style={estilos.text}>Detalhes da pagina 1</Text>
        </View>
    );
}

const estilos = StyleSheet.create({ 
    text: { 
        color: "blue"
    }
});