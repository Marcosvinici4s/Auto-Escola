import React from 'react';
import { Image, StyleSheet, ScrollView, View, Text } from 'react-native';

const fundo = require('../assets/images/capa2.png'); 

export default function Headerr() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Image source={fundo} style={styles.image} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    alignItems: 'center',
  },
  image: {
    width: 1800,
    height: 700, // Ajuste conforme necessário
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});
