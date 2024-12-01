import { View, Text, Alert, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import api from '../service/api';
import { Picker } from '@react-native-picker/picker';
import { Estudiante } from '../modelo/Estudiante';
import { Asignatura } from '../modelo/Asignatura';
import { TextInput } from 'react-native-gesture-handler';

export default function AsignaturasEstudiante() {
    const [estudiante, setEstudiante] = useState<string>('');
    const [listaEstudiantes, setListaEstudiantes] = useState<Estudiante[]>([]);
    const [asignatura, setAsignatura] = useState<string>('');
    const [listaAsignaturas, setListaAsignaturas] = useState<Asignatura[]>([]);
    const [asignaturasEstudiante, setAsignaturasEstudiante] = useState([]);
    const [ingresado, setIngresado] = useState(false)



    const getAsigAsignada = async () => {
        try {
            const response = await api.get('asignaturaestudiante');
            setAsignaturasEstudiante(response.data)

        } catch (error) {
            Alert.alert('Error', 'Ocurrio un error' + error)

        }
    }


    const getListaEstudiantes = async () => {
        try {

            const response = await api.get('estudiante');
            setListaEstudiantes(response.data)

        } catch (error) {
            Alert.alert('Error', 'Ocurrio un error' + error)

        }
    }


    const getListaAsignaturas = async () => {
        try {
            const response = await api.get('asignatura');
            setListaAsignaturas(response.data)

        } catch (error) {
            Alert.alert('Error', 'Ocurrio un error' + error)

        }
    }

    const postAsignaturaEstudiante = async () =>{
        setIngresado(true)
        try {
          const response = await api.post('asignaturaestudiante', {
            estudiante,
            asignatura
          });
          console.log('hizo el post')
    
          Alert.alert('Exito', 'Asignatura añadida correctamente');

          setIngresado(false)
          
        } catch (error) {
          Alert.alert('Error', 'No se pudo agregar la asignatura');
          
        }
    
      }

    useEffect(() => {
        getListaEstudiantes();
        getListaAsignaturas();
        getAsigAsignada();
    },[ingresado])


  return (
    <View style={styles.container}>


    <Picker
    selectedValue={estudiante}
    onValueChange={(itemValue) => setEstudiante(itemValue)} 
    style={styles.picker}
>
    <Picker.Item label="Selecciona un estudiante" value="" />
    {listaEstudiantes.map((item) => (
        <Picker.Item
            key={item.idestudiante}
            label={`${item.nombre} ${item.apellido}`}
            value={item.idestudiante.toString()} 
        />
    ))}
</Picker>

<Picker
    selectedValue={asignatura}
    onValueChange={(itemValue) => setAsignatura(itemValue)} 
    style={styles.picker}
>
    <Picker.Item label="Selecciona una asignatura" value="" />
    {listaAsignaturas.map((item) => (
        <Picker.Item
            key={item.idasignatura}
            label={item.nombre}
            value={item.idasignatura.toString()} 
        />
    ))}
</Picker>





    

        <TouchableOpacity style={styles.button} onPress={postAsignaturaEstudiante}>
            <Text style={styles.buttonText}>Agregar asignatura a estudiante</Text>

        </TouchableOpacity>

        <FlatList
        data={asignaturasEstudiante}
        keyExtractor={(item:any) => item.id.toString()}
        renderItem={({item})=> (
            <View style={styles.card}>
            <Text>{item.idestudiante}</Text>
            <Text>{item.idasignatura} </Text>
        </View>
        )}>

        </FlatList>


      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f4f4f4',
      marginTop:10
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color: '#333',
      textAlign: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 12,
      marginBottom: 20,
      borderRadius: 8,
      fontSize: 16,
      backgroundColor: '#fff',
      shadowColor: '#ddd',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    card: {
      backgroundColor: '#fff',
      padding: 16,
      marginBottom: 8,
      borderRadius: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
      marginTop:5
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8,
    },
    picker: {
      height: 50,
      width: 250,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    button: {
      backgroundColor: '#4CAF50', // Verde atractivo
      padding: 14,
      borderRadius: 8,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 3,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });