import React , {useState} from 'react'
import { Container ,Form, Button} from 'react-bootstrap'
import axios from 'axios'
import { Redirect ,Link} from 'react-router-dom'
import Header from '../Header/Header'

function NewSeries() {

    const [name,setName] = useState('')
    const [success, setSuccess] = useState(false)
    
    const handleChange = evt =>{
        setName(evt.target.value)
        
    }

    const save = () => {

        axios.post('/api/series',{
            name
        })
        .then( res =>{
            setSuccess(true)
        })
    }
    const handleSubmit = evt =>{
        evt.preventDefault()
    }

    if(success){
        return <Redirect to = '/series'/>
    }
    return (
        <>
        <Header title = 'Add a New TV Show'/> 
            <Container  style = {{paddingTop:'65px'}} >
                <Form onSubmit = {handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="Text" placeholder="TV series name" value = {name} onChange = {handleChange} />
                    </Form.Group>
                    <Button variant="outline-info" type="submit" onClick ={save} size = {'sm'}>
                        Save
                    </Button>
                    <Button as ={Link} to = '/series' variant = 'outline-danger' size = {'sm'} className = 'mx-3'>
                        Cancel
                    </Button>
                </Form>
            </Container>
        </>
    )
}
export default NewSeries
