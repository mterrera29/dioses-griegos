import { useState, useContext} from 'react'
import { GameContainer } from './GameContainer.jsx'
import DarkMode from './DarkMode.jsx'
import { CuantasPreguntas } from './CuantasPreguntas.jsx'
import { DarkModeContext } from "../context/darkMode";
import { SelectedProvider } from '../context/selected.jsx';



function AppGame() {
  const {darkMode, setDarkMode} = useContext(DarkModeContext);
  const [preguntasCant, setPreguntasCant] = useState(undefined)

  const cambiarMode = ()=>{
    darkMode?setDarkMode(false):setDarkMode(true)
  }

  const cuantasPreguntas =(cant)=>{
    setPreguntasCant(cant)
  }
  
  return (
      <SelectedProvider>
        <main className={darkMode?'mainApp dark':'mainApp'}>
          {!preguntasCant ?
            <>
              <h1 className={darkMode?'mainTitle dark':'mainTitle'}>prehistoric games</h1>
              <CuantasPreguntas cuantasPreguntas={cuantasPreguntas}  />
            </>
            :
            <GameContainer preguntasCant={preguntasCant} darkMode={darkMode} />
          }
          <DarkMode darkMode={darkMode} cambiarMode={cambiarMode}/>
        </main>
      </SelectedProvider>
  )
}

export default AppGame
