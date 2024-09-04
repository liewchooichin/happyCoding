import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

/**
 * Import the sections.
 */
import { Section001 } from './MachineryParks001';
import { Section002 } from './MachineryParks002';
import { Section003 } from './MachineryParks003';


export function MachineryParks(){
    return(
        <Container>
        <h1 className="text-center fs-1">Business and Industrial Parks</h1>
        <Section001/>
        <Section002 />
        <Section003 />
        </Container>
    )
}