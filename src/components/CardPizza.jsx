import { Card, ListGroup, Button } from "react-bootstrap";
import "./CardPizza.css";

export default function CardPizza({ name, price, ingredients, img }) {
  return (
    <div>
      <Card style={{ width: "18rem", height: "30rem" }} className="Card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush text-center text-capitalize ">
          <Card.Text className="d-flex justify-content-center fw-bold m-2 text-dark">
            Ingredientes:
          </Card.Text>
          <ListGroup.Item>🍕 {ingredients}</ListGroup.Item>
        </ListGroup>
        <Card.Text className="d-flex justify-content-center mt-2">
          <strong>Precio: $</strong>
          {price}
        </Card.Text>
        <Card.Body className="d-flex justify-content-center  gap-2">
          <Button variant="dark" className="border-dark">
            Ver mas 👀
          </Button>
          <Button variant="success" className="border-dark">
            Añadir 🛒
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
