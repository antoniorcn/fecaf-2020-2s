import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ImgCheck from './assets/Check.png';
import ImgCircle from './assets/Circle.png';

class Tarefa extends React.Component {
    constructor(props) { 
        super(props);
    }

    render() { 
        let imgConcluido = ImgCircle;
        let estiloTitulo = estilos.titulo;
        if (this.props.concluido) { 
            imgConcluido = ImgCheck;
            estiloTitulo = estilos.tituloRiscado;
        }
        return (
            <View style={estilos.tarefa}>
                <Image  source={imgConcluido} 
                        style={estilos.imageCheck}/>
                <View style={estilos.textos}>
                    <Text style={estiloTitulo}>
                        {this.props.titulo}</Text>
                    <Text style={estilos.data}>
                        {this.props.data}</Text>
                </View>
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    titulo: {
        color: "gray",
    },
    tituloRiscado: {
        color: "gray",
        textDecorationLine: "line-through"
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