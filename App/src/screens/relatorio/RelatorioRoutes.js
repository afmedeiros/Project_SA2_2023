import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Relatorios from './Relatorios';
import NovoRelatorio from './NovoRelatorio';

const Stack = createNativeStackNavigator();

const RelatorioRoutes = ({ navigation }) => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Relatórios" component={Relatorios} />
                <Stack.Screen name="NovoRelatorio" component={NovoRelatorio} />

            </Stack.Navigator>
    )
}

export default RelatorioRoutes;