import styles from './cinema.module.css';
import Container from 'react-bootstrap/Container';
import { CinemaGenre } from "./CinemaGenre";
import { genre, movies } from "./CinemaData";


export function Cinema(){


    return(
        <Container fluid="md">
            <div className={styles.cinemaH1}>
            <h1 className="m-5 text-center">Cinema Merah Saga</h1>
            </div>                
                <CinemaGenre 
                    name={genre[0].name}
                    description={genre[0].description}
                    movieTitle1={movies[0].title}
                    movieTitle2={movies[1].title}
                ></CinemaGenre>
        </Container>
    )
}