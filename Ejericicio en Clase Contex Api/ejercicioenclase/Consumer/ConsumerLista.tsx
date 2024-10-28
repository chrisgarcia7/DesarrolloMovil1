import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { ContextTabla } from '../Context/ContextApi'
import { useLista } from '../Provider/ProviderLista'
import { Estudiante } from '../Context/ContextApi'
import Tabla2x from '../Components/Tabla2x';

export default function ConsumerLista() {
    const {students, setStudents}= useLista();

    useEffect(() => {
        const interval = setInterval(() => {
            const newStudent: Estudiante = {
                id: students.length + 1,
                name: `Estudiante nombre ${students.length + 1}`,
            };

            setStudents((prevLista) => [...prevLista, newStudent]);
        }, 5000);

        return () => clearInterval(interval);
    }, [students, setStudents]);

  return (
    <View>
      <Text>Componente consumidor</Text>
      <Tabla2x datos={students} name='Estudiantes' lista='ID'></Tabla2x>
    </View>
  )
}
