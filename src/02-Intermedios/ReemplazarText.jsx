import { useState } from 'react';

export default function ReemplazarText() {
  const [sentence, setSentence] = useState('');
  const [oldWord, setOldWord] = useState('');
  const [newWord, setNewWord] = useState('');
  const [result, setResult] = useState('');

  const replaceWord = () => {
    const words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
      if (words[i] === oldWord) {
        words[i] = newWord;
      }
    }

    setResult(words.join(' '));
  };

  return (
    <>
      <div className="container" id="contenedor-intermedio">
        <h3>3 - Reemplazador de texto</h3>

        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Introduce una frase..."
            value={sentence}
            onChange={(e) => setSentence(e.target.value)}
            id="floatingTextarea2"
            style={{ height: '100px' }}
          />
          <label htmlFor="floatingTextarea2">Introduce una frase...</label>
        </div>

        <div className="row">
          <div className="col-5">
            <input
              type="text"
              className="form-control"
              placeholder="Introduce la palabra a cambiar..."
              value={oldWord}
              onChange={(e) => setOldWord(e.target.value)}
            />
          </div>

          <div className="col-7">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Introduce la palabra nueva..."
                value={newWord}
                onChange={(e) => setNewWord(e.target.value)}
              />
              <button
                className="btn btn-outline-secondary btn-sm"
                type="button"
                id="button-addon2"
                onClick={() => replaceWord()}
                disabled={!oldWord || !newWord}
              >
                Reemplazar palabra
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
            setSentence('');
            setResult('');
            setOldWord('');
            setNewWord('');
          }}
        >
          Reiniciar
        </button>
      </div>
    </>
  );
}
