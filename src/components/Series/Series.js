import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import { Container, Row, Alert ,Button, Card, Col,CardGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'


function Series() {

    const [data,setData] = useState([])
    
    
    useEffect(()=>{
        axios
            .get('/api/series')
            .then(res =>{
                setData(res.data.data)
            })
    },[])

    const deleteSeries = id =>{
        axios.delete('/api/series/' + id)
        .then(res =>{
            const filtered = data.filter(item => item.id !== id)
            setData(filtered)
    })
    }
    const renderRow = item =>{
        return(
            <Col  key = {item.id}  >
                <Card  className = ' mt-4  mb-5 px-0 mx-0 text-white border-start-0 border-dark'style={{ height: '17rem',width: '100%' }} bg = 'dark'>
                    <Card.Img variant="top" src={item.background} style = {{height: '10rem',width:'100%'}}/>
                    <Card.Body className = 'd-flex flex-column justify-content-between align-items-start '>
                        <Card.Title className =''>{item.name}</Card.Title>
                        <div className = 'd-flex  justify-content-between align-items-center w-100' >
                        <Button as ={Link} to = {'/series/' + item.id} variant ='outline-info' size = {'sm'}>Info</Button>
                            <Button onClick ={() => deleteSeries(item.id)} variant ='outline-danger' className = 'mx-2' size = {'sm'}>Delete</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        )
    }

    
    return (
        <div className ='h-100' style = {{paddingTop:'65px'}}>
            <Header title = 'TV Shows'/>
            <Container >
                <Container className = ' w-100 h-100 mt-4'bg = 'dark'>
                    <Button as ={Link} to = '/series/new' variant = 'outline-light' size = {'sm'}>
                        New TV Series
                    </Button>       
                    {data.length === 0 
                    ?
                    <Alert variant ='warning'>
                        No TV series 
                    </Alert>
                    :
                    <Row className = 'h-100 '  xs = {1} sm ={2} lg = {4} md={3} >{data.map(renderRow)}</Row>
                    }
                </Container>
            </Container>
        </div>
    )
}

export default Series
