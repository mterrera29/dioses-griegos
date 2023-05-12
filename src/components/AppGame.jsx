import { useState, useEffect } from 'react'
import CONSIGNAS from '../data.js'
import { ModalWin } from './ModalWin.jsx'
import { GameContainer } from './GameContainer.jsx'
import DarkMode from './DarkMode.jsx'
import star from "../images/asets/star.png"
import { CuantasPreguntas } from './CuantasPreguntas.jsx'

function AppGame() {
  const [select, setSelect] = useState()
  const [isCorrect, setIsCorrect] = useState(undefined)
  const [index, setIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [puntos, setPuntos] = useState(0)
  const [winner, setWinner] = useState (false)
  const [preguntasCant, setPreguntasCant] = useState(undefined)
  const consignasData = CONSIGNAS[index]


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
        if(select === consignasData.correct){
          setIsCorrect(true);
          setPuntos(puntos +1)
        }else{
          setIsCorrect(false)
        }
    }
  }, [select])

  const selected = (answer)=> {
    !select && setSelect(answer)
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

  const cuantasPreguntas =(cant)=>{
    setPreguntasCant(cant)
  }
  
  return (
    <main className={darkMode?'mainAppDark':'mainApp'}>
      {!preguntasCant &&
       <CuantasPreguntas cuantasPreguntas={cuantasPreguntas} />
      }
      {preguntasCant &&isLoading ?
      
        <span className='loader'></span>
        :winner?
        <ModalWin winner={winner} reloadGame={reloadGame} puntos={puntos} preguntasCant={preguntasCant}/>
        :preguntasCant !== undefined?
        <GameContainer index={index} isCorrect={isCorrect} select={select} selected={selected} puntos={puntos} siguiente={siguiente} consignasData={consignasData} preguntasCant={preguntasCant} />
        : <div></div>
      }
      <DarkMode darkMode={darkMode} cambiarMode={cambiarMode}/>
    </main>
  )
}

export default AppGame
