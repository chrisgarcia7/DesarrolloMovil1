import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import EstudianteComponent from './EstudianteComponent';
import AsignaturaComponent from './AsignaturaComponent';
import Buttons from './Buttons';
import AsignaturasEstudiante from './AsignaturasEstudiante';


export default function Drawer() {
    const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName='Estudiantes'>
            <Drawer.Screen name='Estudiantes' component={Buttons}/>
            <Drawer.Screen name='Asignatura' component={AsignaturaComponent}/>
            <Drawer.Screen name='AsignaturasdeEstudiante' component={AsignaturasEstudiante}/>


        </Drawer.Navigator>
    </NavigationContainer>
  )
}