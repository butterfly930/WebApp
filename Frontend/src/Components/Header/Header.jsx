import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import iCanLogo from '../../images/iCanLogo.png';
import './Header.css';

function TopNav() {

  return (
    <Navbar expand="lg" className="w-100 ml-10 mr-10 navbar-custom">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-transparent" />
        <Navbar.Collapse id="navbarScroll">
          <a href="#">
            <img src={iCanLogo} alt="iCan Logo" width="160" height="150" className="LogoImg" />
          </a>
          <Nav className="me-auto my-2 my-lg-0 mt-30 ml-30" navbarScroll>
            <NavDropdown
              title="Kush jemi ne?"
              id="navbarScrollingDropdown"
              style={{ marginRight: '30px', marginLeft: '15px' }}
            >
              <NavDropdown.Item href="#action3" className="text-white">
                Cfarë është iCan?
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" className="text-white">
                Benefitet e iCan
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5" className="text-white">
                Një partner, një zgjidhje
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2" style={{ marginRight: '20px' }}>
              Përdoruesit
            </Nav.Link>
            <Nav.Link href="#">Libra Audio</Nav.Link>
            <Nav.Link href="#">Bëhu partner me ne</Nav.Link>
          </Nav>
          <Nav className="ms-auto ml-50" style={{ marginRight: '60px' }}>
            <button className="btn btn-outline-primary">
              {/* Add the 'no-underline' class to exclude underline transition */}
              <Nav.Link href="#" className="d-flex me-2 text-white no-underline">
                Forum
              </Nav.Link>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
