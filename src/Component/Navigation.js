import React, { Component } from 'react';
import {Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`  
  .navbar {
      background-color : #222;
  }
  
  .navbar-brand, .navbar-nav .nav-link{
      color: #bbb;
  

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
            <Navbar.Brand href="/">Tadj</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ml-aauto">
                   <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/About">About</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/Contact">Contact</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/Portofolio">Portofolio</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/Resume">Resume</Nav.Link></Nav.Item>
               </Nav>
            </Navbar.Collapse>
        </Navbar>
            
       </Styles>
     );
    
    }
}

export default Navigation;