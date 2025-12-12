import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Acerca = () => {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg p-4">
                        <Card.Body>
                            <h2 className="text-center mb-4">Acerca de Eco Bots</h2>
                            <p className="lead text-center">
                                Somos una tienda dedicada a la venta de insumos y kits de robótica
                                para escuelas técnicas y aficionados a la electrónica.
                            </p>
                            <p className="text-center">
                                Con más de 10 años de presencia en el mercado, nos especializamos en
                                proveer las mejores herramientas educativas y componentes para tus proyectos.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Acerca;
