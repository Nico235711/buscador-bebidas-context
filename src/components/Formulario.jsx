import { Button, Col, Form, Row } from "react-bootstrap"


const Formulario = () => {

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
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  )
}

export default Formulario