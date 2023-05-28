import { useState, useEffect } from "react";

 export function useCorrect({index, select}){
  const [isCorrect, setIsCorrect] = useState(undefined)
  const [puntos, setPuntos] = useState(0)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (select) {
        if(select.correct === true){
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