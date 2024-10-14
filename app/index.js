import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';  // Importe suas telas
import EmpresaScreen from './screens/EmpresaScreen';
import NavBar from './components/NavBar';       // Importe a barra de navegação
import RootLayout from './_layout';
import LinksScreen from './screens/LinksScreen'
import ContatoScreen from './screens/ContatoScreen'
import ServicosScreen from './screens/ServicosScreen'
import SignupScreen from './screens/SignupScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ header: NavBar }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Empresa" component={EmpresaScreen} />
      <Stack.Screen name="index" component={RootLayout} options={{ title: "Auto Escola Piloto" }} />
      <Stack.Screen name="Links" component={LinksScreen} />
      <Stack.Screen name="Contato" component={ContatoScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Serviços" component={ServicosScreen} />
    </Stack.Navigator>
  );
}


// import React from 'react';
// import { Stack } from 'expo-router';
// import Header from './Header';


// export default function RootLayout() {
//   return (
//     <>

//       <Header /> {/* Adiciona o logo acima do Stack */}
//       <Stack screenOptions={{ headerShown: false }}> {/* O "index" será ocultado */}
//         {/* O "index" será ocultado */}
//       </Stack>
//       {/* <Headerr /> */}
//     </>
//   );
// }
  