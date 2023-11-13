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

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const componentsPerPage = 5;
  const totalComponents = 10;

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
