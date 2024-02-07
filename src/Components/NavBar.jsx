/* eslint-disable react/no-unescaped-entities */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

// Importation du logo
import logo from '../assets/logo.png'



function NavBar() {
  return (
    <>

      <Navbar fixed="top" collapseOnSelect expand="lg" className="border border-0 bg-warning">
        <Container>
          <Navbar.Brand href="/home"><img src={logo} alt="logo" width={125}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className='border border-0 rounded-0' />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="ms-auto">
              <Nav.Link href="#" className='me-4 mt-2'>Accueil</Nav.Link>
              <Nav.Link href="#" className='me-4 mt-2'>Destinations</Nav.Link>
              <Nav.Link href="#" className='me-4 mt-2'>Photos</Nav.Link>
              <Nav.Link href="#">
                <Button variant="primary">S'inscrire</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar;