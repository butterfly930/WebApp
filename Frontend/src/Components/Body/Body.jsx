import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import eye from '../../images/eye.png';
import './Body.css';

export default function Hero() {
    return (
        <div className='w-100 ml-10 mr-10 container-custom'>
    <Container>
        <Row>
        <Col>
            <h1 className='text-white' style={{ fontWeight: "bold" }}>Risia më e fundit!
                Dëgjo libra shqip kudo
                dhe kurdo!</h1>
            <h4 className='text-white' style={{ marginTop: "40px" }}>Bëhuni pjesë e platformës sonë.</h4>
        </Col>
        <Col>
            <img src={eye} alt="iCan Logo" width="360" height="350"className="Logo"/>
        </Col>
        </Row>
    </Container>
    </div>
    );
}



