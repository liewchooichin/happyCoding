
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { HomeCard } from './HomeCard'
import { About, Credits } from './About'


export function NavigationBar() {

  return (
    <Container>
    <Router>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand as={Link} to="/">Happy Coding</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">           

            <Nav.Link as={Link} to="/">
                Home Card
            </Nav.Link>

            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>

            <Nav.Link as={Link} to="/credits">
                Credits
            </Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
    </Navbar>

    <div>
    <Routes>
                <Route 
                    path="/" 
                    element={<HomeCard></HomeCard>}
                ></Route>
                <Route
                    path="/about"
                    element={<About></About>}
                ></Route>
                <Route
                  path="/credits"
                  element={<Credits></Credits>}
                ></Route>
            </Routes>
    </div>
    </Router>
    </Container>    
  );
}
