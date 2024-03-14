import { Button, Col, Form, Row } from "react-bootstrap"
import { useCategorias } from "../hooks/useCategorias"


const Formulario = () => {

  const { categorias } = useCategorias()

  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Nombre de la Bebida</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Tequila, etc..."
              name="nombre"
              id="nombre" 
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="categoria">Categoría de la Bebida</Form.Label>
            <Form.Select id="categoria" name="categoria">
              <option value="">Seleccione una Categoría</option>
              {
                categorias?.map(categoria => (
                  <option
                    value={categoria.strCategory}
                    key={categoria.strCategory}
                  >
                    {categoria.strCategory}
                  </option>
                ))
              }
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-end">
        <Col md={3}>
          <Button variant="danger" className="text-uppercase w-100 ">
            Buscar Bebida
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default Formulario