import { useState, useEffect, useContext } from "react"
import { SelectedContext } from "../context/selected"

export function useSelect (){
  const {select, setSelect }= useContext(SelectedContext)
  const selected = (answer)=> {
    if(answer=== undefined) return setSelect()
    !select && setSelect(answer)
  }
  return { select, selected}
}