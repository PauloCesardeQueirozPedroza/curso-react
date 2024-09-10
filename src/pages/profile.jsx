import React from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import '../styles/Profile.css'

const Profile = () => {

    return(
        <Container>
            <Row className="banner justify-content-center black-text">
                <Col md={6} className="text-center">
                <Image src="download.jfif" roundedCircle className="mb-3 profile-img"/>
                <h2>Paulo Cesar Developer</h2>
                <p>Full Stack Developer</p>
                </Col>
            </Row>
            <Row className="justify-content-center mt-4">
                <Col md={8}>
                <Card>
                  <Card.Body>
                    <Card.Title>
                        Sobre Minha Pessoa
                    </Card.Title>
                    <Card.Text>
                        Eu sou uma pessoa calma e neutra em relação a maioria das coisas, se gosto de algo, vou ficar divagando sobre esse algo eternamente, minha frase de efeito em jogos é "  Eu, o Imperador prestes a despertar, afundarei você em um eterno sofrimento negro em um eterno vazio icolor"
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Col>
            </Row>

            <Row className="justify-content-center mt-4">
                <Col md={8}>
                
                </Col>
                <Card.Body>
                    <Card.Title>
                        skills
                    </Card.Title>
                    <ul>
                        <li>HTML, CSS, Bootstrap</li>
                        <li>JavaScript</li>
                        <li>Design de jogos</li>
                    </ul>
                    </Card.Body>
            </Row>
        </Container>


    )
}

export default Profile;