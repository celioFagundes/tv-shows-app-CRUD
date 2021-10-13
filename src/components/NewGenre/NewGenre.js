import React , {useState} from 'react'
import { Container ,Form, Button} from 'react-bootstrap'
import axios from 'axios'
import { Redirect } from 'react-router'

function NewGenre() {

    const [name,setName] = useState('')
    const [success, setSuccess] = useState(false)
    
    const handleChange = evt =>{
        setName(evt.target.value)
        
    }

    const save = () => {

        axios.post('/api/genres',{
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
        return <Redirect to = '/genres'/>
    }
    return (
        <Container>
            <h1>New genre</h1>
            <Form onSubmit = {handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="Text" placeholder="Genre Name" value = {name} onChange = {handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick ={save}>
                    Save
                </Button>
            </Form>
        </Container>
    )
}
export default NewGenre
