import { useState, useEffect } from 'react'
import CONSIGNAS from '../data.js'
import { ModalWin } from './ModalWin.jsx'
import { GameContainer } from './GameContainer.jsx'
import DarkMode from './DarkMode.jsx'

function AppGame() {
  const [select, setSelect] = useState()
  const [isCorrect, setIsCorrect] = useState(undefined)
  const [index, setIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [puntos, setPuntos] = useState(0)
  const [winner, setWinner] = useState (false)
  const [preguntasCant, setPreguntasCant] = useState(10)

  

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      if(index === preguntasCant){
        setWinner(true)
      }
    }, 1500);
  }, [index])

  useEffect(() => {
    if (select) {
        if(select === CONSIGNAS[index].correct){
          setIsCorrect(true);
          setPuntos(puntos +1)
        }else{
          setIsCorrect(false)
        }
    }

  }, [select])

  const selected = (a)=> {
    !select && setSelect(a)
  }

  const reloadGame =()=>{
    setSelect()
    setIsCorrect(undefined)
    setIndex(0)
    setPuntos(0)
    setWinner(false)
  }

  const siguiente = ()=>{
    setIndex(index + 1)
    setSelect();
    setIsCorrect(undefined);
    setIsLoading(true)
  }

  const cambiarMode = ()=>{
    darkMode?setDarkMode(false):setDarkMode(true)
  }
  
  return (
    <main className={darkMode?'mainAppDark':'mainApp'}>
      <div className='puntos'>Puntos: {puntos} de {preguntasCant}
      </div>
      {isLoading?
        <span className='loader'></span>
        :winner?
        <ModalWin winner={winner} reloadGame={reloadGame} puntos={puntos} preguntasCant={preguntasCant}/>
        :
        <GameContainer isCorrect={isCorrect} index={index} select={select} selected={selected} puntos={puntos} siguiente={siguiente} />
      }
      <DarkMode darkMode={darkMode} cambiarMode={cambiarMode}/>
    </main>
  )
}

export default AppGame
