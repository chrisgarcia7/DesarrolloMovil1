import { View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import api from '../service/api';
import { Asignatura } from '../modelo/Asignatura';
import { Picker } from '@react-native-picker/picker';

export default function AsignaturaComponent() {
  const [nombre, setNombre] = useState<string>('');
  const [estado, setEstado] = useState<number>(0);
  const [asignaturas, setAsignaturas] = useState([])

  const getAsignatura = async () =>{
    try {
        const response= await api.get('asignatura');
        setAsignaturas(response.data)

    } catch (error) {
        Alert.alert('Error', 'Ocurrio un error' + error)

    }
  }

  const postAsignatura = async () =>{
    try {
      const response = await api.post('asignatura', {
        nombre,
        estado
      });

      Alert.alert('Exito', 'Asignatura añadida correctamente');
        setNombre('');
        setEstado(0);
        getAsignatura(); // Actualizar lista
      
    } catch (error) {
      Alert.alert('Error', 'No se pudo agregar la asignatura');
      
    }

  }

  useEffect(()=>{
    getAsignatura()
}, [])


  return (
    <View style={styles.container}>

      <Text style={styles.title}> Agregar nueva asignatura</Text>
      <TextInput placeholder='Nombre de la asignatura' style={styles.input} value={nombre} onChangeText={setNombre}></TextInput>
      <Picker
        selectedValue={estado} 
        onValueChange={setEstado} 
        style={styles.picker}
      >
        <Picker.Item label="Activo" value={1} />
        <Picker.Item label="Inactivo" value={0} />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={postAsignatura}>
        <Text style={styles.buttonText}>Agregar Asignatura</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Lista de Asignaturas</Text>

      <FlatList 
      data={asignaturas}
      keyExtractor={(item:Asignatura) => item.idasignatura.toString()}
      renderItem={({item})=>(

          <View style={styles.card}>
            <Text>{ `${item.nombre}`}</Text>
        </View>


        
       
      )}

      >


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