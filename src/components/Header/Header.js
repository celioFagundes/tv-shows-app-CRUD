import React , {useState,useEffect}from 'react'
import {Navbar,Container,Nav, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Header({title}) {

      
    return (
        <Navbar  variant ='dark' fixed ='top'>
        <Container >
          <Navbar.Brand  ><h1 className ='display-6 text-capitalize'>{title}</h1></Navbar.Brand>
          <Nav className ='ml- auto d-flex flex-row justify-content-start'>
            <Button as ={Link} to = '/' variant = 'outline-light' size = {'sm'}  className = 'me-4'>
              Home
            </Button>
            { title !== 'TV Shows' && title !== 'Info' && title !== 'Add a New TV Show' ? 
            <Button as ={Link} to = '/series' variant = 'outline-light' size = {'sm'} className = ''>
              Series
            </Button>
            :
            <Button as ={Link} to = '/genres' variant = 'outline-light' size = {'sm'} className = ''>
              Genres
            </Button>
            }
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Header
