import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <Text>Meus Links</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
