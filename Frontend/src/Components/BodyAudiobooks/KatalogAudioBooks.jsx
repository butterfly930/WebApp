import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PerrallaImage from '../../images/Perralla.png';
import BiografiImage from '../../images/Biografi.png';
import HistoriImage from '../../images/Histori.png';
import PoeziImage from '../../images/Poezi.png';
import Rekomandimi1 from '../../images/Rekomandimi1.png';
import Rekomandimi2 from '../../images/Rekomandimi2.png';
import Rekomandimi3 from '../../images/Rekomandimi3.png';
import Rekomandimi4 from '../../images/Rekomandimi4.png';
import Rekomandimi5 from '../../images/Rekomandimi5.png';
import Rekomandimi6 from '../../images/Rekomandimi6.png';
import Rekomandimi7 from '../../images/Rekomandimi7.png';
import Rekomandimi8 from '../../images/Rekomandimi8.png';
import './KatalogAudioBooks.css';

function KatalogAudioBooks() {
    return (
        <>
            <div>
                <div>
                    <h3 id="Audiolibra">Zgjidh zhanerin e librave të preferuar</h3>
                </div>
            </div>

            <div className="card-container">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={BiografiImage} />
                    <Card.Body>
                        <Card.Text>
                            Kliko për të dëgjuar biografi të ndryshme të personaliteteve të njohura.
                        </Card.Text>
                        <Button variant="primary">Librat Biografi</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={HistoriImage} />
                    <Card.Body>
                        <Card.Text>
                            Kliko për të dëgjuar histori të ndryshme nga e kaluara dhe e sotmja.
                        </Card.Text>
                        <Button variant="primary">Librat Histori</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={PerrallaImage} />
                    <Card.Body>
                        <Card.Text>
                            Kliko për të dëgjuar përralla të ndryshme për fëmijë dhe të rritur.
                        </Card.Text>
                        <Button variant="primary">Librat Përralla</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={PoeziImage} />
                    <Card.Body>
                        <Card.Text>
                            Kliko për të dëgjuar poezi të ndryshme nga poetë të ndryshëm.
                        </Card.Text>
                        <Button variant="primary">Librat Poezi</Button>
                    </Card.Body>
                </Card>
            </div>

            <div>
                <div style={{marginTop: '9%', marginBottom: '9%'}}>
                <h3 id="Audiolibra">Dëgjoni disa nga librat më të preferuar nga përdouresit e platformës</h3>
                <p style={{textAlign: "center", marginBottom: "5%"}}>Rekomandimet </p>

                <div className="card-container">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Rekomandimi1} />
                    <Card.Body>
                        <Card.Text>
                            "Dhimbja"-Marguerite Duras
                        </Card.Text>
                        <Button variant="primary">Lexo ose Dëgjo librin</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Rekomandimi2} />
                    <Card.Body>
                        <Card.Text>
                            "Një hero i kohës sonë"- M.J.Lermontov
                        </Card.Text>
                        <Button variant="primary">Lexo ose Dëgjo librin</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Rekomandimi3} />
                    <Card.Body>
                        <Card.Text>
                            "Stalini në oborrin e carit të kuq"-Simon Sebag Montefiore
                        </Card.Text>
                        <Button variant="primary">Lexo ose Dëgjo librin</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Rekomandimi4} />
                    <Card.Body>
                        <Card.Text>
                            "Turpi"-Salman Rushdie
                        </Card.Text>
                        <Button variant="primary">Lexo ose Dëgjo librin</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Rekomandimi5} />
                    <Card.Body>
                        <Card.Text>
                            "Lenini, anatomia e një vrasësi"- Curzio Malaparte
                        </Card.Text>
                        <Button variant="primary">Lexo ose Dëgjo librin</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Rekomandimi6} />
                    <Card.Body>
                        <Card.Text>
                            "Viti '93"-Viktor Hygo
                        </Card.Text>
                        <Button variant="primary">Lexo ose Dëgjo librin</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Rekomandimi7} />
                    <Card.Body>
                        <Card.Text>
                            "Krim dhe ndëshkim"-Fjodor Dostojevski
                        </Card.Text>
                        <Button variant="primary">Lexo ose Dëgjo librin</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Rekomandimi8} />
                    <Card.Body>
                        <Card.Text>
                            "Don Kishoti i Mançës"-Miguel de Cervantes
                        </Card.Text>
                        <Button variant="primary">Lexo ose Dëgjo librin</Button>
                    </Card.Body>
                </Card>
                </div>
                
            </div>
        </div>
        </>
    );
}

export default KatalogAudioBooks;