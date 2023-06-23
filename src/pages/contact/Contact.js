import React from 'react';
import './Contact.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer'

const Contact = () => {
  return (
    <div className='map-frame'>
      <Navbar/>
      <h1 style={{textAlign:'center',margin:'20px 0px 20px 0px'}}>Contact Us</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30261.237562458515!2d73.91145!3d18.5445!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c172f26df47d%3A0x8d508903a17ab0c1!2sUrbanFit%20Wellness%20Private%20Limited!5e0!3m2!1sen!2sin!4v1687516650893!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowfullscreen="Yes"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
      <Footer/>
    </div>
  );
};

export default Contact;
