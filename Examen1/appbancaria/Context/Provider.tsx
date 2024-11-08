import { View, Text } from 'react-native'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import {contextobancario} from './Context'
import { Transacciones } from '../Modelo/Transacciones';
import { Props } from '../Modelo/Props';

interface ViewReact{
    children: ReactNode
}

export default function Provider({children}: ViewReact) {

    const[saldo,setSaldo]=useState<number>(10000);
    const[deposito,setDeposito]=useState<string>('');
    const[retiro,setRetiro]=useState<number>(0);
    const[histotrans, setHistotrans] = useState<Transacciones[]>([]);

    const depositarSaldo = (deposito: number) =>{
        setSaldo(saldo+deposito)

    }


    const retirarSaldo= (retiro: number)=>{
        if (saldo>=retiro){
            setSaldo(saldo-retiro)

        }
    }

    function retirohistorico(cuenta: string, mont: number, nombre: string){
        let nuevaTransaccion: Transacciones={
            id: Math.floor(Math.random() * 1000) + 1,
            noCuenta: cuenta,
            monto: mont,
            nombredes: nombre,
            isRetiro: true
        };
        setHistotrans((prevHistotrans) => {
            const nuevoHistorial = [...prevHistotrans, nuevaTransaccion];
            return nuevoHistorial;
        });
    }

    function depositohistorico(mont: number){
        let body: Transacciones={
            id: Math.floor(Math.random() * 1000) + 1,
            noCuenta: 'misma cuenta',
            monto: mont,
            nombredes: 'mi nombre',
            isRetiro: false
        }
        setHistotrans([...histotrans,body])
    }


  return (
    
    <View>
        <contextobancario.Provider value={{
            saldo, 
            deposito, 
            retiro,
            setSaldo,
            retirohistorico,
            setDeposito,
            setRetiro, 
            depositarSaldo, 
            retirarSaldo,
            histotrans,
            depositohistorico
            }
            }>
            {children}
        </contextobancario.Provider>
    </View>
  )
}

export const useContextoBancario = () => {
    return useContext(contextobancario)
}