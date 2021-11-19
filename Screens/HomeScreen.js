import React, {Component} from 'react';
import {View, Text} from "react-native";
import {StyleSheet} from "react-native";
import {StatusBar} from 'expo-status-bar';

export class HomeScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Bienvenido a la Pokemon-Api </Text>
        <Text style={styles.texto}>En esta aplicación se podrá saber que
           movimientos, habilidades, tipo, nombre de la especie y en que número de pokedex nacional se encuentra el pokemon que desee buscar.</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({ 
  container: {
    flex: 0,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }, 
  titulo:{
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
  }, 
  texto:{
    padding:10,
    fontSize: 30,
  }, 
});