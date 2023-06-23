import React from 'react';
import './Services.css';
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import store_logo from '../../assets/Urbanfitstore_logo.png';
import studio_logo from '../../assets/studiologo.png';
import edge_logo from '../../assets/edgelogo.png';

const Services = () => {
  return (
    <div className="services-page">
      <Navbar />
      <section className="section-one1">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="logo">
                <img src={studio_logo} alt="studio_logo" />
              </div>
              <div className="description">
                <p>
                  The Urbanfit Studio is a fully integrated fitness facility that caters to a wide range of fitness requirements. Our extensive suite of health and fitness solutions is conveniently available in one location and is suitable for all levels of fitness proficiency. Our offerings include personal fitness training, functional training, a nutritionist clinic, a massage therapy center, and other resources that are designed to comprehensively address all of your fitness needs.
                </p>
              </div>
              <button className="btn btn-primary">Visit Now</button>
            </div>
          </div>
        </div>
      </section>
      <section className="section-two2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="logo">
                <img src={store_logo} alt="store_logo" />
              </div>
              <div className="description">
                <p>
                  Urbanfit Store is a premium fitness supplement provider that offers both online and in-store services. We have several physical locations throughout Pune that enable us to deliver authentic products to our valued customers. With over 1000 high-quality products available, we can meet all your fitness needs. We take pride in featuring exclusive imported brands that are guaranteed to deliver outstanding results.
                </p>
              </div>
              <button className="btn btn-primary">Visit Now</button>
            </div>
          </div>
        </div>
      </section>
      <section className="section-three3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="logo">
                <img src={edge_logo} alt="edge_logo" />
              </div>
              <div className="description">
                <p>
                  Urbanfit Edge is a leading athletic development center that offers a comprehensive range of training services designed to enhance speed, agility, and overall athletic performance. Our offerings include game-specific training, one-on-one goal-based training, dynamic strength training, plyometrics, and injury prevention and rehabilitation protocols. Additionally, we offer cardiovascular group activities, as well as biomechanics video analysis performed by our expert trainers.
                </p>
              </div>
              {/* <button className="btn btn-primary">Visit Now</button> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
