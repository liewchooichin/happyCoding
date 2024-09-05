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
            application and AI/ML application. View my detailed profile in &nbsp; 
            <a className="icon-link" target="_blank"
            href="https://www.linkedin.com/in/liewchooichin2065/">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
                Linkedin.
            </a>
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
