import React from 'react'
import { useEffect } from 'react'
import "./ModalWin.css"
import confetti from 'canvas-confetti'
import { Link } from 'react-router-dom'

  export function ModalWin({winner, reloadGame, puntos, preguntasCant}) {
    const total = (puntos * 100) / preguntasCant
    const winnerText = total===100? "¡Experto!": total>90 ? "¡Excelente!": (total>80)?"¡Muy Bien!": (total>=70)? "¡Bien!":"¡Debes Mejorar!"

    const handleReload = ()=>{
      reloadGame()
    }
    useEffect(() => {
      if(total>=70){
      confetti()
    }
    }, [winner])
    

    if( winner){
    return (
      <section className='winner'>
        <div className='text'>
          <h2 style={{fontSize: "40px", color: "rgb(72, 187, 72)"}}>{winnerText}</h2>
          <section className='winnerPoints'>
          <h4 >Obtuviste el:</h4>
          <h2 style={{fontSize: "40px", color: "rgb(255, 255, 63)"}}>{total}%</h2>
          <h4 >de los puntos.</h4>
          </section>
            <div className='btnWinner' onClick={handleReload}>Rehacer</div>
            <Link to="/">
            <div className='btnWinner' >Menú de Inicio</div>
            </Link>
        </div>
      </section>
    );}
  }
