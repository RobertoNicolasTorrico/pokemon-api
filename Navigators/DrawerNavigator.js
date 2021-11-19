import React, {Component} from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';


// Screens
import {HomeScreen} from "../Screens/HomeScreen";
import {SearchScreen} from "../Screens/SearchScreen";


const Menu=createDrawerNavigator();

export class DrawerNavigator extends Component {
    render(){
        return(
        <Menu.Navigator  initialRouteName="Home" >
            <Menu.Screen name="Home" component={HomeScreen} options={{title:"Inicio"}}/>
            <Menu.Screen name="Search" component={SearchScreen}options={{title:"Buscar pokemon"}}/>  
        </Menu.Navigator>
        )
    }
}

