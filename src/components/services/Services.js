import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page">
            <div className="services-heading">
                <h2>Our Services</h2>
            </div>
            <div className="services-description">
                <p>
                    
                        Urban Fit offers a full range of group fitness activities like HIIT,
                        Zumba, Kickboxing suitable for all levels of fitness lovers. We also
                        provide personal training sessions at the studio at your convenience.
                    
                </p>
            </div>
            <div className="services-cards">
                <div className="service-card">
                    <div className="service-image">
                        <img src="https://urbanfitwellness.com/assets/img/flex/img4.webp" alt="Protein Supplements" />
                    </div>
                    <div className="service-description">
                        <h3>Protein Supplements</h3>
                        <p>Buy 100% Authentic Protein & Healthy Supplements at the best price. Branded Supplements with Free Shipping and COD are available.</p>
                    </div>
                </div>
                <div className="service-card">
                    <div className="service-image">
                        <img src="https://urbanfitwellness.com/assets/img/flex/img1.webp" alt="Personal Dieticians" />
                    </div>
                    <div className="service-description">
                        <h3>Personal Dieticians</h3>
                        <p>Unlock the power of healthy eating with our expert personal dietitian. We'll work with you to create a customized meal plan for Weight Loss, Muscle Gain, PCOD, and much more.</p>
                    </div>
                </div>
                <div className="service-card">
                    <div className="service-image">
                        <img src="https://urbanfitwellness.com/assets/img/flex/img2.webp" alt="Personal Trainer" />
                    </div>
                    <div className="service-description">
                        <h3>Personal Trainer</h3>
                        <p>Get the support and motivation you need to reach your fitness goals with our personal training services. Get fit at home or Fitness Studio with one-to-one consultation.</p>
                    </div>
                </div>
                <div className="service-card">
                    <div className="service-image">
                        <img src="https://urbanfitwellness.com/assets/img/flex/img3.webp" alt="Exercise Video" />
                    </div>
                    <div className="service-description">
                        <h3>Exercise Video</h3>
                        <p>Get fit for free with our workout video! Our expert trainers will guide you through a fun and effective workout that you can do in your own comfort.</p>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Services;
