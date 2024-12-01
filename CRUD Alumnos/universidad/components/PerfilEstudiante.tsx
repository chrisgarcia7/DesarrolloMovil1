import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { Estudiante } from '../modelo/Estudiante';
import api from '../service/api';
import { AsignaturaEstudiante } from '../modelo/AsignaturaEstudiante';
import { Asignatura } from '../modelo/Asignatura';

type Paginas = {
  Perfil: { estudiante: Estudiante }; // Definimos el tipo de los parámetros que vamos a recibir
};

type PerfilEstudianteRouteProp = RouteProp<Paginas, 'Perfil'>;

interface PerfilEstudianteProps {
  route: PerfilEstudianteRouteProp;
}

export default function PerfilEstudiante({ route }: PerfilEstudianteProps) {
  const [asignaturasEstudiante, setAsignaturasEstudiante] = useState<AsignaturaEstudiante[]>();
  const [asignaturas, setAsignaturas] = useState<Asignatura[]>([])
  const navigation = useNavigation();
  const { estudiante } = route.params;

  const getAsigAsignada = async () => {
    try {
      const response = await api.get('asignaturaestudiante');
      console.log('Asignaturas Estudiante:', response.data);
      const asignaturas = response.data;


      const asignaturasFiltradas = asignaturas.filter((item: AsignaturaEstudiante) => item.idestudiante === estudiante.idestudiante);
      console.log('asignaturas filtradas', asignaturasFiltradas)

      setAsignaturasEstudiante(asignaturasFiltradas);

    } catch (error) {
      Alert.alert('Error', 'Ocurrio un error' + error)

    }
  }

  const getAsignatura = async () => {
    try {
      const response = await api.get('asignatura');
      setAsignaturas(response.data)

    } catch (error) {
      Alert.alert('Error', 'Ocurrio un error' + error)

    }
  }

  const getAsignaturaNombre = (idAsignatura: number) => {
    const asignatura = asignaturas.find((asig) => asig.idasignatura === idAsignatura);
    return asignatura ? asignatura.nombre : 'Nombre no disponible';  // Devolver nombre o un mensaje por defecto
  };

  useEffect(() => {
    getAsignatura();
    getAsigAsignada();
  }, [estudiante])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil del Estudiante</Text>
      <Text style={styles.text}>Nombre: {estudiante.nombre} {estudiante.apellido}</Text>
      <Text style={styles.text}>Correo: {estudiante.correo}</Text>
      <Text style={styles.text}>Teléfono: {estudiante.telefono}</Text>


      <FlatList
        data={asignaturasEstudiante}
        keyExtractor={(item) => item.idasignatura.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{getAsignaturaNombre(item.idasignatura)}</Text> {/* Mostrar el nombre de la asignatura */}
          </View>
        )}
        ListEmptyComponent={<Text>No tiene asignaturas asignadas.</Text>} // Mensaje si no tiene asignaturas
      />


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()} // Regresa a la pantalla anterior (Estudiantes)
      >
        <Text style={styles.buttonText}>Regresar a Estudiantes</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  text: {
    fontSize: 16,
    marginBottom: 40,
    color: '#555',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007BFF', // Color de fondo del botón
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    elevation: 4, // Agrega sombra para darle un efecto 3D
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
    marginTop: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});