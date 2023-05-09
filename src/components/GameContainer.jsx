import React from 'react'
import CONSIGNAS from '../data'
import { RespuestasCaja } from './RespuestasCaja'

export const GameContainer = ({isCorrect, index, select, selected, siguiente}) => {
  const answers = CONSIGNAS[index].answer
  const handleSig=()=>{
    siguiente()
  }
  return (
    <section className='appContainer'>
        <div className='title'>
          {isCorrect === undefined? <h1></h1>: isCorrect?<h1 style={{color:"green"}}>Correcto</h1>:<h1 style={{color:"red"}}>Incorrecto</h1>}
        </div>
        <div className='image'>
          <img src={CONSIGNAS[index].img} alt="" />
        </div>
        <div className='questions'>
          <h4>{CONSIGNAS[index].question}</h4>
        </div>
        <div className='respuestas'>
          {answers.map((a, indice)=> (
            <RespuestasCaja a={a} index={index} select={select} selected={selected} key={indice} />
          ))}
        </div>
        {isCorrect=== undefined?
        <></>:
        <div className='btnSiguiente'
            onClick={handleSig}>Siguiente
        </div>
      }
      </section>
  )
}
