import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import './MainSection.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Foto1 from '../../images/4.jpg';
import Foto2 from '../../images/5.jpg';
import Foto3 from '../../images/3.jpg';

export default function MainSection() {
    
    return (
        <div className='w-100 ml-10 mr-10 container-custom1'>
    <Container>
        <Row className='Row1'>
        <Col>
        <img src={Foto1} alt="iCan! Ne jemi këtu për ty." style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 9)',borderRadius: '5%' }} width="360" height="350"className="Foto1"/>
        </Col>
        <Col>
            <h1 style={{ fontWeight: "bold" }}>Çfarë është iCan?</h1>
            <p>Prezantojme iCan website me standartet e aksesit
                për të verbrit dhe atyre që kanë probleme me shikimin
                në përdorimin e opsioneve si lajme dhe libra audio.</p>
            <p>Lajmet vijnë në formë të shkurtër dhe gjithashtu ky 
                website bën edhe selektimin e lajmeve nga e gjithë 
                bota nga website-t më të besueshme.
                Librat audio vijnë tashmë të aksesueshme si në profilin 
                e të verbrit por edhe në atë të vullnetarit. Vullnetari 
                ka mundësinë që të dëgjoj librat audio prezente por edhe 
                të krijoj libra audio vetë. </p>

                <Button variant="success">Zbulo më shumë</Button>
        </Col>
        </Row>

        <Row className='Row2'>
        <Col>
        <h1 style={{ fontWeight: "bold" }}>Benefitet e iCan</h1>
            <p>Ne synojmë të nxisim indipendencën dhe gjithëpërfshirjen 
                e individëve të verbër dhe personave me probleme me shikimin 
                në shoqëri. 
                Synojmë të afrojmë në shoqërinë tonë teknologjinë më të mirë 
                dhe lehtësi në përdorimin e inovacioneve tashmë pa pasur nevojë 
                që të dish anglisht apo ndonjë gjuhë tjetër dhe e gjitha kjo vetëm 
                sepse duam gjithëpërfshirjen në shoqërinë shqiptare. </p>
            <p>Me një pagesë shumë të vogël për muaj, për mirëmbajtje të 
                profilit tuaj do të jetë mëse e arsyeshme për shërbimet që vetëm 
                ne i ofrojmë. </p>

                <Button variant="success">Bashkohu me miqtë</Button>
        </Col>
        <Col>
            <img src={Foto2} alt="Cdo gjë shqip.Bëhu anëtarë." style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 9)', borderRadius: '5%', marginLeft: "30%"}} width="360" height="350"className="Foto2"/>
        </Col>
        </Row>

        <Row className='Row3'>
        <Col>
        <img src={Foto3} alt="Tashmë pjesë e inovacionit.Bashkohu me ne!" style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 9)',borderRadius: '5%' }} width="360" height="350" className="Foto3"/>
        </Col>
        <Col>
            <h1 style={{ fontWeight: "bold" }}>Një partner, një zgjidhje</h1>
            <p>Me kaq shumë zhvillime përreth është e vështirë të kuptojmë 
                se cila është zgjidhja ose hapi i radhës që do të jetë më i duhuri 
                për ne. </p>
            <p>Tashmë nuk është e nevojshme ta mendoni kaq shumë këtë pjesë.
                Bëhuni pjesë e jona. Partneriteti është kaq i vlefshem për zhvillime e
                suksese edhe më të mëdha që do të shkojnë edhe përtej kufijve të 
                vendit tonë.  </p>
            <p>Tashmë është krijuar një standart i ri i tëri në gjuhën tonë. Nuk është 
                e nevojshme të kërkojmë vetëm në gjuhë të tjera më.</p>

            <Button variant="success">Kontakto këtu për detaje më shumë mbi një partneritet të mundshëm</Button>
        </Col>
        </Row>
    </Container>
    </div>
    );
}



