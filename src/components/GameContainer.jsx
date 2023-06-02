import React from 'react'
import CONSIGNAS from '../data.js'
import "./GameContainer.css"
import TITLES from '../titles.js'
import { useState, useEffect } from 'react'
import { Respuestas } from './Respuestas'
import { ModalWin } from './ModalWin'
import { useIndex } from '../hooks/useIndex'
import { useSelect } from '../hooks/useSelect'
import { Siguiente } from './Siguiente.jsx'
import { useCorrect } from '../hooks/useCorrect.js'
import { Image } from './Image.jsx'

export const GameContainer = ({preguntasCant, darkMode}) => {
  const [shuffledConsignas, setShuffledConsignas] = useState(CONSIGNAS)
  const {index, raiseIndex, reloadIndex} = useIndex()
  const {select, selected} = useSelect()
  const {isCorrect, puntos, isLoading, resetPts} = useCorrect({index, select})
  const [winner, setWinner] = useState (false)

  useEffect(() => {
      setShuffledConsignas(CONSIGNAS.sort(() => Math.random() - 0.5))
  }, [])

  const consignasData = shuffledConsignas[index]

  useEffect(() => {
    if(index === preguntasCant){
      setWinner(true)
    }
  }, [index])

  const reloaderGame =()=>{
    selected()
    reloadIndex()
    setWinner(false)
    resetPts()
  } 
  const siguiente = ()=>{
    raiseIndex()
    selected();
  }

  return (
    <>
      <h4 className={darkMode?'animate__animated animate__fadeInDown titleGame dark':'animate__animated animate__fadeInDown titleGame'}>{TITLES[0].appTitle}</h4>
      {isLoading ?
      <span className='loader'></span>
      :winner?
      <ModalWin winner={winner} reloaderGame={reloaderGame} puntos={puntos} preguntasCant={preguntasCant}/>
      :
      <>
        <section className='appContainer'>
          <div className='title'>
            {isCorrect === undefined? <h1></h1>: isCorrect?<h1 style={{color:"#4cb84c"}}>Correcto</h1>:<h1 style={{color:"#d64040"}}>Incorrecto</h1>}
          </div>
          <Image index={index} preguntasCant={preguntasCant} consignasData={consignasData} isCorrect={isCorrect} siguiente={()=>siguiente()}/>
          <div className='questions'>
            <h4>{consignasData.question}</h4>
          </div>
          <Respuestas consignasData={consignasData} />
          {/* <Siguiente isCorrect={isCorrect} siguiente={()=>siguiente()} /> */}
        <div className='puntos'>Pts : {puntos} </div>
        </section>
      </>
    }
  </>
  )
}
