import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import '../index.css';


class Portofolio extends Component {
    render() {
        return (
            <div >
                <Card className='projects'>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary" href="https://master.d2mdn3yvvbw50z.amplifyapp.com/">go</Button>
                   </Card.Body>
                </Card>
                <Card className='projects'>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                     Some quick example text to build on the card title and make up the bulk of
                     the card's content.
                    </Card.Text>
                    <Button variant="primary">go</Button>
                   </Card.Body>
                </Card>
                <Card className='projects'>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">go</Button>
                   </Card.Body>
                </Card>
                <Card className='projects'>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">go</Button>
                   </Card.Body>
                </Card>
                <Card className='projects'>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">go</Button>
                   </Card.Body>
                </Card>
                <Card className='projects'>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">go</Button>
                   </Card.Body>
                </Card>

            </div>
        );
    }
}

export default Portofolio;