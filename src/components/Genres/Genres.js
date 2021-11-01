import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import { Container, Table, Alert ,Button,Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'


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
                    <Button onClick ={() => deleteGenre(item.id)} variant ='outline-danger' className = 'mx-2' size = {'sm'}>Delete</Button>
                    <Button as ={Link} to = {'/genres/' + item.id} variant ='outline-warning' size = {'sm'}>Edit</Button>
                </td>
            </tr>
        )
    }

    console.log(data.length)
    return (
        <>
            <Header title ='Genres'/>
            <Container  style = {{paddingTop:'65px'}}>
                <Button as ={Link} to = '/genres/new' variant = 'outline-info' className = 'my-3' size = {'sm'}> New Genre</Button>
                {!data.length == 0 ?
                <Table variant ='dark' className ='align-middle'>
                    <thead >
                        <tr>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        
                        {data.map(renderRow) }
                    </tbody>
                </Table>
                : <Alert variant ='outline-warning'>
                No genres created
                </Alert>}
            </Container>
        </>
    )
}

export default Genres
