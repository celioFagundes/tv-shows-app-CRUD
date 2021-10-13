import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import { Container, Table, Alert ,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Genres() {

    const [data,setData] = useState([])
    
    
    useEffect(()=>{
        axios
            .get('/api/genres')
            .then(res =>{
                setData(res.data.data)
            })
    },[])

    const deleteGenre = id =>{
        axios.delete('/api/genres/' + id)
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
                    <Button onClick ={() => deleteGenre(item.id)} variant ='danger' className = 'mx-2'>Delete</Button>
                    <Button as ={Link} to = {'/genres/' + item.id} variant ='warning'>Edit</Button>
                </td>
            </tr>
        )
    }

    if(data.length === 0){
        return(
            <Container>
                <h1>Genres</h1>
                <Button as ={Link} to = '/genres/new' variant = 'info' className = 'my-1'> New Genre</Button>
                <Alert variant ='warning'>
                    No genres created
                </Alert>
            </Container>
        )
    }
    return (
        <Container>
            <h1>Genres</h1>
            <Button as ={Link} to = '/genres/new' variant = 'info' className = 'my-1'> New Genre</Button>
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

export default Genres
