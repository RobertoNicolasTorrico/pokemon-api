
import React, {Component} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Navigators
import {DrawerNavigator} from "./DrawerNavigator";

// Screens
import {SearchScreen} from "../Screens/SearchScreen";
import {DetailsScreen} from "../Screens/DetailsScreen";


const Stack=createNativeStackNavigator();

export class StackNavigator extends Component {
    render(){
        return(
        <Stack.Navigator initialRouteName="DrawerNavigator"
        > 
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator}
                options={{headerShown: false,}}
            />
            <Stack.Screen name="Buscar" component={SearchScreen}/>
            <Stack.Screen name="Detalles" component={DetailsScreen}
                options={{title:"Detalles"}}
            />
        </Stack.Navigator>
        );
    }
}