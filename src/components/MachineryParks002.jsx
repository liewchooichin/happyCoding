import image003 from "../assets/machineryParks/image003.png";
import mpStyles from "./machineryParks.module.css";

import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Stack from "react-bootstrap/Stack";

export function Section002(){

    return(
        <div className={mpStyles.section002}>
        <Row>
            <Col>
            <div className="d-block text-center pt-5">
            <p className="fs-2">Construction Machinery Co.</p>
            <p className="fs-4">We has a proud tradition of service as 
                a General Contractor since 1974.</p>
            <p className="fs-6">
            We headquartered in San Diego, brings over 42 years of local and national construction experience; with a reputation for delivering large and unique design-build projects ahead of schedule and on budget.  Our company has served clients and building owners for over four decades. 
            </p>
            <Button 
                as="a" variant="info">More info
            </Button>
            </div>
            </Col>
            
            <Col>
            <div className="d-block">
            <img src={image003} className="img-fluid align-self-end" />
            </div>
            </Col>
        </Row>
        </div>
    )
}

