import mpStyles from "./machineryParks.module.css";
import image005 from "../assets/machineryParks/image005.png"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Stack from "react-bootstrap/Stack";


export function Section005(){

    return(
        <div className={mpStyles.section005}>
            <Row>
                <Col>
                <div className="d-flex flex-column align-items-center">
                    <img src={image005} className="img-fluid"
                    />
                </div>
                </Col>
                <Col>
                <div className="d-flex flex-column align-items-center">
                    <p className="fs-5">Beautiful Construction</p>
                    <p className="fs-3 fw-bold text-center">The Best Construction Company</p>
                    <p className="fs-5 text-center">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, aperiam consectetur! Aut quaerat incidunt non.
                    </p>
                    <Button variant="info">More info</Button>
                </div>
                </Col>
            </Row>
        </div>
    )
}