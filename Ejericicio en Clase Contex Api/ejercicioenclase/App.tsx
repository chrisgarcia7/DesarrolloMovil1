import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HookComponents from './Components/Hook/HookComponents';
import ProviderLista from './Provider/ProviderLista';
import ConsumerLista from './Consumer/ConsumerLista';

export default function App() {
  return (
    <View style={styles.container}>
      <ProviderLista>
        <ConsumerLista></ConsumerLista>
      </ProviderLista>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
