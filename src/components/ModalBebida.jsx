import { Button, Image, Modal } from "react-bootstrap"
import { useBebidas } from "../hooks/useBebidas"

const ModalBebida = () => {

  const {
    modal,
    handleModalClick,
    receta,
    cargando,
    handleFavoritos
  } = useBebidas()

  const mostrarIngredientes = () => {
    let ingredientes = []

    for (let index = 1; index <= 15; index++) {
      if (receta[`strIngredient${index}`]) {
        ingredientes.push(
          <li
            key={receta[`strIngredient${index}`]}
          >
            {receta[`strIngredient${index}`]}
            {receta[`strMeasure${index}`]}
          </li>
        )
      }
    }

    return ingredientes
  }

  return (
    !cargando && (
      <Modal show={modal} onHide={handleModalClick}>
        <Image src={receta.strDrinkThumb} alt={`Bebida: ${receta.strDrink}`} />
        <Modal.Header>
          <Modal.Title>{receta.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-5">
            <h2>Instrucciones</h2>
            {
              receta?.strInstructions
            }
            <h3 className="mt-4">Ingredientes y Cantidades</h3>
            { mostrarIngredientes() }
          </div>
        </Modal.Body>
      </Modal>
    )
  )
}

export default ModalBebida