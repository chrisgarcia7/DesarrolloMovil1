import { View, Text } from 'react-native'
import React from 'react'
import UsuarioProvider from '../../Context/UsuarioProvider'
import FormularioContacto from '../../Components/FormularioContacto'
import ThemeLocalProvider from '../../Context/ThemeLocalProvider'

export default function Usuario() {
  return (
    <View>
      <ThemeLocalProvider>
        <UsuarioProvider>
          <FormularioContacto></FormularioContacto>
        </UsuarioProvider>

      </ThemeLocalProvider>

    </View>
  )
}