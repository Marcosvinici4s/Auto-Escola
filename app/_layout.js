import React from 'react';
import { Stack } from 'expo-router';
import Header from './Header'; // Certifique-se de que o caminho está correto


export default function RootLayout() {
  return (
    <>

      <Header /> {/* Adiciona o logo acima do Stack */}
      <Stack screenOptions={{ headerShown: false }}> {/* O "index" será ocultado */}
        {/* O "index" será ocultado */}
      </Stack>
      {/* <Headerr /> */}
    </>
  );
}
  