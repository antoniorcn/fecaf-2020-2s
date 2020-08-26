import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Exercicio1() {
  return (
    <View>
	<Text></Text>
	<Text>Faculdade FECAF</Text>
	<Text>Analise e Desenvolvimento de Sistemas</Text>
	<Text>RA - Nome</Text>
	<Text>Meu primero programa React - Native</Text>
    </View>
  );
}

function Exercicio2() {
  return (
    <View>
	<Text></Text>
	<Text>Aprendi a instalar o Expo e criar minha primeira app no React tanto pelo Expo da web quanto pela maquina</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="EX1" component={Exercicio1} />
        <Tab.Screen name="EX2" component={Exercicio2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}