import { useState } from "react"

export function useIndex(){
  const [index, setIndex] = useState(0)

  const raiseIndex = ()=>{
     setIndex(index + 1)
  }

  const reloadIndex = ()=>{
    setIndex(0)
 }

  return {index, raiseIndex, reloadIndex}
}
