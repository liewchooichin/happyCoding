import mpStyles from "./machineryParks.module.css";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Stack from "react-bootstrap/Stack"


export function Section006(){
    return(
        <div className={mpStyles.section006}>
            <Stack direction="horizontal" gap={23}>

                <div className="d-flex flex-column align-items-center p-3">
                <p className="fs-5 text-center">
                    Contact us for your building questions.
                </p>
                <p className="fs-3 fw-bold text-center">
                    One North, 11 Slims Barrack,
                    Singapore 123456.
                </p>
                </div>


                <div className="d-flex flex-column
                    align-items-center p-3">
                        <p className="fs-3 fw-bold text-center">
                            Contact Us
                        </p>
                        <p className="fs-5 text-start">
                        Phone: +69-6999 6999<br/>
                        Whatsapp: +69-8999 8999<br/>
                        Email: <a href="mailto:construction@example.com">construction@example.com</a>
                        </p>
                    </div>

            </Stack>
        </div>
    )
}