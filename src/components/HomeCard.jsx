/* Assets and resources */
import reactLogo from '../assets/react.svg'
import dataContent from '/cardcontent.json?url'
/* Libraries */
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react'


/**
 * Using async and await.
 * @returns data read
 */
async function readContentFromJson(){
    const filename = {dataContent};
    const response = await fetch(filename);
    console.log(response.statusText);
    console.log(response.json());
    const data = {name: "some name"};
    //const data = await response.json();
    console.log(data);
    return data;
}

/**
 * Fetch the content from cardcontent.json in the
 * public folder. Then, put the content into the 
 * card.
 * @returns info cards.
 */
export function HomeCard(){
    /**
     * Read content from json.
     */
    const [content, setContent] = useState([]);

    useEffect(() => {
        fetch("cardcontent.json")
            .then(response => response.json())
            .then(data => {setContent(data)})
    }, [])

    return(
        <div>
        <Row className="grid gap-3">
        {
            content.map(item => 
                (
                    
                    <Card key={item.name} style={{ width: "18rem" }}
                      className="p-3">
                    <Card.Img variant="top" src={reactLogo} width="150" height="100"/>
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                        {item.title}<br/>
                        {item.content}
                      </Card.Text>
                      <Button as="a" variant="primary" 
                        href={item.siteUrl} target="_blank">
                        {item.siteName}
                        </Button>
                    </Card.Body>
                  </Card>
                )
            )
        }
        
        </Row>
        </div>
    )
}