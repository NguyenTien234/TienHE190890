import React from "react";
import { Card, Button } from "react-bootstrap";

function PizzaCard({ pizza }) {
  return (
    <Card className="pizza-card">
      <Card.Img
        variant="top"
        src={pizza.image}
        className="pizza-image"
      />

      <Card.Body>
        <Card.Title className="pizza-name">
          {pizza.name}
        </Card.Title>

        <Card.Text className="description">
          {pizza.description}
        </Card.Text>

        <div className="card-bottom">
          <span className="price">
            {pizza.price}
          </span>

          <Button className="order-button">
            Đặt hàng
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PizzaCard;