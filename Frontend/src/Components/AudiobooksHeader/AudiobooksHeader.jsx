import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import iCanLogo from '../../images/iCanLogo.png';
import './AudiobooksHeader.css';

function AudiobooksHeader() {


  return (
    <Navbar style={{boxShadow: "10px 0 20px 10px rgba(0, 0, 0, 0.2)", paddingBottom: '-30%'}} expand="lg" className="w-100 ml-10 mr-10 navbar-custom">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-transparent" />
        <Navbar.Collapse id="navbarScroll">
          <a href="#">
            <img src={iCanLogo} alt="iCan Logo" width="150" height="140" className="LogoImg" />
          </a>
          <Nav className="me-auto my-2 my-lg-0 mt-30 ml-30" navbarScroll>
            
            <Nav.Link href="#action2" style={{ marginRight: '20px' }}>
              Libra Audio
            </Nav.Link>
            <Nav.Link href="#" style={{ marginRight: '20px' }}>Lajme</Nav.Link>
            <Nav.Link href="#">Forum(Feedback)</Nav.Link>
          </Nav>
          <Nav className="ms-auto ml-50" style={{ marginRight: '60px' }}>
            <button className="btn btn-outline-primary">
              {/* Add the 'no-underline' class to exclude underline transition */}
              <Nav.Link href="#" className="d-flex me-2 text-white no-underline">
                Kontakto me ne 
              </Nav.Link>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AudiobooksHeader;
