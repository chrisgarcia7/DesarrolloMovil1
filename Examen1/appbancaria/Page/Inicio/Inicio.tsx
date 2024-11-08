import { View, Text } from 'react-native'
import React from 'react'
import Provider from '../../Context/Provider'
import PaginaInicio from '../../Components/PaginaInicio'

export default function Inicio() {
  return (
    <Provider>
      <PaginaInicio></PaginaInicio>
    </Provider>
  )
}