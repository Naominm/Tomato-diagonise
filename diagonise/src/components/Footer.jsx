import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <span className="tagline">Smart-Famer</span>
          </Col>
          <Col size={12} sm={6} className="text-sm-end text-center">
            <div className="social-icon">
              <a href="https://github.com/manabil/dectma">
                <i className="ri-github-fill"></i>
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
