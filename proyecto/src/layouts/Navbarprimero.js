import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
import { Outlet, Link } from 'react-router-dom'
import logo1 from '../assets/imagenes/icon1.png'


export default function Navbarprimero(){
    return(
    <> 
    <Navbar className="navBg" variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand as={Link} to = "/"><img src={logo1}/>  Juegos R.J</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to = "/">Home</Nav.Link>
            <Nav.Link as={Link} to = "/Menu">Menu</Nav.Link>
            <Nav.Link as={Link} to = "/Contactos">Contactos</Nav.Link>
            <Nav.Link as={Link} to = "/Noticias">Noticias</Nav.Link>
            <Nav.Link as={Link} to = "/Creditos">Creditos</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section>
        <Outlet> </Outlet>
    </section>
    </>
    )
}