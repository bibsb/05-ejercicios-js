import { useState } from 'react';

export default function MadLibsNinhos() {
  const [name, setName] = useState('');
  const [animal, setAnimal] = useState('');
  const [color, setColor] = useState('');
  const [result, setResult] = useState('');

  const create = () => {
    setResult(
      `Un día por la mañana ${name} se levantó con mucha sed, de camino a la nevera, acarició a su ${animal.toLowerCase()}  mientras llenaba su taza ${color.toLowerCase()}.`
    );
  };

  return (
    <>
      <div className="container" id="contenedor-intermedio">
        <h3>6 - Mad Libs para niños</h3>

        <p>Introduce los siguientes elementos para crear una historia:</p>
        <div className="row mb-3">
          <div className="col-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-3">
            <input
              type="text"
              className="form-control"
              placeholder="Animal..."
              value={animal}
              onChange={(e) => setAnimal(e.target.value)}
            />
          </div>
          {/* <div className="col-3">
            <input
              type="text"
              className="form-control"
              placeholder="Color..."
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div className="col-3">
            <button
              className="btn btn-outline-secondary btn-sm"
              type="button"
              id="button-addon2"
              style={{ width: '100%', height: '100' }}
              onClick={() => create()}
              disabled={!name || !animal || !color}
            >
              Crear
            </button>
          </div> */}
          <div className="col-6">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Color..."
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
              <button
                className="btn btn-outline-secondary btn-sm"
                type="button"
                id="button-addon2"
                style={{ paddingLeft: 50, paddingRight: 50 }}
                onClick={() => create()}
                disabled={!name || !animal || !color}
              >
                Crear
              </button>
            </div>
          </div>
        </div>

        {result !== '' && (
          <div>
            <p>Frase modificada:</p>
            <p style={{ textAlign: 'center' }}>
              <b>{result}</b>
            </p>
          </div>
        )}
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => {
            setName('');
            setAnimal('');
            setColor('');
            setResult('');
          }}
        >
          Reiniciar
        </button>
      </div>
    </>
  );
}
