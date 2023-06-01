import React from 'react'
import "./Siguiente.css"

export const Siguiente = ({isCorrect, siguiente}) => {
  return (
    <>
    {isCorrect !== undefined &&
        <div className='btnSiguiente'
          onClick={siguiente}>
            Siguiente ▶
        </div>
          }
    </>
  )
}
