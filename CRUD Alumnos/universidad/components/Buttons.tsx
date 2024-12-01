import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './Drawer';
import PerfilEstudiante from './PerfilEstudiante';
import EstudianteComponent from './EstudianteComponent';
import { Estudiante } from '../modelo/Estudiante';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
    Perfil: { estudiante: Estudiante };
    Estudiantes: undefined;
  };

export default function Buttons() {
    const Stack = createStackNavigator<RootStackParamList>();
  return (

        <Stack.Navigator initialRouteName="Estudiantes">
            <Stack.Screen name='Estudiantes' options={{ headerShown: false }} component={EstudianteComponent} />
            <Stack.Screen name='Perfil' options={{ headerShown: false }} component={PerfilEstudiante} />
        </Stack.Navigator>

        

        
    )
}