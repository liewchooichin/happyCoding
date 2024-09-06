
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { HomeCard } from './HomeCard';
import { About } from './About';
import { Credits } from './Credits';
import { MachineryParks } from './MachineryParks';
import { Cinema } from './Cinema';


export function NavigationBar() {

  return (
    <div>
    <Router>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand as={Link} to="/">Happy Cod Coding</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">           

            <Nav.Link as={Link} to="/">
              Machinery Parks
            </Nav.Link>

            <Nav.Link as={Link} to="/cinema">
              Cinema billboards
            </Nav.Link>

            <Nav.Link as={Link} to="/profiles">
                Fun Coding Instructors
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
        element={<MachineryParks></MachineryParks>}
      ></Route>
      <Route
        path="/cinema"
        element={<Cinema></Cinema>}
      ></Route>
      <Route 
          path="/profiles" 
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
    </div>    
  );
}
