import React from 'react';
import './About.css';
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import aboutus_img from '../.././assets/aboutus_img.jpg'
import icon1 from '../.././assets/icon2.webp';
import icon2 from '../.././assets/icon3.webp';
import icon3 from '../.././assets/icon4.webp';
import Card from '../../components/card/Card';
import TeamMembers from '../../components/images';


const About = () => {

  return (

    <div className="about-page">
      <Navbar />
      <section className="section-one">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="image-wrapper">
                <img src={aboutus_img} alt="Image 1" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="description">
                <h2>Get Healthy & Fit</h2>
                <p>
                  The existence of UrbanFit came in as a positioned supplement provider in the market. With time the umbrella spread with products and services related to every single aspect of health and fitness under one global platform.
                </p>
                <p>
                  UrbanFit is now re-purposed to solve every problem in the relatives of the health fragment, nourishment, and personal fitness industry by being a holistic service provider of the domain.
                </p>
                <p>
                  Knocking out troubles like "bad quality of service" combined with "bad quality of products provided by the unethical players," UrbanFit is working towards structuring the unorganized section and is committed to bringing in a more personalized experience with the lowest TAT for their service deliveries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="section-two">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Our Fitness Solutions.</h2>
              <p>
                Range of Fitness Solutions to meet every Health & Fitness need.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card-icons">
                <img src={icon1} alt="icon1" />
                <div className="card-body">
                  <h5 className="card-title">Holistic Health Transformation</h5>
                  <p className="card-text">
                    Fitness Studio to Get in your Best
                    Shape. Functional Training,
                    Personal Trainer, HIIT/Tabata, and
                    much more in one place.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-icons">
                <img src={icon2} alt="icon2" />
                <div className="card-body">
                  <h5 className="card-title">Therauptic Massage Center</h5>
                  <p className="card-text">
                    Life Changing and Relaxing
                    massage therapy to relieve
                    stress and promote a healthy
                    lifestyle
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-icons">
                <img src={icon3} alt="icon3" />
                <div className="card-body">
                  <h5 className="card-title">Quality Health Supplements</h5>
                  <p className="card-text">
                    Fuel your muscle with 100%
                    Authentic Protein & Healthy
                    Supplements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="section-three">
        <div className="container">
          <div >
            <div >
              <h2>The Team</h2>
            </div>
          </div>
          <div className='teamMembers'>

            {
              TeamMembers.map((data) => {

                return <Card image={data.photo} name={data.name} />

              })
            }

          </div>


          <div className="row">
            <div className="col-md-12">
              <h1>
                We commit to staying aligned to our
              </h1>
              <h1>
                beliefs of removing the unawareness in
              </h1>
              <h1>
                the health industry.
              </h1>
              <button className="btn btn-primary">Commit Today</button>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>

  );
};

export default About;
