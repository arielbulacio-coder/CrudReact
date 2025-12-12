import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Gracias ${formData.nombre}, hemos recibido tu consulta. Te responderemos a ${formData.email} a la brevedad.`);
        setFormData({ nombre: '', email: '', mensaje: '' });
    };

    return (
        <Container className="mt-5 mb-5">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Card className="shadow">
                        <Card.Header className="bg-primary text-white text-center">
                            <h3>Contáctanos</h3>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                        placeholder="Tu nombre"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="tucorreo@ejemplo.com"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Mensaje</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        required
                                        placeholder="Escribe tu consulta aquí..."
                                    />
                                </Form.Group>

                                <div className="d-grid">
                                    <Button variant="primary" type="submit">
                                        Enviar Consulta
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Contacto;
