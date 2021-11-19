import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View,Button,TextInput} from 'react-native';

export class SearchScreen extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      texto: '',
      };
  }
  
  handlerTextpokemon(texto) {
    this.setState({ texto: texto });
  }
  render(){
    return(    
      <View style={styles.container}>
        <Text style={styles.titulo}>Buscador</Text>
        <Text style={styles.texto}>Para empezar la búsqueda solo tiene que ingresar el nombre de la especie o un número que sería la ubicación de ese Pokémon en la pokedex nacional.
           Por ejemplo, al ingresar 1 aparecerían los datos del Pokémon bulbasaur o también se podría ingresar bulbasaur y aparecerían los mismo datos.
        </Text>
        <TextInput style={styles.input} placeholder="Ingrese especie o número del pokemon" onChangeText={this.handlerTextpokemon.bind(this)}/>
        <Button
          style={styles.button}
          title="buscar" 
          onPress={() =>
            this.props.navigation.navigate("Detalles",{itemId:this.state.texto})
          }>
        </Button>
        <StatusBar style="auto" />
      </View>
    )
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
  button: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    padding:10,
    borderWidth: 2,
    marginTop:40,
  }, 
  texto:{
    padding:10,
    fontSize: 20,
  }, 
 });