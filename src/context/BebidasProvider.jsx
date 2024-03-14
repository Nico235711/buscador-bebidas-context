import axios from "axios";
import { createContext, useEffect, useState } from "react";

const BebidasContext = createContext()


export const BebidasProvider = ({ children }) => {

  const [bebidas, setBebidas] = useState([])
  const [modal, setModal] = useState(false)
  const [idBebida, setIdBebida] = useState("")
  const [receta, setReceta] = useState([])
  
  useEffect(() => {
    
    const obtenerReceta = async () => {  
      if (!idBebida) return

      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idBebida}`
  
        const { data } = await axios(url)
        setReceta(data.drinks[0]);
  
      } catch (error) {
        console.error(error);
      }
    }
    obtenerReceta()
  }, [idBebida]);

  const consultarBebida = async datos => {  
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${datos.categoria}`

      const { data } = await axios(url)
      setBebidas(data.drinks);

    } catch (error) {
      console.error(error);
    }
  }

  const handleModalClick = () => {  
    setModal(!modal)
  }

  const handleIdBebida = id => {
    setIdBebida(id)
  }

  return (
    <BebidasContext.Provider 
      value={{
        consultarBebida,
        bebidas,
        modal,
        handleModalClick,
        handleIdBebida
      }}>
      { children }
    </BebidasContext.Provider>
  )
}

export default BebidasContext