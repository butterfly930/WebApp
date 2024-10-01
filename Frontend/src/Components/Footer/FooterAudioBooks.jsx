import 'bootstrap/dist/css/bootstrap.css';
import './FooterAudioBooks.css';
import { Container, Row, Col } from "react-bootstrap"

export default function FooterAudioBooks() {

const boxShadowStyle = {
    boxShadow: '0 0 100px', 
    padding: '0', 
  };
  return (
    <footer style={boxShadowStyle}>
      <Container fluid >
        <Row className="text-white p-3">
          <Col className="mx-5" style={{ marginTop: "30px", marginBottom: "30px", marginLeft: "60px" }}>
            <h4>Platforma jonë ju mundëson lehtësi në jetën tuaj dhe hapësirë në zhvillimin tuaj</h4>
            <h6>© 2024 iCan Innovation. All rights reserved. Web Design Albania</h6>
          </Col>
          <Col style={{ marginTop: "30px", marginBottom: "30px" }}>
            <a href='#' className='text-white underline-none' ><h5>Startup</h5></a>
            <a href='#' className='text-white underline-none' ><p>Our Group</p></a>
            <a href='#' className='text-white underline-none' ><p>Our Leadership</p></a>
            <a href='#' className='text-white underline-none' ><p>FAQs</p></a>
            <a href='#' className='text-white underline-none' ><p>Contact Us</p></a>
          </Col>
          <Col style={{ marginTop: "30px", marginBottom: "30px" }}>
            <a href='#' className='text-white underline-none' ><h5>Hybrid working solutions</h5></a>
            <a href='#' className='text-white underline-none' ><p>Contact Centre</p></a>
            <a href='#' className='text-white underline-none' ><p>Social Media Messaging</p></a>
            <a href='#' className='text-white underline-none' ><p>Interaction Recording</p></a>
            <a href='#' className='text-white underline-none' ><p>Data and Reporting</p></a>
          </Col>
          <Col style={{ marginTop: "30px", marginBottom: "30px", marginRight: "50px" }}>
            <a href='#' className='text-white underline-none' ><h5>Legal</h5></a>
            <a href='#' className='text-white underline-none' ><p>Privacy policy</p></a>
            <a href='#' className='text-white underline-none' ><p>Terms of service</p></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
