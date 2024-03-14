import { Button, Card, Col } from "react-bootstrap"


const Bebida = ({ bebida }) => {

  return (
    <Col md={4} lg={3}>
      <Card className="mt-5">
        <Card.Img
          variant="top"
          src={bebida.strDrinkThumb}
          alt={`Imagen de la bebida: ${bebida.strDrink}`} />

          <Card.Body>
            <Card.Title
              style={{height: 48 }}
              className="text-center"
            >
              {bebida.strDrink}
            </Card.Title>
            <Button className="mt-5 text-uppercase ">Ver Receta</Button>
          </Card.Body>
      </Card>
    </Col>
  )
}

export default Bebida