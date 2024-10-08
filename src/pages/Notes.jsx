import React, {useState} from "react";
import { Container, Button, Modal, InputGroup, Form} from "react-bootstrap";
import Note from "../components/Note";


const Notes = () => {   
    const[show, setShow] = useState(false);
    const [notelist, setNoteList] = useState([])

    const [note, setNote] = useState({
        date:'',
        title:'',
        description:''
    })
    function handleInputChange(event)

    {
        const { name, value} = event.target;
        setNote({
            ...note,
            [name]: value
        })
    }

    function saveNote() {
        if (!note.date || !note.title || !note.description) {
            alert("Por favor, preencha todos os campos zé ruela!!!");
            return;
        }

        setNoteList([...notelist, note])
        setShow(false);
        setNote({
            date:'',
            title:'',
            description: ''
        })
    }
    
    return(
    <>
        <Container className="p-5 bg-light my-4 rounded-3">

            <h1>minhas anodações</h1>
            <p>
            use essa janela para adicionar anotações e lembretes
            </p>
            <Button variant="dark" onClick={()=> setShow(true)}>Criar nova anotação</Button>
        </Container>

        <Container>
           
            {notelist.map(item => <Note title={item.title} date={item.date} description ={item.description} />)}
       
       </Container>


        <Modal show = {show}>
            <Modal.Header>
                <Modal.Title> Nova anotação </Modal.Title>
            </Modal.Header>
        
        <Modal.Body>
            <InputGroup>
            <br/>
                <InputGroup.Text> Data </InputGroup.Text>
                    <Form.Control
                    type="date"
                    Value={note.date}
                    name="date"
                    onChange={handleInputChange}
            />
            </InputGroup>
            <br/>

            <InputGroup>
            <InputGroup.Text> Titulo </InputGroup.Text>
                    <Form.Control
                    Value={note.title}
                      name="title"
                      onChange={handleInputChange}
                    />
                    </InputGroup>

                    <br/>
                    <InputGroup>
                    <InputGroup.Text> Descrição </InputGroup.Text>
                    <Form.Control
                        as="textarea"
                        Value={note.description}
                          name="description"
                          onChange={handleInputChange}
                        />
                    </InputGroup>

        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>Cancelar</Button>
            <Button variant="primary" onClick={saveNote}>Adicionar</Button>
        </Modal.Footer>
        
        </Modal>


    </>
    )
}
    
export default Notes;