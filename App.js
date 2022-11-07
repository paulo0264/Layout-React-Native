import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Head from './components/Header/header';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.pryme}></Text>
      <Head/>
      <Head/>
      <Head/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    margin: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  pryme: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#FFFCCE",
    width: "100%",
    height: 150,
    margin: 10,
    borderRadius: 8,
  },
});
