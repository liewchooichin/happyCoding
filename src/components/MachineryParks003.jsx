import icon001 from "../assets/machineryParks/icon001.png";
import icon002 from "../assets/machineryParks/icon002.png";
import icon003 from "../assets/machineryParks/icon003.png";
import icon004 from "../assets/machineryParks/icon004.png";
import icon005 from "../assets/machineryParks/icon005.png";
import icon006 from "../assets/machineryParks/icon006.png";

import mpStyles from "./machineryParks.module.css";

import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Stack from "react-bootstrap/Stack";


export function Section003(){

    return(
        <div className={mpStyles.section003}>
        <Row>
            <Col className="text-center">
                <p className="fs-5">
                    What we do
                </p>
                <p className="fs-3">
                Company Certifications
                </p>
                <p className="fs-4">
                Our company offers a variety of services to meet your project’s needs, to take you from collaboration meetings all the way to ribbon-cutting and beyond. We believe that every project is unique, and can customize our approach to fit your particular project.
                </p>
            </Col>
        </Row>

        <Row className="p-3">
            <Col md={{span:3, offset:1}}>
            <div className="d-flex flex-column align-items-center">
                <img src={icon001} className="img-fluid" />
                <p className="fs-3 text-center">Healthcare Building</p>
                <p className="fs-5 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores labore</p>
            </div>
            </Col>

            <Col md={{span:3}}>
            <div className="d-flex flex-column align-items-center">
                <img src={icon002} className="img-fluid" />
                <p className="fs-3 text-center">Education Building</p>
                <p className="fs-5 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores labore</p>
            </div>
            </Col>

            <Col md={{span:3}}>
            <div className="d-flex flex-column align-items-center">
                <img src={icon003} className="img-fluid" />
                <p className="fs-3 text-center">Government Building</p>
                <p className="fs-5 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores labore</p>
            </div>
            </Col>

            <Col md={{span:2}}>            
            </Col>
        </Row>

        <Row className="p-3">
            <Col md={{span:3, offset:1}}>
            <div className="d-flex flex-column align-items-center">
                <img src={icon004} className="img-fluid" />
                <p className="fs-3 text-center">Commercial Building</p>
                <p className="fs-5 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores labore</p>
            </div>
            </Col>

            <Col md={{span:3}}>
            <div className="d-flex flex-column align-items-center">
                <img src={icon005} className="img-fluid" />
                <p className="fs-3 text-center">Residential Building</p>
                <p className="fs-5 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores labore</p>
            </div>
            </Col>

            <Col md={{span:3}}>
            <div className="d-flex flex-column align-items-center">
                <img src={icon006} className="img-fluid" />
                <p className="fs-3 text-center">Restaurant Facilities</p>
                <p className="fs-5 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores labore</p>
            </div>
            </Col>

            <Col md={{span:2}}>
            </Col>

        </Row>

        </div>
    )
}