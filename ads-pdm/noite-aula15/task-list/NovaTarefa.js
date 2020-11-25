import React from 'react';
import {Button, View, Text, TextInput, Switch} from 'react-native';

class NovaTarefa extends React.Component {
    state = {
        titulo: "",
        data: "",
        check: false,
    }

    constructor(props) { 
        super(props);
    }
    
    atualizarInput( text, campo ) {
         const novoEstado = {...this.state};
         novoEstado[campo] = text;
         this.setState(novoEstado);
    }

    render() { 
        return (
            <View>
                <Text>Titulo da Tarefa</Text>
                <TextInput value={this.state.titulo}
                            onChangeText={(txt)=>{this.atualizarInput(txt, "titulo")}}/>
                <Text>Data Conclusão</Text>
                <TextInput value={this.state.data}
                            onChangeText={(txt)=>{this.atualizarInput(txt, "data")}}/>
                <Text>Concluído</Text>
                <Switch value={this.state.check}
                        onValueChange={(valor)=>{this.atualizarInput(valor, "check")}}/>
                <Button title="Gravar" 
                        onPress={()=>{this.props.adicionarTarefa({...this.state})}}/>
            </View>
        );
    }
}

export default NovaTarefa;