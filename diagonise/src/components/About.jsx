import { Container } from 'react-bootstrap';
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import favicon from '../assets/tom/favicon.ico';
import vector from '../assets/t.png';

export const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="about" id="about">
      <Container>
        <div className="d-flex">
          <div className="image">
            <img src={vector} alt="About_image" />
          </div>
          <div className="wrap-text">
            <h2 className="tag">About</h2>
            <p>
            Tomatoes are one of the horticultural crops that are widely found in Africa. 
            Tomatoes are known as plants that are susceptible to disease. 
            This disease can be recognized by seeing physical changes in plants such as leaves. 
            If the disease has already infected the plant, 
            proper handling is needed to prevent crop failure.<br/>

That is why this project was created to classify tomato diseases 
based on leaf images along with descriptions and treatment of the
 disease using machine learning. This project is called Agri-diagonise
            </p>
          </div>
        </div>
      </Container>
      <div className="row">
        <div className="col-12">
          <div className="about-bx wow zoomIn">
            {/* <Carousel
              responsive={responsive}
              infinite={true}
              className="owl-carousel owl-theme about-slider"
            >
              <div className="item">
                <img src={user1} alt="Sutrisno" />
                <h5>Sutrisno</h5>
              </div>
              <div className="item">
                <img src={user4} alt="Muhammad Ammar Nabil" />
                <h5>Muhammad Ammar Nabil</h5>
              </div>
              <div className="item">
                <img src={user3} alt="Muhammad Fakhrul Amin" />
                <h5>Muhammad Fakhrul Amin</h5>
              </div>
              <div className="item">
                <img src={user2} alt="Galan Ahmad Defanka" />
                <h5>Galan Ahmad Defanka </h5>
              </div>
            </Carousel> */}
          </div>
        </div>
      </div>
    </section>
  );
};
