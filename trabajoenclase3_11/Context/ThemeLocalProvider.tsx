import { View, Text, StyleSheet } from 'react-native'
import React, { ReactNode, useContext, useState } from 'react'
import { contextTheme } from './Contexttheme'

interface ViewReact{
    children: ReactNode
}

export default function ThemeLocalProvider({children}: ViewReact) {

    const [isDarkTheme,setIsDarkTheme]=useState<boolean>(false);
    const toggleTheme = () => setIsDarkTheme(!isDarkTheme);


  return (
    <contextTheme.Provider value={{isDarkTheme, toggleTheme}}>
        <View style={[style.container, {backgroundColor: isDarkTheme ? '#333' : '#fff'}]}>
            {children}
        </View>

    </contextTheme.Provider>
  )
}

const style=StyleSheet.create({
    container: {
        flex:1
    }
});

export const useTema = () =>{
    return useContext(contextTheme)
}