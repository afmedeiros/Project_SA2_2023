import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/dataContext';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

import Menu from './Menu';
import MedicaoRoutes from './medicoes/MedicaoRoutes'
import SetorRoutes from './setors/SetorRoutes'
import PerfilRoutes from './perfil/PerfilRoutes';
import Relatorios from './Relatorios';
import CadastroFuncionario from './perfil/CadastroFuncionario';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const Routes = ({navigation}) => {
    const { state, dispatch } = useContext(Context)
    
  return (
    <Tab.Navigator screenOptions={{
        headerRight: () => (
            <Entypo 
                name= 'log-out'
                size={20}
                style={{ margin: 10 }}
                color= '#000'
                onPress={() => dispatch({type: 'logOut'})}
            />
            
        )
    }}>


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
        component={PerfilRoutes} 
        options={{
            tabBarIcon: () => (
                <Entypo name='user' size={30} />
            )
        }}
        
    />

    <Tab.Screen
        name='Medicoes'
        component={MedicaoRoutes} 
        options={{
            tabBarIcon: () => (
                <Entypo name='medium' size={30} />
            )
        }}
    />

    <Tab.Screen
        name='Setors'
        component={SetorRoutes} 
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

    </Tab.Navigator>
  )
};

const styles = StyleSheet.create({

});

export default Routes;