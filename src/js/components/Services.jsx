import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

const servicesData = [
  {
    id: 1,
    title: 'Web Development',
    text: 'Building responsive and modern websites.',
    imgSrc: '/img/laptop.jpg',
    btnText: 'Learn More',
  },
  {
    id: 2,
    title: 'Digital Marketing',
    text: 'Effective marketing strategies for your business.',
    imgSrc: '/img/digital-marketing.jpg',
    btnText: 'Learn More',
  },
  {
    id: 3,
    title: 'Consulting',
    text: 'Professional advice to grow your company.',
    imgSrc: '/img/hands.jpg',
    btnText: 'Learn More',
  },
  {
    id: 4,
    title: 'Software Solutions',
    text: 'Custom software tailored to your needs.',
    imgSrc: '/img/code.jpg',
    btnText: 'Learn More',
  },
];

const Services = () => {
  return (
    <Container id="services" className="my-5">
      <h2>Our Services</h2>
      <Row className="g-4">
        {servicesData.map(({ id, title, text, imgSrc, btnText }) => (
          <Col key={id} md={3}>
            <Card>
              <Card.Img variant="top" src={imgSrc} alt={title} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button variant="primary">{btnText}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
