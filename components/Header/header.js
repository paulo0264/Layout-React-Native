import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function Header() {
    return(
      <View style={styles.container}>
        <Text style={styles.texto}>Clica</Text>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black",
    width: "100%",
    height: 50,
    margin: 10,
    borderRadius: 8,
  },

  texto: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  }

});