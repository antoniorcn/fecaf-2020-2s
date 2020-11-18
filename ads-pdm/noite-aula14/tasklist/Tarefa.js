import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Circle from './resources/Circle.png';
import Check from './resources/Check.png';


class Tarefa extends React.Component { 
    constructor(props) { 
        super(props)
    }
    render() { 
        let img = Circle;
        let tituloEstilo = estilos.titulo;
        if (this.props.check) { 
            img = Check;
            tituloEstilo = estilos.tituloCortado;
        }

        
        return (
        <View style={estilos.tarefa}>
            <Image style={estilos.check}
            source={img}></Image>
            <View style={estilos.anotacoes}>
                <Text style={tituloEstilo}>{this.props.titulo}</Text>
                <Text style={estilos.subtitulo}>{this.props.data}</Text>
            </View>
        </View>
        );
    }
}

const estilos = StyleSheet.create({
    tarefa : { 
        flexDirection: "row",
        justifyContent: "flex-start",
        borderBottomColor: "gray",
        borderBottomWidth: 2,
        marginBottom: 20,
        marginLeft: 15,
        marginRight: 15,
    },
    check: { 
        width: 30,
        height: 30,
        margin: 15,
    },
    anotacoes: { 
        marginLeft: 20,
        marginBottom: 10,
        marginTop: 5,
        width: "80%"
    },
    titulo: { 
        color: "gray",
    },
    tituloCortado: {
        color: "gray",
        textDecorationLine: "line-through"
    },
    subtitulo: {
        color: "gray"
    }
});

export default Tarefa;