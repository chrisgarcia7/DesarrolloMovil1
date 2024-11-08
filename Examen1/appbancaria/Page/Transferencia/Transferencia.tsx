import { View, Text } from 'react-native'
import React from 'react'
import Provider from '../../Context/Provider'
import PaginaTransferencia from '../../Components/PaginaTransferencia'

export default function Transferencia() {
  return (
    <Provider>
      <PaginaTransferencia></PaginaTransferencia>
    </Provider>
  )
}