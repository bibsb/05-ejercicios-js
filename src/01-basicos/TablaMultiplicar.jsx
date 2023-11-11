import { useState } from 'react';

export default function TablaMultiplicar() {
  const [number, setNumber] = useState('');
  const [multiplyTable, setMultiplyTable] = useState([]);

  function createTable() {
    const tempTable = [];
    for (let i = 1; i <= 10; i++) {
      tempTable.push(i * number);
    }
    setMultiplyTable(tempTable);
  }

  return (
    <>
      <div className="container" id="contenedor-basico">
        <h3>3 - Tabla de multiplicar</h3>

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
            onClick={() => createTable()}
            disabled={number === ''}
          >
            Crear tabla
          </button>
        </div>
        <div className="row">
          <div className="col-6">
            <ul className="list-group mb-2">
              {multiplyTable.slice(0, 5).map((el) => (
                <li className="list-group-item" key={el} value={el}>
                  {number} x {el / number} = {el}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6">
            <ul className="list-group mb-2">
              {multiplyTable.slice(5, 10).map((el) => (
                <li className="list-group-item" key={el} value={el}>
                  {number} x {el / number} = {el}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => {
            setNumber('');
            setMultiplyTable([]);
          }}
        >
          Reiniciar
        </button>
      </div>
    </>
  );
}
