import { useState } from 'react';

export default function AdivinarNumero() {
  const [randomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [number, setNumber] = useState(null);
  const [result, setResult] = useState(null);
  const [tries, setTries] = useState(0);

  console.log('NumRandom:', randomNumber);
  function adivinaElNum() {
    console.log('NumUsuario:', number);
    console.log('Tipo:', typeof randomNumber, typeof number, typeof tries);
    if (number === randomNumber) {
      setResult('Has acertado!');
    } else if (number > randomNumber) {
      setResult('El número que buscas es menor');
    } else if (number < randomNumber) {
      setResult('El número que buscas es mayor');
    }
    setTries(tries + 1);
  }

  return (
    <>
      <div id="contenedor-basico">
        <h3>08 - Adivinar el número</h3>
        {/* <p>Busca el número entre 1 y 100</p> */}
        <input
          type="number"
          id="numero"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value, 10))}
        />
        <button
          onClick={() => adivinaElNum()}
          disabled={tries >= 5 || result === 'Has acertado!'}
        >
          Adivina el número
        </button>
        <p id="resultado">{result}</p>
        <p id="intentos">Has usado {tries} intentos</p>
      </div>
    </>
  );
}
