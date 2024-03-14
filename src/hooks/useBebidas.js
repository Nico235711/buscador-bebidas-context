import { useContext } from "react"
import BebidasContext from "../context/CategoriasProvider"

export const useBebidas = () => {
  return useContext(BebidasContext)
}