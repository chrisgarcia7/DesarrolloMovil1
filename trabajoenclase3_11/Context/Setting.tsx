import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useTema } from './ThemeLocalProvider'

export default function Setting() {
    const {isDarkTheme, toggleTheme}=useTema()

    return (
      <View>
        <Text style={ isDarkTheme ? style.textoOscuro : style.textoClaro}>Tema actual {isDarkTheme ? 'Oscuro': 'Claro'}</Text>
  
        <Button title='Cambiar tema' onPress={toggleTheme}></Button>
      </View>
    )
}

const style=StyleSheet.create({
    textoClaro:{
        color: 'black'
    },
    textoOscuro:{
        color: 'white'
    }
})