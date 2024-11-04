import { View, Text, Settings } from 'react-native'
import React from 'react'
import ThemeLocalProvider from '../../Context/ThemeLocalProvider'
import Setting from '../../Context/Setting'

export default function Configuraciones() {
  return (
      <ThemeLocalProvider>
        <Setting></Setting>
      </ThemeLocalProvider>
  )
}