import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Estudiante } from '../../Modelos/Estudiantes'
import Tabla2x from '../Tabla2x';



export default function HookComponents() {
    const [students, setStudents] = useState<Estudiante[]>(() => [
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

    useEffect(() => {
        const interval = setInterval(() => {
            const newStudent: Estudiante = {
                id: students.length+1,
                name: `Estudiante nombre ${students.length+1}`
            };

            setStudents(prevLista =>[...prevLista, newStudent]);

        }, 5000);

        return () => clearInterval(interval);
    }, [students]);


  return (
      <View>
        <Tabla2x datos={students} name='Estudiante' lista='id'/>


      </View>
      
    
  )
}
