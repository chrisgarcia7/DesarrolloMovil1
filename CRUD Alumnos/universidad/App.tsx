import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EstudianteComponent from './components/EstudianteComponent';
import Drawer from './components/Drawer';

export default function App() {
  return (
    <Drawer></Drawer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
