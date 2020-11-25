import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pagina1 from './Pagina1';
import Pagina2 from './Pagina2';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Text></Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Tab.Navigator>
          <Tab.Screen name="Pagina 1" component={Pagina1} />
          <Tab.Screen name="Pagina 2" component={Pagina2} />
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
