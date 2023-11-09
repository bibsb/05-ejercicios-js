import { useState } from 'react';

export default function EsPrimo() {
  const [primo, setPrimo] = useState(true);
  const [number, setNumber] = useState('');

  function esPrimo() {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        setPrimo(false);
        return;
      }
    }
    
    setPrimo(true);
  }
 
  console.log('Primo:', primo);
  return (
    <>
      <div id="contenedor-basico">
        <h3>09 - Adivina si es número primo</h3>
        <input
          type="number"
          id="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value, 10))}
        />
        <button onClick={() => esPrimo()}>Es primo ?</button>
        <button onClick={() => location.reload()}>Reinicia</button>
        {primo !== null && (
          <p id="resultado">{primo ? 'Es primo' : 'No es primo'}</p>
        )}
      </div>
    </>
  );
}
