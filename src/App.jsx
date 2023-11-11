import { useState } from 'react';
import AdivinarNumero from './01-basicos/AdivinarNumero';
import EsPrimo from './01-basicos/EsPrimo';
import ListaDeNumeros from './01-basicos/ListaDeNumeros';
import MayorDeEdad from './01-basicos/MayorDeEdad';
import './App.css';

function App() {
  return (
    <>
      <ListaDeNumeros/>
      <AdivinarNumero />
      <EsPrimo />
      <MayorDeEdad />
    </>
  );
}

export default App;
