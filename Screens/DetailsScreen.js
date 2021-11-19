import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View ,Image, ScrollView} from 'react-native';

const axios = require('../Axios/UrlAxios');
export class DetailsScreen extends Component{

  constructor(props) {
    super(props);
    this.state = { 
      pokemon: axios.getPokemon(this.props.route.params.itemId),
      };
  }
  render(){
    return( 
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.titulo}>{Capitalize(this.state.pokemon.especie)} N.°{this.state.pokemon.numero}</Text>
          <View style={styles.containerImage}>
            <Image 
            style={styles.imagen}
              source={{uri:this.state.pokemon.imagen_front}}
            />
            <Image 
              style={styles.imagen}
              source={{uri:this.state.pokemon.imagen_back}}
            />
          </View>
        
          <Text style={styles.subtitulo}>Tipo</Text>
          {this.state.pokemon.tipo.map((item,index)=>{
          return(
            <Text style={styles.item} key={index} >{index+1}:{Capitalize(item.type.name)}</Text>
          )})}
        
          <Text style={styles.subtitulo}>Movimientos</Text>
          {this.state.pokemon.movimientos.map((item,index)=>{
            return(
            <Text style={styles.item} key={index}>{index+1 }:{Capitalize(item.move.name)}</Text>
          )})}
            
          <Text style={styles.subtitulo}>Habilidades</Text>
          {this.state.pokemon.habilidades.map((item,index)=>{
          return(
            <Text style={styles.item} key={index}>{index+1}:{Capitalize(item.ability.name)}</Text>
          )})}
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    )
   }
}

function Capitalize(texto){
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }, 
  containerImage:{
    flex: 1, 
    flexDirection: 'row',
  },
  scrollView: {
    backgroundColor: '#ecf0f1',
    marginHorizontal: 40,
    borderWidth: 2,
    borderRadius: 20,
    paddingLeft:10,
  },
  titulo:{
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
  },
  subtitulo:{
    textAlign: 'center',
    fontSize: 25,
  },
  imagen: {
    width: 150,
    height: 150,
  },  
  item: {
    fontSize: 15,
    height: 25,
    textAlign: 'left',
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
});


   /*
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.titulo}>{Capitalize(pokemon.especie)} N.°{pokemon.numero}</Text>
          <View style={styles.containerImage}>
            <Image 
            style={styles.imagen}
              source={{uri:pokemon.imagen_front}}
            />
            <Image 
              style={styles.imagen}
              source={{uri:pokemon.imagen_back}}
            />
          </View>
        
          <Text style={styles.subtitulo}>Tipo</Text>
          {pokemon.tipo.map((item,index)=>{
          return(
            <Text style={styles.item} key={index} >{index+1}:{Capitalize(item.type.name)}</Text>
          )})}
        
          <Text style={styles.subtitulo}>Movimientos</Text>
          {pokemon.movimientos.map((item,index)=>{
            return(
            <Text style={styles.item} key={index}>{index+1 }:{Capitalize(item.move.name)}</Text>
          )})}
            
          <Text style={styles.subtitulo}>Habilidades</Text>
          {pokemon.habilidades.map((item,index)=>{
          return(
            <Text style={styles.item} key={index}>{index+1}:{Capitalize(item.ability.name)}</Text>
          )})}
        </ScrollView>
        <StatusBar style="auto" />
      </View>*/