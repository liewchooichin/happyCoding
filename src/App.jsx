import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
/* Using React Bootstrap */
//import './App.css'
import { NavigationBar } from './components/NavigationBar'
import Container from 'react-bootstrap/Container'

/**
 * 
 * Main App
 */

function App() {
  return (
    <Container fluid="md">

    <NavigationBar></NavigationBar>

    </Container>
  )
}

export default App
