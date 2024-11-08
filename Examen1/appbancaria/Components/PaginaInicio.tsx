import { View, Text, Button, TextInput } from 'react-native'
import React from 'react'
import { useContextoBancario } from '../Context/Provider'
import Historicoultimos5 from './Historicoultimos5';
import { Props } from '../Modelo/Props';

export default function PaginaInicio() {
    const {saldo,deposito,setDeposito,depositarSaldo, depositohistorico} = useContextoBancario();

    const handleAddHistorico = () => {
      if (deposito!=''){
        depositarSaldo(parseFloat(deposito));
        depositohistorico(parseFloat(deposito));
        setDeposito('');
      }
        
        
    }
  return (
    <View>
      <Text>Bienvenido a la Aplicación de MIBANCO chrisgarcia</Text>
      <Text>Saldo Actual: {saldo}</Text>

      <TextInput placeholder='Saldo a Depositar' value={deposito} onChangeText={setDeposito} keyboardType="numeric"></TextInput>
      <Button title='Depositar Saldo' onPress={handleAddHistorico}></Button>

      <Historicoultimos5></Historicoultimos5>
    </View>
  )
}