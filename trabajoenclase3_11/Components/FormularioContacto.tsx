import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useContextUsuario } from '../Context/UsuarioProvider'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import ListaUsuario from './ListaUsuario'
import { useTema } from '../Context/ThemeLocalProvider'

export default function FormularioContacto() {
    const { nombre,
        apellido,
        correo,
        telefono,
        fechaNacimiento,
        listaUsuario,
        agregarUsuario,
        setNombre,
        setApellido,
        setCorreo,
        setTelefono,
        setFechaNacimiento } = useContextUsuario()
    
    const {isDarkTheme}=useTema()

    return (
        <View>
            <Text>Formulario de Usuario</Text>
            <Text style={ isDarkTheme ? {color: 'white'} : {color:'black'}}>Tema actual {isDarkTheme ? 'Oscuro': 'Claro'}</Text>

            <TextInput placeholder='Nombre' value={nombre} style={isDarkTheme ? styles.inputoscuro : styles.inputclaro} onChangeText={setNombre}/>
            <TextInput placeholder='Apellido' value={apellido} style={isDarkTheme ? styles.inputoscuro : styles.inputclaro} onChangeText={setApellido}/>
            <TextInput placeholder='Correo' value={correo} style={isDarkTheme ? styles.inputoscuro : styles.inputclaro} onChangeText={setCorreo}/>
            <TextInput placeholder='Telefono' value={telefono} style={isDarkTheme ? styles.inputoscuro : styles.inputclaro} onChangeText={setTelefono}/>
            <TextInput placeholder='Fecha de Nacimiento' value={fechaNacimiento} style={isDarkTheme ? styles.inputoscuro : styles.inputclaro} onChangeText={setFechaNacimiento}/>

            <Button title='Agregar Usuario' onPress={agregarUsuario}/>

            <ListaUsuario></ListaUsuario>

            
        </View>
    )
}

const styles = StyleSheet.create({
    inputoscuro: {
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
        paddingHorizontal: 10,
        color: 'white',
        backgroundColor: 'black'
    },
    inputclaro: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        paddingHorizontal: 10
    }
})
