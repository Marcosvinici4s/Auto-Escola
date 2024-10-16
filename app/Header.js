import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const logo = require('../assets/images/logoAE.jpg'); 

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image source={logo} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 0,  // Adicionando margem inferior zero para remover espaços
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});
