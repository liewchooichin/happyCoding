import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import mpStyles from './machineryParks.module.css';
import image001 from '../assets/machineryParks/image001.jpg';
import image002 from '../assets/machineryParks/image002.png';


export function Section001(){
    /**
     * Two cols.
     */
    return(
    <>
    <div className={mpStyles.section001} >
    <div className="d-flex flex-row mb-0
        justify-content-around">

        <div className={mpStyles.section001Div}>
            <div>
            <img src={image002} className="img-fluid" />
            </div>
        </div>

        <div className={mpStyles.section001Div}> 
            <div className="d-flex flex-column fs-5 fw-bold">
            <p className="text-center p-2">
            We have several business and industrial parks with available 
            space for your business.
            </p> 
            <Button className="align-self-center"
                as="a" variant="info">More info
            </Button>
            </div>
        </div>

    </div>
    </div>
    </>
    )
}