import React from 'react'
import { Button, Container ,Row, Col} from 'react-bootstrap'
import  './style.css'
import { Link } from 'react-router-dom'

function Home() {
    
    return (
        <div  className = 'background' style = {{height:'100vh'}}>
            <div className = ' h-100 ' style = {{background: 'rgba(0, 0, 0, 0.7)'}}>
                <Container className = 'h-100 ' >
                    <Row className = 'h-100 align-items-center text-white'>
                        <Col className = 'h-50'>
                            <h1 className = 'display-1 mb-5'>My TV Shows </h1>
                            <Row className = 'mb-5'>
                                
                                <Col sm={2}><Button as = {Link} to ='/series'  variant = 'outline-light'>Check your TV Shows</Button></Col>
                                <Col sm={2}><Button as = {Link} to ='/genres' variant = 'outline-light' >Check your Genres</Button></Col>
                            </Row>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        </div>
    )
}

export default Home
