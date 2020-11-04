import React from 'react';
import {Text, View, Switch} from 'react-native'
class Aluno extends React.Component { 
    constructor(props) { 
        super(props);
    }
    render() { 
        return (
            <View style={{flex: 1, flexDirection: "column" }}>
                <Text></Text>
                <Text>--------------------</Text>
                <Text>Nome: {this.props.nome}</Text>
                <Text>Dia/Mes: {this.props.data}</Text>
                <View   style={{    flexDirection: "row", 
                                    justifyContent:"space-between",
                                    alignItems: "center"}}>
                    <Text>Presente: </Text>
                    <Switch value={this.props.pres}></Switch>
                </View>
                <Text>Atividade: {this.props.atividade}</Text>
                <Text>Nota: {this.props.nota}</Text>
            </View>
        );
    }
}
export default Aluno;