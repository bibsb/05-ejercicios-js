import { useState } from 'react';
import AdivinarNumero from './01-basicos/AdivinarNumero';
import EsPrimo from './01-basicos/EsPrimo';
import MayorDeEdad from './01-basicos/MayorDeEdad';
import './App.css';

function App() {
  return (
    <>
      <h1>Ejercicios Básicos Js</h1>
      <AdivinarNumero />
      <EsPrimo/>
      <MayorDeEdad/>
    </>
  );
}

export default App;
