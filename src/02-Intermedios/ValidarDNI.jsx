import { useState, useRef } from 'react';

export default function ValidarDNI() {
  const [document, setDocument] = useState('');
  const [type, setType] = useState('DNI');

  const inputRef = useRef(null);

  const checkDocument = () => {
    if (document.length === 9 && (type === 'DNI' || type === 'NIE')) {
      const number = document.slice(0, 8);
      const letter = document.slice(-1).toUpperCase();

      if (!isNaN(number)) {
        checkDNI(number, letter);
      } else if (letter === 'X' || letter === 'Y' || letter === 'Z') {
        checkNIE(number, letter);
      } else {
        alert('Introduce un DNI o NIE válido.');
      }
    } else {
      alert('El documento debe contener 9 caracteres.');
    }
  };

  const checkDNI = (number, letter) => {
    const expectedLetter = calculateLetter(number);
    if (letter === expectedLetter) {
      alert('El DNI es correcto.');
    } else {
      alert('El DNI es incorrecto.');
    }
  };

  const calculateLetter = (numDNI) => {
    const validatedLetters = 'TRWAGMYFPDXBNJZSQVHLCKE';
    return validatedLetters[numDNI % 23];
  };

  const checkNIE = (number, initialLetter) => {
    const expectedLetter = calculateLetterNIE(number, initialLetter);
    if (expectedLetter === initialLetter) {
      alert('El NIE es correcto.');
    } else {
      alert('El NIE es incorrecto.');
    }
  };

  const calculateLetterNIE = (number, initialLetter) => {
    const validatedLetters = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const nieNumber = initialLetter + number;
    return validatedLetters[(nieNumber + initialLetter) % 23];
  };

  return (
    <>
      <div className="container" id="contenedor-basico">
        <h3>1 - Validador de DNI</h3>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Introduce un DNI o NIE..."
            value={document}
            onChange={(e) => setDocument(e.target.value.toUpperCase())}
            ref={inputRef}
          />
          <button
            type="button"
            className="btn btn-outline-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Sistema
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <a
                className="dropdown-item"
                role="button"
                onClick={() => setType('DNI')}
              >
                DNI
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                role="button"
                onClick={() => setType('NIE')}
              >
                NIE
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => {
              checkDocument();
              inputRef.current.focus();
            }}
            style={{ borderRadius: '0 4px 4px 0' }}
            disabled={!type || !document}
          >
            Validar
          </button>
        </div>

        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => {
            setDocument('');
            setType('DNI');
          }}
        >
          Reiniciar
        </button>
      </div>
    </>
  );
}
