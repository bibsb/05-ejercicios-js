import { useState } from 'react';

export default function Piramide() {
  const [number, setNumber] = useState('');
  const [pyramid, setPyramid] = useState([]);

  function createPyramid() {
    let tempPyramid = [];
    for (let i = 1; i <= number; i++) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += '* ';
      }
      tempPyramid.push(row);
    }
    setPyramid(tempPyramid);
  }

  return (
    <>
      <div className="container" id="contenedor-basico">
        <h3>7 - Pirámide</h3>

        <div className="input-group mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Introduce cuántos niveles quieres en la pirámide..."
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value, 10))}
          />
          <button
            className="btn btn-outline-secondary btn-sm"
            type="button"
            id="button-addon2"
            onClick={() => createPyramid()}
            disabled={number === ''}
          >
            Crear
          </button>
        </div>

        <ul className="ist-group mb-2 list-group-horizontal">
          {pyramid.map((el, index) => (
            <li className="list-group-item" key={index}>
              {el}
            </li>
          ))}
        </ul>

        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => {
            setNumber('');
            setPyramid([]);
          }}
        >
          Reiniciar
        </button>
      </div>
    </>
  );
}
