import { useState } from 'react';
import AdivinarNumero from './01-basicos/AdivinarNumero';
import ContarVocales from './01-basicos/ContarVocales';
import EsPrimo from './01-basicos/EsPrimo';
import ListaDeNumeros from './01-basicos/ListaDeNumeros';
import MayorDeEdad from './01-basicos/MayorDeEdad';
import ParImpar from './01-basicos/ParImpar';
import TablaMultiplicar from './01-basicos/TablaMultiplicar';
import './App.css';
import SumarPares from './01-basicos/SumarPares';
import ConversorTemperatura from './01-basicos/Conversor Temperatura';

function App() {
  return (
    <>
      <ListaDeNumeros />
      <ParImpar />
      <TablaMultiplicar/>
      <ContarVocales/>
      <SumarPares/>
      <ConversorTemperatura/>
      <AdivinarNumero />
      <EsPrimo />
      <MayorDeEdad />
    </>
  );
}

export default App;
