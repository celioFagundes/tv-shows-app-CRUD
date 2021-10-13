import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <Navbar bg = 'dark' variant ='dark' expand ='md' fixed>
        <Container >
           <Navbar.Brand to ='/' as = {Link}>My TV Series</Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className ='ml- auto'>
                <Nav.Link to ='/genres' as ={Link}>Genres</Nav.Link>
                <Nav.Link to ='/series' as ={Link}>TV Series</Nav.Link>
             </Nav>
           </Navbar.Collapse>
          </Container>
      </Navbar>
    )
}

export default Header
