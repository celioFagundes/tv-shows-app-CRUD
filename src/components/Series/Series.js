import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import { Container, Table, Alert ,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'



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
            <tr key = {item.id}>    
                <td>{item.name}</td>
                <td>
                    <Button onClick ={() => deleteSeries(item.id)} variant ='danger' className = 'mx-2'>Delete</Button>
                    <Button as ={Link} to = {'/series/' + item.id} variant ='primary'>Info</Button>
                </td>
            </tr>
        )
    }

    if(data.length === 0){
        return(
            <Container>
                <h1>TV series</h1>
               
                <Alert variant ='warning'>
                    No TV series 
                </Alert>
            </Container>
        )
    }
    return (
        <Container>
            <h1>Tv Shows</h1>
            <Button as ={Link} to = '/series/new' variant = 'info' className = 'my-1'> New TV Series</Button>
            <Table striped bordered hover variant ='dark'>
                <thead>
                    <tr>     
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(renderRow)}
                </tbody>
            </Table>
        </Container>
    )
}

export default Series
