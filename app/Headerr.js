// import React from 'react';
// import { Image, StyleSheet, View } from 'react-native';

// const fundo = require('../assets/images/capa1.jpg'); // Certifique-se de que o caminho está correto

// export default function Headerr() {
//   return (
//     <View style={styles.headerContainer}>
//       <Image source={fundo} style={styles.image} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   headerContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 10,
//     marginBottom: 0,  // Adicionando margem inferior zero para remover espaços
//   },
//   image: {
//     width: 1000,
//     height: 100,
//     borderRadius: 8,
//   },
// });

import React from 'react';
import { Image, StyleSheet, ScrollView, View, Text } from 'react-native';

const fundo = require('../assets/images/capa2.png'); // Certifique-se de que o caminho está correto

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
