import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Perfil from './Perfil'
import CadastroFuncionario from './CadastroFuncionario';
import UpdateUser from './UpdateUser';

const Stack = createNativeStackNavigator();

const PerfilRoutes = ({ navigation }) => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Perfil" component={Perfil} />
                <Stack.Screen name="CadastroFuncionario" component={CadastroFuncionario} />
                <Stack.Screen name="UpdateUser" component={UpdateUser} />
            </Stack.Navigator>
    )
}

export default PerfilRoutes;