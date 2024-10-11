import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function NavBar({ navigation }) {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.navText}>HOME</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Empresa')}>
        <Text style={styles.navText}>EMPRESA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Serviços')}> 
        <Text style={styles.navText}>SERVIÇOS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}  onPress={() => navigation.navigate('Contato')}>

        <Text style={styles.navText}>CONTATO</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Links')}>
        <Text style={styles.navText}>LINKS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  navItem: {
    paddingHorizontal: 15,
  },
  navText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFCC00',
  },
});
