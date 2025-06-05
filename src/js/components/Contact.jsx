import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    try {
      const response = await axios.post('/api/send-email', { name, email, message });

      if (response.status === 200) {
        setStatus('sent');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <Container id="contact" className="my-5">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Form.Group as={Col} controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
        </Row>

        <Row className="mt-3">
          <Form.Group as={Col} controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
        </Row>

        <Row className="mt-3">
          <Form.Group as={Col} controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Write your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Form.Group>
        </Row>

        <div className="text-start mt-4">
          <Button variant="primary" type="submit">Send</Button>
        </div>

        <div className="mt-3">
          {status === 'sending' && <p className="text-info">Sending...</p>}
          {status === 'sent' && <p className="text-success">Sent successfully.</p>}
          {status === 'error' && <p className="text-danger">Please try again.</p>}
        </div>
      </Form>
    </Container>
  );
};

export default Contact;
