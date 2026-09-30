import React from "react";

import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Row,
  Col,
  Card
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import PizzaCard from "./PizzaCard";

function App() {

  // =========================
  // DATA PIZZA
  // =========================

  const pizzas = [
    {
      id: 1,
      name: "Pizza Hải Sản",
      price: "149.000đ",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
      description:
        "Hải sản tươi ngon, phô mai Mozzarella và sốt cà chua đặc biệt.",
      sale: true,
    },

    {
      id: 2,
      name: "Pizza Pepperoni",
      price: "139.000đ",
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
      description:
        "Pepperoni thơm ngon kết hợp cùng phô mai béo ngậy.",
      sale: false,
    },

    {
      id: 3,
      name: "Pizza Bò BBQ",
      price: "159.000đ",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
      description:
        "Thịt bò BBQ đậm đà, hành tây và phô mai Mozzarella.",
      sale: true,
    },

    {
      id: 4,
      name: "Pizza Phô Mai",
      price: "129.000đ",
      image:
        "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80",
      description:
        "Pizza 4 loại phô mai thơm béo dành cho tín đồ phô mai.",
      sale: false,
    },

    {
      id: 5,
      name: "Pizza Gà Nướng",
      price: "145.000đ",
      image:
        "https://images.unsplash.com/photo-1593560708920-61dd98c8c7d5?auto=format&fit=crop&w=800&q=80",
      description:
        "Gà nướng mềm thơm kết hợp với nấm và phô mai.",
      sale: true,
    },

    {
      id: 6,
      name: "Pizza Rau Củ",
      price: "119.000đ",
      image:
        "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80",
      description:
        "Rau củ tươi ngon, thanh nhẹ và phù hợp với mọi người.",
      sale: false,
    },
  ];

  return (
    <div className="pizza-page">

      {/* ==================================
          NAVBAR
      ================================== */}

      <Navbar
        expand="lg"
        variant="dark"
        className="navbar-custom"
      >
        <Container>

          <Navbar.Brand
            href="#home"
            
          >
             Pizza House
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
          />

          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto">

              <Nav.Link href="#home">
                Trang chủ
              </Nav.Link>

              <Nav.Link href="#menu">
                Thực đơn
              </Nav.Link>

              <Nav.Link href="#promotion">
  Khuyến mãi
</Nav.Link>

<Form className="d-flex ms-3">
  <Form.Control
    type="search"
    placeholder="Tìm kiếm pizza..."
    className="me-2"
  />
  <Button variant="outline-danger">
    Search
  </Button>
</Form>

            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>


      {/* ==================================
          HERO / BANNER
      ================================== */}

      <section
        id="home"
        className="hero"
      >

        <Container>

          <Row className="align-items-center">

            <Col
              md={7}
              className="hero-text"
            >

              <h1>
                Pizza ngon mỗi ngày 🍕
              </h1>

              <p>
                Thưởng thức những chiếc Pizza
                nóng hổi, thơm ngon với nguyên liệu
                tươi mới.
              </p>

             
            </Col>


            <Col
              md={5}
              className="text-center"
            >

              <div className="pizza-icon">
                🍕
              </div>

            </Col>

          </Row>

        </Container>

      </section>


      {/* ==================================
          MENU
      ================================== */}

      <section
        id="menu"
        className="menu-section"
      >

        <Container>

          <div className="section-title">

            <h2>
              🍕 Pizza của chúng tôi
            </h2>

            <p>
              Chọn món Pizza yêu thích của bạn
            </p>

          </div>


          <Row>

            {pizzas.map((pizza) => (

              <Col
                key={pizza.id}
                lg={4}
                md={6}
                sm={12}
                className="mb-4"
              >

                <PizzaCard
                  pizza={pizza}
                />

              </Col>

            ))}

          </Row>

        </Container>

      </section>


      {/* ==================================
          PROMOTION
      ================================== */}

      <section
        id="promotion"
        className="promotion"
      >

        <Container>

          <h2>
            🔥 KHUYẾN MÃI ĐẶC BIỆT
          </h2>

          <p>
            Đặt từ 2 Pizza trở lên được giảm ngay 20%
          </p>

          <Button
            href="#menu"
            className="promotion-button"
          >
            Đặt hàng ngay
          </Button>

        </Container>

      </section>


      {/* ==================================
          CONTACT / FOOTER
      ================================== */}

      <footer
        id="contact"
        className="footer"
      >

        <Container>

          <Row>

            <Col
              md={4}
              className="mb-4"
            >

              <h4>
                🍕 Pizza House
              </h4>

              <p>
                Pizza ngon - Giá tốt -
                Giao hàng nhanh.
              </p>

            </Col>


            <Col
              md={4}
              className="mb-4"
            >

              <h4>
                Liên hệ
              </h4>

              <p>
                📞 Hotline: 0123 456 789
              </p>

              <p>
                📧 Email: pizzahouse@gmail.com
              </p>

            </Col>


            <Col
              md={4}
              className="mb-4"
            >

              <h4>
                Địa chỉ
              </h4>

              <p>
                📍 Hà Nội, Việt Nam
              </p>

            </Col>

          </Row>


          <hr />

          <p className="copyright">
            © 2026 Pizza House. All rights reserved.
          </p>

        </Container>

      </footer>

    </div>
  );
}

export default App;