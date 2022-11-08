import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Head from './components/Header/header';


export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.hed}>
          <Text style={styles.btn}>Menu</Text>
          <Text style={styles.btn}>Logs</Text>
          <Text style={styles.btn}>Credits</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.cont}>
            <View style={styles.um}>
              <Head/>
              <Head/>
              <Head/>
            </View>
            
          </View>
          
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.foo}>Exercício 03 - DDM</Text>
        </View>
        
        
      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main:{
    width:'100%',
    flex: 1,
    backgroundColor:'#E5E5E5',
    justifyContent: 'center',
  },
  hed:{
    width: '100%',
    backgroundColor: "#C4C4C4",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:'center',
  },
  btn:{
    marginTop:20,
    width: 77,
    height: 28,
    fontSize: 16,
    fontWeight:"bold",
    justifyContent:"space-around",
    color: '#FFFFFF',
    backgroundColor: 'black',
    borderRadius: 10,
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    height: 55,
    backgroundColor: '#4E466A',
    justifyContent: 'center'
  },
  foo:{
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold', 
  },
  cont:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '90%',
    margin: 20,
    borderRadius: 10,
    backgroundColor: '#8A8FC4',
  },
  um:{
    width:'90%',
    backgroundColor: '#B2B9FF',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
