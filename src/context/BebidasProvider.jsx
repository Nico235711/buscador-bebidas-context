import axios from "axios";
import { createContext, useEffect, useState } from "react";

const BebidasContext = createContext()


export const BebidasProvider = ({ children }) => {

  return (
    <BebidasContext.Provider value={{
    }}>
      { children }
    </BebidasContext.Provider>
  )
}


export default BebidasContext