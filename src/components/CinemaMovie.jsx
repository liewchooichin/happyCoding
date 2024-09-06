import PropTypes from 'prop-types';
import styles from './cinema.module.css';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import image1 from "../assets/cinema/grasshopper1_200.jpeg";
import { movies } from "./CinemaData";


CinemaCarouselImage.propTypes = {
    filename: PropTypes.string,
    text: PropTypes.string
}
function CinemaCarouselImage({filename, text}){
    return(
            <img src={image1} alt={text} 
            className="img-fluid">
            </img>
    )
}

CinemaMovie.propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
}
export function CinemaMovie({title, year}){
    return(
        <div>
        <Row>
        <img src={image1} className="img-fluid"></img>
        <h3 className="text-center align-self-end">{title}</h3> 
        <h3 className="fst-italic fs-5 text-center align-self-end">{year}</h3>
        </Row>
        </div>
    )
}


CinemaMovie.propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
}
export function CinemaMovieCarousel({title, year}){
    return(
        <Carousel interval="3000" pause="hover">
        {
            movies.map((item) => 
            {
                return(
                <Carousel.Item key={item.id}>
                <CinemaCarouselImage  alt={item.title}></CinemaCarouselImage>
                <Carousel.Caption>
                    <h3>{item.title}</h3>
                    <p>{item.year}</p>
                </Carousel.Caption>
                </Carousel.Item>
                 )
            })
        }
        </Carousel>
    )
}