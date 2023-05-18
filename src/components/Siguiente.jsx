import React from 'react'

export const Siguiente = ({isCorrect, siguiente}) => {
  const handleSig=()=>{
    siguiente()
  }
  return (
    <>
    {isCorrect !== undefined &&
        <div className='btnSiguiente'
          onClick={handleSig}>
            Siguiente
        </div>
          }
    </>
  )
}
