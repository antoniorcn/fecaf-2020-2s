import React from 'react';
import {View, Text} from 'react-native';

class Cabecalho extends React.Component { 

    constructor(props) { 
        super(props);
    }

    render() { 
        return (
            <View>
                <Text></Text>
                <Text>Professor: {this.props.professor}</Text>
                <Text>Na disciplina: {this.props.disciplina}</Text>
            </View>
        )
    }
}

export default Cabecalho;