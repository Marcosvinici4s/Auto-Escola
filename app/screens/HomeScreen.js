// import React from 'react';
// import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Adicione esta linha se você estiver usando ícones
// import Headerr from '../Headerr';


// export default function HomeScreen() {
//   return (
//     <>
//     <ScrollView contentContainerStyle={styles.container}>

//       <View style={styles.section}>
//       <Headerr />

//         <Text style={styles.heading}>Bem-vindo à Autoescola Piloto</Text>
//         <Text style={styles.paragraph}>
//           A Autoescola Piloto é líder em treinamento de condutores, oferecendo cursos de alta qualidade
//           para garantir que nossos alunos se tornem motoristas seguros e responsáveis.
//         </Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subheading}>Nossos Serviços</Text>
//         <View style={styles.servicesContainer}>
//           <View style={styles.serviceItem}>
//             <Icon name="car" size={30} color="#333" />
//             <Text style={styles.serviceText}>Aulas Teóricas</Text>
//           </View>
//           <View style={styles.serviceItem}>
//             <Icon name="road" size={30} color="#333" />
//             <Text style={styles.serviceText}>Simulador de Direção</Text>
//           </View>
//           <View style={styles.serviceItem}>
//             <Icon name="refresh" size={30} color="#333" />
//             <Text style={styles.serviceText}>Cursos de Reciclagem</Text>
//           </View>
//           <View style={styles.serviceItem}>
//             <Icon name="moon-o" size={30} color="#333" />
//             <Text style={styles.serviceText}>Aulas Noturnas</Text>
//           </View>
//         </View>
//       </View>

//       <View style={styles.section}>

//         <Text style={styles.subheading}>Diferenciais</Text>
//         <Text style={styles.paragraph}>
//           - Instrutores Certificados
//           {'\n'}- Veículos Modernos e Seguros
//           {'\n'}- Atendimento Personalizado
//           {'\n'}- Flexibilidade de Horários
//         </Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subheading}>Contato</Text>
//         <View style={styles.contactContainer}>
//           <View style={styles.contactItem}>
//             <Icon name="phone" size={20} color="#333" />
//             <Text style={styles.contactText}>(11) 1234-5678</Text>
//           </View>
//           <View style={styles.contactItem}>
//             <Icon name="envelope" size={20} color="#333" />
//             <Text style={styles.contactText}>contato@autoescolapiloto.com.br</Text>
//           </View>
//           <View style={styles.contactItem}>
//             <Icon name="map-marker" size={20} color="#333" />
//             <Text style={styles.contactText}>Rua Principal, 123, Centro, Cidade</Text>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   banner: {
//     width: '100%',
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   section: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//   },
//   subheading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#555',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   paragraph: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//   },
//   servicesContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   serviceItem: {
//     alignItems: 'center',
//   },
//   serviceText: {
//     marginTop: 5,
//     fontSize: 14,
//     color: '#333',
//   },
//   contactContainer: {
//     alignItems: 'center',
//   },
//   contactItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 5,
//   },
//   contactText: {
//     fontSize: 16,
//     color: '#333',
//     marginLeft: 10,
//   },
// });

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Adicione esta linha se você estiver usando ícones
import Headerr from '../Headerr';

export default function HomeScreen() {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Headerr />

        <View style={styles.section}>
          <Text style={styles.heading}>Bem-vindo à Autoescola Piloto</Text>
          <Text style={styles.paragraph}>
            A Autoescola Piloto é líder em treinamento de condutores, oferecendo cursos de alta qualidade
            para garantir que nossos alunos se tornem motoristas seguros e responsáveis.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subheading}>Nossos Serviços</Text>
          <View style={styles.servicesContainer}>
            <View style={styles.card}>
              <Icon name="car" size={30} color="#333" />
              <Text style={styles.serviceText}>Aulas Teóricas</Text>
            </View>
            <View style={styles.card}>
              <Icon name="road" size={30} color="#333" />
              <Text style={styles.serviceText}>Simulador de Direção</Text>
            </View>
            <View style={styles.card}>
              <Icon name="refresh" size={30} color="#333" />
              <Text style={styles.serviceText}>Cursos de Reciclagem</Text>
            </View>
            <View style={styles.card}>
              <Icon name="moon-o" size={30} color="#333" />
              <Text style={styles.serviceText}>Aulas Noturnas</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.subheading}>Diferenciais</Text>
          <Text style={styles.paragraph}>
            - Instrutores Certificados
            {'\n'}- Veículos Modernos e Seguros
            {'\n'}- Atendimento Personalizado
            {'\n'}- Flexibilidade de Horários
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subheading}>Contato</Text>
          <View style={styles.contactContainer}>
            <View style={styles.contactItem}>
              <Icon name="phone" size={20} color="#333" />
              <Text style={styles.contactText}>(11) 1234-5678</Text>
            </View>
            <View style={styles.contactItem}>
              <Icon name="envelope" size={20} color="#333" />
              <Text style={styles.contactText}>contato@autoescolapiloto.com.br</Text>
            </View>
            <View style={styles.contactItem}>
              <Icon name="map-marker" size={20} color="#333" />
              <Text style={styles.contactText}>Rua Principal, 123, Centro, Cidade</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    width: '45%', // ajuste conforme necessário
  },
  serviceText: {
    marginTop: 10,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  contactContainer: {
    alignItems: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  contactText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
});
