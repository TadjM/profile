import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Image, Row,Card} from 'react-bootstrap'

class Header extends Component {
    render() {
        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <Card className="face front" border="primary" style={{ width: '40rem' , height: '45rem'}}>
                        <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg" />
                        <Container>
                            <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                              <Col xs={6} md={4}>
                              <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" roundedCircle />
                              </Col>
                            </Row>
                        </Container>
                        <Card.Body>
                          <Card.Title className="font-weight-bold mb-3"> Tadjoudine Mouhamed</Card.Title>
                            <Card.Text>
                                <p>I am a Software developper </p>
                                <Card.Link href="#">Contact</Card.Link>
                                <Card.Link href="#">Resume</Card.Link>
                                <Card.Link href="#">Resume</Card.Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>This is some text within a card body.</Card.Body>
                    </Card>
            </div>
        );
    }
}

export default Header;