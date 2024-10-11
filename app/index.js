import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';  // Importe suas telas
import EmpresaScreen from './screens/EmpresaScreen';
import NavBar from './components/NavBar';       // Importe a barra de navegação
import RootLayout from './_layout';
import LinksScreen from './screens/LinksScreen'
import ContatoScreen from './screens/ContatoScreen'
import ServicosScreen from './screens/ServicosScreen'
// import ContatoScreen from './screens/ContatoScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ header: NavBar }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Empresa" component={EmpresaScreen} />
      <Stack.Screen name="index" component={RootLayout} options={{ title: "Auto Escola Piloto" }} />
      <Stack.Screen name="Links" component={LinksScreen} />
      <Stack.Screen name="Contato" component={ContatoScreen} />
      <Stack.Screen name="Serviços" component={ServicosScreen} />
    </Stack.Navigator>
  );
}

