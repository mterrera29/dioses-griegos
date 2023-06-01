import React from 'react'
import WinPoints from './WinPoints'
import winStar from "../images/asets/star.png"

export const CuantasPreguntas = ({cuantasPreguntas}) => {
  const preguntasCant=[10,20,30]

  function handleClick(cant){
    cuantasPreguntas(cant)
  }

  function isWin(cant){
    const puntosPartida = JSON.parse(localStorage.getItem(`puntosCant${cant}`))
    if(puntosPartida){
      return true
    }else{
      return false
    }
  }

  return (
    <section className='appContainer'>
      <section className='cuantasPregModal'>
        <h3 className='pregTitle'>¿Paleolítico o Neolítico?</h3>
        {
        preguntasCant.map((cant)=>(
          <>
            <div className="btnCant" onClick={()=>handleClick(cant)}>{cant} preguntas
            {isWin(cant) && <img className="winIcon" src={winStar} alt="" />
              }
            
            <WinPoints cant={cant} />
            </div>
          </>
        ))
        }
      </section>
    </section>
  )
}
