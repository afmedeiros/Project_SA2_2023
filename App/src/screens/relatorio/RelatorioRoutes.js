import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Relatorio from './Relatorios';
import NovoRelatorio from './NovoRelatorio';

const Stack = createNativeStackNavigator();

const RelatorioRoutes = ({ navigation }) => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Relatorios" component={Relatorio} />
                <Stack.Screen name="NovoRelatorio" component={NovoRelatorio} />

            </Stack.Navigator>
    )
}

export default RelatorioRoutes;