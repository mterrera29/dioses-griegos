import { useState, useContext } from 'react';
import { GameContainer } from './GameContainer.jsx';
import DarkMode from './DarkMode.jsx';
import { CuantasPreguntas } from './CuantasPreguntas.jsx';
import { DarkModeContext } from '../context/darkMode';
import { SelectedProvider } from '../context/selected.jsx';

function AppGame({ data }) {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [preguntasCant, setPreguntasCant] = useState(undefined);

  const cambiarMode = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  };

  const cuantasPreguntas = (cant) => {
    setPreguntasCant(cant);
  };

  return (
    <SelectedProvider>
      <main className={darkMode ? 'mainApp dark' : 'mainApp griegos'}>
        {!preguntasCant ? (
          <>
            <h1
              className={
                darkMode
                  ? 'animate__animated animate__fadeInDown mainTitle dark'
                  : 'animate__animated animate__fadeInDown mainTitle'
              }
            >
              {data.appTitle}
            </h1>
            <CuantasPreguntas cuantasPreguntas={cuantasPreguntas} data={data} />
          </>
        ) : (
          <GameContainer
            preguntasCant={preguntasCant}
            darkMode={darkMode}
            data={data}
          />
        )}
        <DarkMode darkMode={darkMode} cambiarMode={cambiarMode} />
      </main>
    </SelectedProvider>
  );
}

export default AppGame;
