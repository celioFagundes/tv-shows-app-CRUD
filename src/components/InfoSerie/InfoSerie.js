import React , {useState,useEffect,useRef} from 'react'
import { Container ,Form, Button,Row, Col, Badge, FloatingLabel} from 'react-bootstrap'
import axios from 'axios'
import { Redirect ,Link} from 'react-router-dom'
import Header from '../Header/Header'
function InfoSerie({match}) {

    const [form,setForm] = useState({})
    const [success, setSuccess] = useState(false)
    const [data,setData] = useState({})
    const [genres,setGenres] = useState([])
    const [mode,setMode] = useState('info')

    const editRef = useRef()
    useEffect(() =>{
        axios
            .get('/api/series/' + match.params.id)
            .then(res =>{
                setData(res.data)
                setForm(res.data)
            })
    },[match.params.id])

    useEffect(() =>{
        axios
            .get('/api/genres')
            .then(res => {
                setGenres(res.data.data)
            })
    },[data])

    const handleChange = field => evt =>{
        setForm({
            ...form,
            [field]:evt.target.value
        })
    }
    
    
    const backgroundImage ={
        minHeight : '100vh',
        backgroundImage: `url('${data.background}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

    }
    const save = () => {

        axios.put('/api/series/' + match.params.id,form)
        .then( res =>{
            setSuccess(true)
        })
    }

    const handleSubmit = evt =>{
        evt.preventDefault()
    }

    const handleSelect = value => ()  =>{
        setForm({
            ...form,
            status:value
        })
    }

    const handleEditClick = () =>{
        setMode ('Edit')
    }
    useEffect(() =>{
        if(mode === 'Edit'){
        editRef.current.scrollIntoView({ behavior: 'smooth' })}
    },[mode])
    if(success){
        return <Redirect to = '/series'/>
    }

    return (
        <div  style = {{height: '100vh',}}>
            <Header title ='Info'/>
            <div style = {backgroundImage} className = 'h-100 '>
                <div className = 'h-100 ' style = {{background:'rgba(0,0,0,0.7)'}}>
                    <div className = 'h-100 container '>
                        <Row className ='h-100 align-items-center'>
                            <Col xs ={3}>
                                <div className ='d-flex flex-row justify-content-start mb-3'>
                                    <Button as = {Link} to = {'/series'} size ={'sm'} variant ='outline-light' className ='me-4' >
                                        Back
                                    </Button>
                                        { mode !== 'Edit' && 
                                        <Button onClick = {handleEditClick}  variant ='outline-info' size = {'sm'}>
                                            Edit
                                     </Button>}
                                    
                                </div>
                                <img className ='img-fluid img-thumbnail'src = {data.poster} alt = {data.name}/>
                            </Col>
                            <Col xs ={8}>
                                <h1 className ='font-weight-light text-white'>{data.name}</h1>
                                <Row className=' lead text-white'>
                                    <Col>
                                    <p className>
                                            Genre: {form.genre_name}
                                        </p>
                                    {data.status === 'watched' 
                                    ?
                                        <Badge bg = 'success' >
                                            Watched
                                        </Badge>
                                    :
                                        <Badge bg = 'warning' text = 'dark' >
                                            To watch
                                        </Badge>
                                    }   
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            
            {
                mode === 'Edit' &&
            
            <Container fluid style = {{backgroundColor : "#212529"}} >
                <Container ref = {editRef} className = 'py-5' >
                    <Form onSubmit = {handleSubmit}>
                        <Form.Group className="mb-3 text-light" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="Text" placeholder="TV series name" value = {form.name} onChange = {handleChange('name')} />
                        </Form.Group>
                        <FloatingLabel controlId="floatingSelect" label="Genres" className="mb-3">
                            <Form.Select aria-label="Floating label select example" onChange = {handleChange('genre_id')} >
                                {genres.map(genre => <option key = {genre.id} value= {genre.id} >{genre.name}</option>)}
                            </Form.Select>
                        </FloatingLabel>
                        <Form.Group className="mb-3 text-light " controlId="formBasicCheckbox">
                            <Form.Check name ='1'type="radio" label="Watched"  id ='watched' onClick = {handleSelect('watched')} checked = {form.status ==='watched'}/>
                            <Form.Check name = '1'type="radio" label="To watch" id= 'to_watch' onClick = {handleSelect('to_watch')} checked = {form.status ==='to_watch'}/>
                        </Form.Group>
                        <Button variant="outline-info" type="submit" onClick ={save} size = {'sm'}>
                            Save
                        </Button>
                        <Button variant ='outline-danger' onClick = {() => setMode ('info')} className = 'mx-2' size = {'sm'}>Cancelar</Button>
                    </Form>
                </Container>
            </Container>
            }
        </div>     
    )
}
export default InfoSerie
