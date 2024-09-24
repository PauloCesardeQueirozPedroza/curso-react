import React from "react";
import { Container, Button, Modal } from "react-bootstrap";

const Notes = () => {   
    return(
    <>
        <Container className="p-5 bg-light my-4 rounded-3">

            <h1>minhas anodações</h1>
            <p>
            use essa janela para adicionar anotações e lembretes
            </p>
            <Button variant="dark">Criar nova anotação</Button>
        </Container>

        <Modal>
            <Modal.Header>
                <Modal.Title> Nova anotação </Modal.Title>
            </Modal.Header>
        
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary">Cancelar</Button>
            <Button variant="primary">Adicionar</Button>
        </Modal.Footer>
        
        </Modal>


    </>
    )
}
    
export default Notes;