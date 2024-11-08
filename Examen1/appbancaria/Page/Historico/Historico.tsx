import { View, Text } from 'react-native'
import React from 'react'
import Provider from '../../Context/Provider'
import HistoricoCompleto from '../../Components/HistoricoCompleto'

export default function Historico() {
  return (
    <><Text>Historial de Transacciones</Text>
    <Provider>
      <HistoricoCompleto></HistoricoCompleto>
    </Provider>
    </>
    
  )
}