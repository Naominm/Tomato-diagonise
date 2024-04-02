import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col size={12} sm={6}>
            <span className="tagline">Smart-Famer</span>
          </Col>
          <Col size={12} sm={6} className="text-sm-end text-center">
          <div class="social-icon">
          <a href="https://github.com/Naominm/Tomato-diagonise.git" class="text-gray-700 hover:text-gray-900">
    <i class="ri-github-fill text-2xl"></i>
  </a>

            <p className='align-itens center'>&copy; Copyright 2024. All Rights Reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
