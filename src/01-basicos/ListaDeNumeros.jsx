import { useState } from 'react';

export default function ListaDeNumeros() {
  const [number, setNumber] = useState('');
  const [list, setList] = useState([]);

   function createList() {
     const tempList = [];
     for (let i = 0; i <= number; i++) {
       tempList.push(i);
       console.log(tempList);
     }
     setList(tempList);
   }

  return (
    <>
      <div className="container" id="contenedor-basico">
        <h3>1 - Lista de números</h3>

        <div className="input-group mb-3 ">
          <input
            type="number"
            className="form-control"
            placeholder="Introduce cuantos números quieres en la lista..."
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value, 10))}
          />
          <button
            className="btn btn-outline-secondary btn-sm"
            type="button"
            id="button-addon2"
            onClick={() => createList()}
            disabled={number === ''}
          >
            Crear lista
          </button>
        </div>

        <ul className="list-group mb-2">
          {list.map((el) => (
            <li className="list-group-item" key={el} value={el}>
              {el}
            </li>
          ))}
        </ul>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => {
            setNumber('');
            setList([]);
          }}
        >
          Reinicia
        </button>
      </div>
    </>
  );
}
