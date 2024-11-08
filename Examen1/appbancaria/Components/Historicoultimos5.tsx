import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useContextoBancario } from '../Context/Provider';
import { Props } from '../Modelo/Props';

export default function Historicoultimos5() {
    const { histotrans } = useContextoBancario();

    const ultimos5Registros = histotrans.slice(-5).reverse();

  return (
    <View>
      <FlatList
        data={ultimos5Registros} // Pasar solo los últimos 5 registros
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.isRetiro ? 'Retiro' : 'Deposito'}</Text>
            <Text>{item.monto}</Text>
          </View>
        )}
      />
    </View>
  )
}