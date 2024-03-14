import { createContext, useEffect, useState } from "react";

const CategoriasContext = createContext()


export const CategoriasProvider = ({ children }) => {

  return (
    <CategoriasContext.Provider value={{

    }}>
      { children }
    </CategoriasContext.Provider>
  )
}


export default CategoriasContext