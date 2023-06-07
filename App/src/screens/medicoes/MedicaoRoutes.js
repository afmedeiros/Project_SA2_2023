import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Medicoes from './Medicoes'
import NovaMedicao from './NovaMedicao';
import MedirLocalExistente from './MedirLocalExistente';

const Stack = createNativeStackNavigator();

const MedicaoRoutes = ({ navigation }) => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Medicoes" component={Medicoes} />
                <Stack.Screen name="NovaMedicao" component={NovaMedicao} />
                <Stack.Screen name="MedirLocalExistente" component={MedirLocalExistente} />

            </Stack.Navigator>
    )
}

export default MedicaoRoutes;