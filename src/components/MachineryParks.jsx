import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

/**
 * Import the sections.
 */
import mpStyles from "./machineryParks.module.css";
import { Section001 } from './MachineryParks001';
import { Section002 } from './MachineryParks002';
import { Section003 } from './MachineryParks003';
import { Section004 } from './MachineryParks004';
import { Section005 } from './MachineryParks005';
import { Section006 } from './MachineryParks006';


export function MachineryParks(){
    return(
        <div>
        <div className={mpStyles.heading}>
        <h1 className="text-center" 
            style={{fontSize:"3.5rem"}}>
            Business and Industrial 
            Parks
        </h1>
        </div>
        <Section001 />
        <Section002 />
        <Section003 />
        <Section004 />
        <Section005 />
        <Section006 />
        <div>
            <footer>
            <hr></hr>
            <p className="fs-6">
            Credits: Machinery Parks follows the example template from 
            <a href="https://nicepage.com/website-templates/preview/machinery-parks-for-industrial-48832?device=desktop" target="_blank">Nice Page.
            </a>
            </p>
            </footer>
        </div>
        </div>
    )
}