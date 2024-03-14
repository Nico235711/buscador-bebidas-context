import axios from "axios";
import { createContext, useEffect, useState } from "react";

const BebidasContext = createContext()


export const BebidasProvider = ({ children }) => {

  const [bebidas, setBebidas] = useState([])

  const consultarBebida = async datos => {  
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${datos.categoria}`

      const { data } = await axios(url)
      setBebidas(data.drinks);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <BebidasContext.Provider 
      value={{
        consultarBebida,
        bebidas
      }}>
      { children }
    </BebidasContext.Provider>
  )
}


export default BebidasContext