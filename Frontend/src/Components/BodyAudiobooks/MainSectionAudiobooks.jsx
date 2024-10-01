import 'bootstrap/dist/css/bootstrap.css';
import './MainSectionAudiobooks.css';
import AudioBooksPage from '../../images/AudioBooksPage.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';


export default function MainSection() {
    
    return (
        <div className='container-custom1 no-padding position-relative'>
            <img 
                src={AudioBooksPage} 
                alt="iCan! Ne jemi këtu për ty." 
                className="d-block w-100" 
                style={{ height: 'auto' }} 
            />
            <div className="overlay" style={{marginTop: '-30px'}}>
                <h1 style={{ fontWeight: "bold"}}>Dëgjo pa limit!</h1> 
                <p style={{ fontWeight: "bold"}}>iCan është projekti më i ri në Shqipëri, i cili mundëson dëgjimin e librave audio, përmbledhjeve të librave audio dhe blerjen e librave fizik më të mirë në treg.</p>
                <div className="button-group">
                    <Button className="custom-button">Dëgjo Libra</Button>
                    <Button className="custom-button1">Autorët</Button>
                </div>
            </div>

            <div className="overlay" style={{marginLeft: '70%', marginTop: '0', backgroundColor: 'transparent'}}>
                <Form className="search-bar" style={{marginLeft: '5%', marginBottom: 'auto', paddingTop: '0' }}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2 search-input" />
                </Form>
            </div>

            
        </div>
        
    );
}