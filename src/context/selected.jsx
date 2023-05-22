import { createContext, useState } from "react";

export const SelectedContext = createContext()

export function SelectedProvider ({children}){
  const [select, setSelect] = useState(undefined)
  return(
    <SelectedContext.Provider value={{select,setSelect}}>
      {children}
    </SelectedContext.Provider>
  )
}