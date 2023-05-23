import React from 'react'

export const CuantasPreguntas = ({cuantasPreguntas}) => {
  const preguntasCant=[5,20,30]

  function handleClick(cant){
    cuantasPreguntas(cant)
  }

  return (
    <section className='appContainer'>
      <section className='cuantasPregModal'>
        <h3 className='pregTitle'>¿Paleolítico o Neolítico?</h3>
        {
        preguntasCant.map((cant)=>(
          <div className="btnCant" onClick={()=>handleClick(cant)}>{cant} preguntas</div>
        ))
        }
      </section>
    </section>
  )
}
