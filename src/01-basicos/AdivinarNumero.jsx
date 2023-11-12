import { useState } from 'react';

export default function AdivinarNumero() {
  const [randomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');
  const [tries, setTries] = useState(5);

  console.log('NumRandom:', randomNumber);
  function adivinaElNum() {
    console.log('NumUsuario:', number);
    console.log('Tipo:', typeof randomNumber, typeof number, typeof tries);
    if (isNaN(parseInt(number)) || !number) {
      setResult('Introduce un número');
    } else {
      if (number === randomNumber) {
        setResult('Has acertado!');
      } else if (number > randomNumber) {
        setResult('El número que buscas es menor');
      } else if (number < randomNumber) {
        setResult('El número que buscas es mayor');
      }
    }
    setTries(tries - 1);
  }

  return (
    <>
      <div className="container" id="contenedor-basico">
        <h3>08 - Adivinar el número</h3>
        {/* <p>Busca el número entre 1 y 100</p> */}
        <div className="input-group mb-3 ">
          <input
            type="number"
            className="form-control"
            placeholder="Introduce un número..."
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value, 10))}
          />
          <button
            className="btn btn-outline-secondary btn-sm"
            type="button"
            id="button-addon2"
            onClick={() => adivinaElNum()}
            disabled={number === '' || tries === 0 || result === 'Has acertado!'}
          >
            Adivina el número
          </button>
        </div>

        {/* <input
          type="number"
          id="numero"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value, 10))}
        /> */}
        {/* <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => adivinaElNum()}
          disabled={tries === 0 || result === 'Has acertado!'}
        >
          Adivina el número
        </button> */}

        <p id="resultado">{result}</p>
        <p id="intentos">Te quedan {tries} intentos</p>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => setNumber('')}
        >
          Reiniciar
        </button>
      </div>
    </>
  );
}
