    import { View, Text, ScrollView, StyleSheet } from 'react-native'
    import React from 'react'
    import { Estudiante } from '../Modelos/Estudiantes'


    interface Diseno{
        datos: {
            id: number
            name: string
        }[];
        name:string,
        lista: string
    }

    export default function Tabla2x({datos, name, lista}: Diseno) {
    return (
        <View>
            <ScrollView>
                <View style={style.table}>

                    <View style={style.header}>
                        <Text style={style.headerText}>{lista}</Text>
                        <Text style={style.headerText}>{name}</Text>
                    </View>

                    {datos.map((dato) => (
                        <View key={dato.id} style={style.row}>
                            <Text style={style.cell}>{dato.id}</Text>
                            <Text style={style.cell}>{dato.name}</Text>
                        </View>
                    ))}


                </View>

            </ScrollView>
        </View>
    )
    }

    const style = StyleSheet.create({
        text:{
            color: 'white'
        },
        table: {
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
        },
        header: {
            flexDirection: 'row',
            padding: 10,
            
        },
        headerText: {
            flex: 1,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white'
            
        },
        row: {
            flexDirection: 'row',
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
        },

        cell: {
            color:'white',
            flex: 1,
            textAlign: 'center',
        },
        
    })