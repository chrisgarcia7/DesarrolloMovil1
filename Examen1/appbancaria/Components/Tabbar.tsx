import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Inicio from '../Page/Inicio/Inicio';
import Transferencia from '../Page/Transferencia/Transferencia';
import Historico from '../Page/Historico/Historico';
import { NavigationContainer } from '@react-navigation/native';
import Provider from '../Context/Provider';

export default function Tabbar() {

  const tab = createBottomTabNavigator();
  return (

      <NavigationContainer>
        <tab.Navigator initialRouteName='Inicio'>
          <tab.Screen name="Inicio" component={Inicio} />
          <tab.Screen name="Transferencia" component={Transferencia} />
          <tab.Screen name="Historico" component={Historico} />
        </tab.Navigator>

      </NavigationContainer>




  )
}