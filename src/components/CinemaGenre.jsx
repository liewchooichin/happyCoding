import PropTypes from 'prop-types';
import styles from './Cinema.module.css';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { CinemaMovie } from "./CinemaMovie";
import { genre, movies } from "./CinemaData";
import { CinemaMovieCarousel } from './CinemaMovie';

CinemaGenre.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    movieTitle1: PropTypes.string,
    movieTitle2: PropTypes.string
}
export function CinemaGenre(
    {
        name, description, movieTitle1, movieTitle2
    }
){
    return(
        <Tabs
        defaultActiveKey="all"
        className="mb-3"
        >
        <Tab eventKey="all" title="All">
        <p className="fw-bold">All movies</p>
        {
          movies.map((item) => 
            <CinemaMovieCarousel 
                key={item.id} 
                title={item.title} 
                year={item.year}
            ></CinemaMovieCarousel>
        )}
        </Tab>
        <Tab eventKey="comedy" title="Comedy">
          Tab content for Profile
        </Tab>
        <Tab eventKey="romance" title="Romance">
          Tab content for Contact
        </Tab>
        </Tabs>
    )
}