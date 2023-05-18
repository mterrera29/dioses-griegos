import { useState, useEffect } from "react";
import CONSIGNAS from '../data.js'

 export function useCorrect({index, select}){
  const [isCorrect, setIsCorrect] = useState(undefined)
  const [puntos, setPuntos] = useState(0)
  const [isLoading, setIsLoading] = useState(true);

  const consignasData = CONSIGNAS[index]
  console.log(index)

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

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsCorrect(undefined)
    }, 1500);
  }, [index])

  const resetPts = () =>{
    setPuntos(0)
  }

  return ({isCorrect, puntos, isLoading, resetPts})
}