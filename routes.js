import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Cadastro from './src/screens/Cadastro';
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Cadastro' component={Cadastro}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}