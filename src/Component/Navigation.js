import React, { Component } from 'react';
import {Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Styles = styled.div`  
  .navbar {
    background-color : #222;
    
  }
  a, .navbar-brand, .navbar-nav .nav-link{
      color: gray;
      text-align: right;

    &:hover{
      color: white;
   }
 }
`;

class Navigation extends Component {
    render() {
     return (
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand href="/">TADJOUDINE MOUHAMED</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">   
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link>
                  <Link to ="/">HOME</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to ="/About">ABOUT</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to ="/Contact">CONTACT</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to ="/Portofolio">PROJECTS</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to ="/Resume">RESUME</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
     );
    
    }
}

export default Navigation;