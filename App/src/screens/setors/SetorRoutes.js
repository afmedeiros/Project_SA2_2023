import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Setors from './Setors';
import NovoSetor from './NovoSetor'

const Stack = createNativeStackNavigator();

const SetorRoutes = ({ navigation }) => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="setors" component={Setors} />
                <Stack.Screen name="NovoSetor" component={NovoSetor} />
            </Stack.Navigator>
    )
}

export default SetorRoutes;