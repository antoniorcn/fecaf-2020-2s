import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ImgCheck from './assets/Check.png';

class Tarefa extends React.Component {
    render() { 
        return (
            <View style={estilos.tarefa}>
                <Image  source={ImgCheck} 
                        style={estilos.imageCheck}/>
                <View style={estilos.textos}>
                    <Text style={estilos.titulo}>Titulo</Text>
                    <Text style={estilos.data}>Data</Text>
                </View>
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    titulo: {
        color: "gray"
    },
    data: {
        color: "gray"
    },
    textos: {
        flex: 5
    },
    tarefa: {
        flexDirection: "row",
        borderBottomColor: "gray",
        borderBottomWidth: 2,
        marginBottom: 20,
        paddingBottom: 20,

    },
    imageCheck: { 
        width: 30, 
        height: 30,     
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20  
    }
});

export default Tarefa;