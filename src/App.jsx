import { useState } from 'react';
import AdivinarNumero from './01-basicos/AdivinarNumero';
import ContarVocales from './01-basicos/ContarVocales';
import EsPrimo from './01-basicos/EsPrimo';
import ListaDeNumeros from './01-basicos/ListaDeNumeros';
import MayorDeEdad from './01-basicos/MayorDeEdad';
import ParImpar from './01-basicos/ParImpar';
import TablaMultiplicar from './01-basicos/TablaMultiplicar';
import SumarPares from './01-basicos/SumarPares';
import ConversorTemperatura from './01-basicos/Conversor Temperatura';
import Piramide from './01-basicos/Piramide';
import './App.css';
import Paginator from './Paginator';
import ValidarDNI from './02-Intermedios/ValidarDNI';
import Fibonacci from './02-Intermedios/Fibonacci';
import ReemplazarText from './02-Intermedios/ReemplazarText';
import ContadorPalabras from './02-Intermedios/ContarPalabras';
import Cesar from './02-Intermedios/Cesar';
import MadLibsNinhos from './02-Intermedios/MadLibsNinhos';
import CalcularEdadPerro from './03-Avanzados/CalcularEdadPerro';
import Palindromos from './03-Avanzados/Palindromos';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const componentsPerPage = 5;
  const totalComponents = 16;

  const indexOfLastComponent = currentPage * componentsPerPage;
  const indexOfFirstComponent = indexOfLastComponent - componentsPerPage;
  const currentComponents = [
    <ListaDeNumeros />,
    <ParImpar />,
    <TablaMultiplicar />,
    <ContarVocales />,
    <SumarPares />,
    <ConversorTemperatura />,
    <Piramide />,
    <AdivinarNumero />,
    <EsPrimo />,
    <MayorDeEdad />,

    <ValidarDNI/>,
    <Fibonacci/>,
    <ReemplazarText/>,
    <ContadorPalabras/>,
    <Cesar/>,
    <MadLibsNinhos/>,

    <CalcularEdadPerro/>,
    <Palindromos/>
  ].slice(indexOfFirstComponent, indexOfLastComponent);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      {currentComponents}
      <Paginator
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalItems={totalComponents}
        itemsPerPage={componentsPerPage}
      />
    </>
  );
}

export default App;
