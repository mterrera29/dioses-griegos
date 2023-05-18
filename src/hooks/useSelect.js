import { useState, useEffect } from "react"
import CONSIGNAS from '../data.js'

export function useSelect ({index}){
  const [select, setSelect] = useState()
  const consignasData = CONSIGNAS[index]
  const selected = (answer)=> {
    if(answer=== undefined) return setSelect()
    !select && setSelect(answer)
  }

  return { select, selected}
}