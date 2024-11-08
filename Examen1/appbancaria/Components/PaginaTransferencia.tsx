import { View, Text, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useContextoBancario } from '../Context/Provider'

export default function PaginaTransferencia() {
    const {saldo, retiro, setRetiro, retirarSaldo, setSaldo, histotrans,retirohistorico}= useContextoBancario();
    const [cuenta, setCuenta]=useState<string>('');
    const [montoTrans,setMontoTrans]=useState<string>('');
    const [nombre,setNombre]=useState<string>('');

    const handleAddHistorico = () => {
        if (cuenta.trim() && montoTrans.trim() && nombre.trim()) {
            if (saldo >= parseFloat(montoTrans)) {
                retirarSaldo(parseFloat(montoTrans))
                retirohistorico(cuenta, parseFloat(montoTrans), nombre);
                setCuenta('');
                setMontoTrans('');
                setNombre('');

            }



        }
    }
    useEffect(() => {
        console.log('Historial de transacciones:', histotrans);
    }, [histotrans]);



  return (
    <View>
      <Text>Bienvenido a la Aplicacion de MiBanco chrisgarcia</Text>

      <TextInput placeholder='Numero de Cuenta' value={cuenta} onChangeText={setCuenta}></TextInput>
      <TextInput placeholder='Monto' value={montoTrans} onChangeText={setMontoTrans}></TextInput >
      <TextInput placeholder='Nombre del Destinatario' value={nombre} onChangeText={setNombre}></TextInput>
      <Button title='Transferir saldo' onPress={handleAddHistorico}></Button>

    </View>
  )
}