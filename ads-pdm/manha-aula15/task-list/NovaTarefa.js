import React from 'react';
import {Button, View, Switch, Text, TextInput} from 'react-native';

class NovaTarefa extends React.Component { 
    constructor(props) { 
        super(props);
    }

    state = { 
        titulo: "",
        data: "",
        concluido: false
    }

    mudarInput(valor, campo) { 
        const novoEstado = {...this.state};
        novoEstado[campo] = valor;
        this.setState(novoEstado);
    }


    render() { 
        return (
            <View>
                <Text>Titulo</Text>
                <TextInput value={this.state.titulo}
                    onChangeText={(txt)=>{this.mudarInput(txt, "titulo")}}/>
                <Text>Data</Text>
                <TextInput value={this.state.data}
                    onChangeText={(txt)=>{this.mudarInput(txt, "data")}}/>
                <Text>Concluido</Text>
                <Switch value={this.state.concluido}
                    onValueChange={(valor)=>{this.mudarInput(valor, "concluido")}}/>
                <Button onPress={() => {
                            this.props.onClick({...this.state})
                        }} 
                        title="Gravar"/>
            </View>
        )
    }
}

export default NovaTarefa;