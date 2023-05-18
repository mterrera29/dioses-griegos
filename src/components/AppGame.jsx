import { useState} from 'react'
import { GameContainer } from './GameContainer.jsx'
import DarkMode from './DarkMode.jsx'
import { CuantasPreguntas } from './CuantasPreguntas.jsx'


function AppGame() {
  const [darkMode, setDarkMode] = useState(false);
  const [preguntasCant, setPreguntasCant] = useState(undefined)

  const cambiarMode = ()=>{
    darkMode?setDarkMode(false):setDarkMode(true)
  }

  const cuantasPreguntas =(cant)=>{
    setPreguntasCant(cant)
  }
  
  return (
    <main className={darkMode?'mainAppDark':'mainApp'}>
      {!preguntasCant ?
        <CuantasPreguntas cuantasPreguntas={cuantasPreguntas} />
        :
        <GameContainer preguntasCant={preguntasCant} />
      }
      <DarkMode darkMode={darkMode} cambiarMode={cambiarMode}/>
    </main>
  )
}

export default AppGame
