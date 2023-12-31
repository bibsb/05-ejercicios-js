import { useState } from 'react';

export default function MayorDeEdad() {
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [year, setYear] = useState('');
  const [result, setResult] = useState('');

  const years = [];
  for (let i = 0; i <= 124; i++) {
    years.push(2024 - i);
  }

  function esMayorDeEdad() {
    if (age !== '') {
      //con el input introduciendo edad
      const minimumAge = country === 'en' ? 21 : 18;
      setResult(age >= minimumAge ? 'Es mayor de edad' : 'No es mayor de edad');
    } else if (year !== '') {
      //con el selecc de año
      const minimumYear = 2024 - 18;
      setResult(
        year <= minimumYear ? 'Es mayor de edad' : 'No es mayor de edad'
      );
    } else {
      setResult('Ingresa la edad o selecciona un año de nacimiento');
    }
    console.log('year:', year);
  }

  return (
    <>
      <div className="container" id="contenedor-basico">
        <h3>10 - ¿ Es mayor de edad ?</h3>

        <div className="container text-center">
          <div className="row">
            <div className="col-2">
              <select
                className="form-select"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option selected>Pais</option>
                <option value="es">España</option>
                <option value="en">EEUU</option>
              </select>
            </div>
            <div className="col-2">
              <select
                className="form-select"
                id="year"
                value={year}
                onChange={(e) => setYear(parseInt(e.target.value, 10))}
              >
                <option>Año</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-8">
              <div className="input-group mb-3 ">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Introduce una edad..."
                  value={age}
                  onChange={(e) => setAge(parseInt(e.target.value, 10))}
                />
                <button
                  className="btn btn-outline-secondary btn-sm"
                  type="button"
                  id="button-addon2"
                  onClick={() => esMayorDeEdad()}
                  disabled={age === '' && country === '' && year === ''}
                >
                  Es mayor de edad ?
                </button>
              </div>
              {/* <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value, 10))}
              /> */}
            </div>
          </div>
        </div>

        <div>
          {/* <button onClick={() => esMayorDeEdad()}>Es mayor de edad ?</button> */}
          <p style={{ textAlign: 'center', marginTop: '10px' }}>{result}</p>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => {
              setAge('');
              setCountry('');
              setResult('');
              setYear('');
            }}
          >
            Reiniciar
          </button>
        </div>
      </div>
    </>
  );
}
