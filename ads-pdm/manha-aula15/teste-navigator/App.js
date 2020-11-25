import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Conteudo1 = () => {
  return (
    <View>
      <Text style={{color: "red"}}>Conteudo 1</Text>
      <Text>Este é o conteudo do componente 1</Text>
    </View>
  );
}

const Conteudo2 = () => {
  return (
    <View>
      <Text style={{color: "blue"}}>Conteudo 2</Text>
      <Text>Este é o conteudo do componente 2</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Aba 1" component={Conteudo1}/>
        <Tab.Screen name="Aba 2" component={Conteudo2}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
