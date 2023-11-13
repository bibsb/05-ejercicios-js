import { useState } from 'react';

export default function MadLibsNinhos() {
  return (
    <>
      <div className="container" id="contenedor-basico">
        <h3>6 - Mad libs para niños</h3>
        {/* <p>Busca el número entre 1 y 100</p> */}
        <div className="input-group mb-3 ">
          <input
            type="number"
            className="form-control"
            placeholder="Introduce un número..."
            // value={number}
            // onChange={(e) => setNumber(parseInt(e.target.value, 10))}
          />
          <button
            className="btn btn-outline-secondary btn-sm"
            type="button"
            id="button-addon2"
            // onClick={() => adivinaElNum()}
            // disabled={
            //   number === '' || tries === 0 || result === 'Has acertado!'
            // }
          >
            Adivina el número
          </button>
        </div>

        {/* <p id="resultado">{result}</p>
        <p id="intentos">Te quedan {tries} intentos</p> */}
        <button
          className="btn btn-outline-secondary btn-sm"
          //   onClick={() => setNumber('')}
        >
          Reiniciar
        </button>
      </div>
    </>
  );
}
