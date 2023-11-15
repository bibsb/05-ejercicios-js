import { useState } from 'react';

export default function CalcularEdadPerro() {
  const [age, setAge] = useState('');
  const [size, setSize] = useState('');
  const [result, setResult] = useState('');

  const sizeEn = {
    Pequeño: 'small',
    Mediano: 'medium',
    Grande: 'large',
    Gigante: 'giant',
  };

  const dogSizes = ['Pequeño', 'Mediano', 'Grande', 'Gigante'];

  const convertAge = () => {
    const ageTable = {
      small: [15, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80],
      medium: [15, 24, 28, 32, 37, 42, 47, 51, 56, 60, 65, 69, 74, 78, 83, 87],
      large: [15, 24, 28, 32, 39, 45, 51, 56, 61, 66, 72, 77, 82, 88, 93, 99],
      giant: [
        15, 24, 31, 38, 45, 49, 56, 64, 71, 79, 86, 93, 100, 107, 114, 121,
      ],
    };

    const calculatedAge = ageTable[sizeEn[size]][age - 1];

    setResult(
      `La edad de tu perro de tamaño ${size} en "años perrunos" es: ${calculatedAge} años`
    );
  };

  return (
    <>
      <div className="container" id="contenedor-avanzado">
        <h3>1 - Calculadora de edad de perro</h3>
        <div className="input-group mb-3">
          <input
            type="number"
            className="form-control"
            placeholder='Introduce la edad "humana" de tu perro...'
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value, 10))}
          />
          <button
            type="button"
            className="btn btn-outline-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Tamaño
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {dogSizes.map((s) => (
              <li key={s}>
                <a
                  className="dropdown-item"
                  role="button"
                  onClick={() => setSize(s)}
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="btn btn-outline-secondary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            onClick={() => convertAge()}
            style={{ borderRadius: '0 4px 4px 0' }}
            disabled={!size || !age}
          >
            Calcular
          </button>
        </div>

        <p style={{ textAlign: 'center', marginTop: '10px' }}>{result}</p>

        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => {
            setAge('');
            setSize('');
            setResult('');
          }}
        >
          Reiniciar
        </button>
      </div>
    </>
  );
}
