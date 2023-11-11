import { useState } from 'react';
import AdivinarNumero from './01-basicos/AdivinarNumero';
import EsPrimo from './01-basicos/EsPrimo';
import ListaDeNumeros from './01-basicos/ListaDeNumeros';
import MayorDeEdad from './01-basicos/MayorDeEdad';
import ParImpar from './01-basicos/ParImpar';
import TablaMultiplicar from './01-basicos/TablaMultiplicar';
import './App.css';

function App() {
  return (
    <>
      <ListaDeNumeros />
      <ParImpar />
      <TablaMultiplicar/>
      <AdivinarNumero />
      <EsPrimo />
      <MayorDeEdad />
    </>
  );
}

export default App;
