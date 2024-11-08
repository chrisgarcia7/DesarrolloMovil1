import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useContextoBancario } from '../Context/Provider'
import { Props } from '../Modelo/Props';

export default function HistoricoCompleto() {

    const{histotrans} = useContextoBancario();

    useEffect(() => {
        console.log('Historial de transacciones:', histotrans);
    }, [histotrans]);

  return (
    <View>
        <FlatList
        data={histotrans}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <View >
                <Text>{item.isRetiro ? 'Retiro' : 'Deposito'}</Text>
                <Text>{item.monto}</Text>
            </View>
        )}></FlatList>
    </View>
  )
}