import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/dataContext';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

import Menu from './Menu';
import Perfil from './Perfil';
import Medicoes from './Medicoes'
import MedirLocalExistente from './MedirLocalExistente';
import Setors from './Setors';
import Relatorios from './Relatorios';
import ValidateToken from './ValidateToken';

const Tab = createBottomTabNavigator();

const Routes = ({navigation}) => {
    const { state, dispatch } = useContext(Context)

  return (
    <Tab.Navigator>

    <Tab.Screen
        name='Menu'
        component={Menu} 
        options={{
            tabBarIcon: () => (
                <Entypo name='menu' size={30} />
            )
        }}
    />

    <Tab.Screen
        name='Perfil'
        component={Perfil} 
        options={{
            tabBarIcon: () => (
                <Entypo name='user' size={30} />
            )
        }}
        
    />

    <Tab.Screen
        name='Medicoes'
        component={Medicoes} 
        options={{
            tabBarIcon: () => (
                <Entypo name='medium' size={30} />
            )
        }}
    />

    <Tab.Screen
        name='Setors'
        component={Setors} 
        options={{
            tabBarIcon: () => (
                <Entypo name='briefcase' size={30} />
            )
        }}
    />

    <Tab.Screen
        name='Relatorios'
        component={Relatorios} 
        options={{
            tabBarIcon: () => (
                <Entypo name='clipboard' size={30} />
            )
        }}
    />

    <Tab.Screen
        name='Sair'
        component={ValidateToken} 
        options={{
            tabBarIcon: () => (
                <Entypo 
                name= 'log-out'
                size={20}
                style={{ margin: 10 }}
                color= '#000'
                onPress={() => dispatch({type: 'logOut'})}
            />
            )
        }}
    />

    </Tab.Navigator>
  )
};

const styles = StyleSheet.create({

});

export default Routes;