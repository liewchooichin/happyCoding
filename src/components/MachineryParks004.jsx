import mpStyles from "./machineryParks.module.css";
import image004 from "../assets/machineryParks/image004.png"
import iconWhite001 from "../assets/machineryParks/iconWhite001.png"
import iconWhite002 from "../assets/machineryParks/iconWhite002.png"
import iconWhite003 from "../assets/machineryParks/iconWhite003.png"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Stack from "react-bootstrap/Stack";

export function Section004(){

    return(
        <div className="mpStyles.section004">
        <Row>
        <p className="fs-2 fw-bold text-center">
            Visit our projects
        </p>
        </Row>
        <Row>
            <Col md={{span:6}}>
            <div className="d-flex flex-column 
            justify-content-around">
                <img src={iconWhite001}
                className="img-fluid align-self-center m-3" 
                style={{width:70, height:70}} />
                <p className="ps-3 text-center">
                    Healthcare Building
                </p>
                <p className="ps-5 text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore excepturi qui soluta distinctio saepe veniam quia officia quo possimus nesciunt 
                </p>
                <Button variant="info"
                    className="align-self-center"
                >More info
                </Button>
            </div>
            </Col>
            <Col md={{span:6}}>
            <div className="mpStyles.section004">
            <img src={image004}
                className="img-fluid" 
                style={{paddingTop:"60px"}} />
            </div>
            </Col>
        </Row>
        <Row className="mb-3">
            <div className="d-flex 
                flex-column align-items-center">
                <img src={iconWhite002}
                className="img-fluid"
                style={{width:"70px", height:"70px"}}
                />
                <p className="fs-3">Education Building</p>
                <p className="fs-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iure dignissimos provident ea soluta voluptatem?</p>
            </div>
        </Row>
        <Row className="mb-3">
            <div className="d-flex 
                flex-column align-items-center">
                <img src={iconWhite003}
                className="img-fluid"
                style={{width:"70px", height:"70px"}}
                />
                <p className="fs-3">Restaurant Facilities</p>
                <p className="fs-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorem odio ullam doloribus, labore ipsa.</p>
            </div>
        </Row>
        </div>
    )
}
