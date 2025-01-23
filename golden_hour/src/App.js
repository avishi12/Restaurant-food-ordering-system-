import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import About from './pages/About';

import './styles.css';

function App() {
  return (
    <div>
      <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand text-success fw-semibold'>
              Golden Hour Cafe 
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='/' className='active text-uppercase'>Home</Nav.Link>
             
              <Nav.Link href='/about' className='text-uppercase'>About</Nav.Link>
              
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 

      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        
      </Routes>

      <footer className='bg-body-tertiary'>
        <p className='p-3 m-0 text-center'>copyright @ made by golden hour cafe</p>
      </footer>
      
  </div>
);
}

export default App;
