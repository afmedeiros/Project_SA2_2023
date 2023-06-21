import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Setors from './Setores';
import NovoSetor from './NovoSetor';
import SalasDoSetor from './SalasDoSetor';
import NovaSala from './NovaSala';
import MedicoesSala from './MedicoesSala';

const Stack = createNativeStackNavigator();

const SetorRoutes = ({ navigation }) => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Setors" component={Setors} />
                <Stack.Screen name="NovoSetor" component={NovoSetor} />
                <Stack.Screen name="SalasDoSetor" component={SalasDoSetor} />
                <Stack.Screen name="NovaSala" component={NovaSala} />
                <Stack.Screen name="MedicoesSala" component={MedicoesSala} />
            </Stack.Navigator>
    )
}

export default SetorRoutes;