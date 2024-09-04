/**
 * About page
 */
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Stack from "react-bootstrap/Stack";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from "react-bootstrap/ListGroup";

export function About(){
    return(
        <div>
        <Row className="mb-3">
        <h2 className="text-center">About Me</h2>
        <p>
            I am Chooi Chin. I am upgrading myself in full stack web
            application and AI/ML application.
        </p>
        </Row>
        
        <div className="d-flex flex-column justify-content-around">
        <Row>
        
        <Card style={{ width:"50%" }}>
            <Card.Body>
            <Card.Title className="text-center fw-bold">
                Frontend application
            </Card.Title>
            <Card.Text>
                <ListGroup>
                    <ListGroup.Item>ReactJS</ListGroup.Item>
                    <ListGroup.Item>Bootstrap</ListGroup.Item>
                    <ListGroup.Item>HTML/CSS/JavaScript</ListGroup.Item>
                </ListGroup>
            </Card.Text>
        </Card.Body>
        </Card>
     
        <Card style={{ width:"50%" }}>
            <Card.Body>
            <Card.Title className="text-center fw-bold">
                Backend application
            </Card.Title>
            <Card.Text>
                <ListGroup>
                    <ListGroup.Item>Java SpringBoot</ListGroup.Item>
                    <ListGroup.Item>Python Django</ListGroup.Item>
                    <ListGroup.Item>API</ListGroup.Item>
                </ListGroup>
            </Card.Text>
        </Card.Body>
        </Card>
        </Row>

        <Row>
        <Card style={{ width:"50%" }}>
            <Card.Body>
            <Card.Title className="text-center fw-bold">
                AI/ML 
            </Card.Title>
            <Card.Text>
                <ListGroup>
                    <ListGroup.Item>Natural Language Processing</ListGroup.Item>
                    <ListGroup.Item>Image Analysis</ListGroup.Item>
                    <ListGroup.Item>Generative AI</ListGroup.Item>                    
                    <ListGroup.Item>RAG Search</ListGroup.Item>
                </ListGroup>
            </Card.Text>
        </Card.Body>
        </Card>

        <Card style={{ width:"50%" }}>
            <Card.Body>
            <Card.Title className="text-center fw-bold">
                Cloud Skills
            </Card.Title>
            <Card.Text>
                <ListGroup>
                    <ListGroup.Item>Microsoft Certified Azure Developer Associate</ListGroup.Item>
                    <ListGroup.Item>Microsoft Certified Azure AI Engineer Associate</ListGroup.Item>
                    <ListGroup.Item>Microsoft Certified Azure AI Fundamentals</ListGroup.Item>                    
                    <ListGroup.Item>Microsoft Certified Azure Data Fundamentals</ListGroup.Item>
                </ListGroup>
            </Card.Text>
        </Card.Body>
        </Card>
        </Row>

        </div>    
        </div>
    )
}
