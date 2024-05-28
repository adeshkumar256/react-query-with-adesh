import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { tabs } from '../../static-data/tabs';

function Header() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">React Query With Adesh</Navbar.Brand>
        <Navbar.Toggle aria-controls="site-navigation" />
        <Navbar.Collapse id="site-navigation">
          <Nav className="me-auto">
            {
              tabs.map(tab => (
                <Nav.Link key={tab.id} href={`${tab.id}`}>{tab.label}</Nav.Link>
              ))
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;