import React from 'react'

export const CuantasPreguntas = ({cuantasPreguntas}) => {
  function handleClick(cant){
    cuantasPreguntas(cant)
  }

  return (
    <section className='appContainer'>
        <div className="btnCant" onClick={()=>handleClick(5)}>10 preguntas</div>
        <div className="btnCant" onClick={()=>handleClick(20)}>20 preguntas</div>
        <div className="btnCant" onClick={()=>handleClick(30)}>30 preguntas</div>
      </section>
  )
}
