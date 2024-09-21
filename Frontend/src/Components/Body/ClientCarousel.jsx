import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';  // Import the Button component
import ExampleCarouselImage from '../../images/ExampleCarouselImage.jpg';

function IndividualIntervalsExample() {
  return (
    <div>
      {/* Custom Style for Carousel Control Icons */}
      <style type="text/css">
        {`
        .carousel-control-next-icon,
        .carousel-control-prev-icon {
          filter: invert(110%) sepia(950%) saturate(26%) hue-rotate(2deg) brightness(9%) contrast(300%);
        }
        `}
      </style>
      {/* Header and Subheader */}
      <div style={{ textAlign: 'center', marginTop: '5%', marginBottom: '3%' }}>
        <h1 style={{ fontWeight: 'bold', color: 'rgb(10, 11, 75)'}}>Klientët tanë</h1>
        <p style={{ fontSize: '1.2rem', color: 'rgb(10, 11, 75)' }}>
          Më poshtë janë dhënë mendimet e klientëve tanë për shërbimet e ofruara nga iCan.
        </p>
      </div>

      {/* Carousel */}
      <Carousel style={{ marginBottom: '3%', marginTop: '2%' }}>
        <Carousel.Item interval={1000}>
          <img
            src={ExampleCarouselImage}
            alt="First slide"
            style={{ borderRadius: '5%', marginLeft: '35%', marginRight: '35%' }}
            width="360"
            height="350"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            src={ExampleCarouselImage}
            alt="Second slide"
            style={{ borderRadius: '5%', marginLeft: '35%', marginRight: '35%' }}
            width="360"
            height="350"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={ExampleCarouselImage}
            alt="Third slide"
            style={{ borderRadius: '5%', marginLeft: '35%', marginRight: '35%' }}
            width="360"
            height="350"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Button below the carousel */}
      <div style={{ textAlign: 'center', marginTop: '2%', marginBottom: "6%" }}>
        <Button variant="success" size="m">
          Më shumë
        </Button>
      </div>
    </div>
  );
}

export default IndividualIntervalsExample;
