import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/dataContext';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

import Menu from './Menu';
import Perfil from './Perfil';
import Medicoes from './Medicoes'
import NewMedicao from './NewMedicao';
import MedirLocalExistente from './MedirLocalExistente';
import NewSetor from './NewSetor';
import Setors from './Setors';
import Relatorios from './Relatorios';

const Tab = createBottomTabNavigator();

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
            tabBarIcon: () => {
                <Entypo name='menu' size={10} />
            }
        }}
    />

    <Tab.Screen
        name='Perfil'
        component={Perfil} 
        options={{
            tabBarIcon: () => {
                <Entypo name='user' size={10} />
            }
        }}
        
    />

    <Tab.Screen
        name='Medicoes'
        component={Medicoes} 
        options={{
            tabBarIcon: () => {
                <Entypo name='medium' size={10} />
            }
        }}
    />

    <Tab.Screen
        name='NewMedicao'
        component={NewMedicao} 
        options={{
            tabBarIcon: () => {
                <Entypo name='medium-with-circle' size={10} />
            }
        }}
    />

    <Tab.Screen
        name='LocalExist'
        component={MedirLocalExistente} 
        options={{
            tabBarIcon: () => {
                <Entypo name='location-pin' size={10} />
            }
        }}
    />

    <Tab.Screen
        name='NewSetor'
        component={NewSetor} 
        options={{
            tabBarIcon: () => {
                <Entypo name='circle-with-plus' size={10} />
            }
        }}
    />

    <Tab.Screen
        name='Setors'
        component={Setors} 
        options={{
            tabBarIcon: () => {
                <Entypo name='briefcase' size={10} />
            }
        }}
    />

    <Tab.Screen
        name='Relatorios'
        component={Relatorios} 
        options={{
            tabBarIcon: () => {
                <Entypo name='clipboard' size={10} />
            }
        }}
    />

    </Tab.Navigator>
  )
};

const styles = StyleSheet.create({

});

export default Routes;