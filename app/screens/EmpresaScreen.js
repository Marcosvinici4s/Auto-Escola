import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function EmpresaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Sobre a Auto Escola Piloto</Text>
      <Text style={styles.paragraph}>
        Fundada em 2024, a Auto Escola Piloto tem mais de 25 anos de experiência em formar condutores
        seguros e conscientes. Nossa missão é garantir que cada aluno receba a melhor educação de
        direção, com foco em segurança, responsabilidade e confiança ao volante.
      </Text>
      <Text style={styles.paragraph}>
        Nossos instrutores são altamente qualificados e dedicados a fornecer um aprendizado de qualidade,
        utilizando técnicas modernas e inovadoras. Estamos comprometidos com a excelência e
        acreditamos que um bom motorista é formado com paciência, dedicação e prática.
      </Text>
      <Text style={styles.paragraph}>
        Venha nos conhecer e descubra porque somos a escolha preferida para novos motoristas em toda a
        região. Na Auto Escola Piloto, sua segurança e satisfação são nossa prioridade.
      </Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
    color: '#666',
  },
});
