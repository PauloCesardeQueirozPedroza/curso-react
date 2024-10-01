import React, {useState} from "react";
import { Container, Button, Modal, InputGroup, Form} from "react-bootstrap";

const Notes = () => {   
    const[show, setShow] = useState(false);
    const [notelist, setNoteList] = useState({
    })
    const [note, setNote] = useState({
        date:'',
        title:'',
        description:''
    })
    function handleInputChange(event)

    {
        const { name, Value} = event.target;
        setNote({
            ...note,
            [name]: Value
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

        <Modal show = {show}>
            <Modal.Header>
                <Modal.Title> Nova anotação </Modal.Title>
            </Modal.Header>
        
        <Modal.Body>
            <InputGroup>
            <br/>
                <InputGroup.Text> Data </InputGroup.Text>
                    <form.Control
                    type="date"
                    Value={note.date}
            />
            </InputGroup>
            <br/>

            <InputGroup>
            <InputGroup.Text> Titulo </InputGroup.Text>
                    <form.Control
                    Value={note.title}
                    />
                    </InputGroup>

                    <br/>
                    <InputGroup>
                    <InputGroup.Text> Descrição </InputGroup.Text>
                    <form.Control
                        as="textarea"
                        Value={note.description}
                        />
                    </InputGroup>

        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>Cancelar</Button>
            <Button variant="primary">Adicionar</Button>
        </Modal.Footer>
        
        </Modal>


    </>
    )
}
    
export default Notes;