import { View, Text } from 'react-native'
import React, { ReactNode, useContext, useState } from 'react'
import { ContextTabla } from '../Context/ContextApi';

interface ViewReact{
    children: ReactNode
}

export default function ProviderLista(props:ViewReact) {

    const [students, setStudents] = useState(() => [
        { id: 1, name: 'Juan' },
        { id: 2, name: 'María' },
        { id: 3, name: 'Carlos' },
        { id: 4, name: 'Ana' },
        { id: 5, name: 'Luis' },
        { id: 6, name: 'Pedro' },
        { id: 7, name: 'Sofía' },
        { id: 8, name: 'Javier' },
        { id: 9, name: 'Laura' },
        { id: 10, name: 'Diego' },
    ]);

  return (
    <View>
      <Text>Proveedor de lista de estudiantes</Text>
      <ContextTabla.Provider value={{students,setStudents}}>
        {props.children}


      </ContextTabla.Provider>

    </View>
  )
}

export const useLista =() =>{
    return useContext(ContextTabla)
}