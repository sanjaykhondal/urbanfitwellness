import React from 'react';
import './Product.css';

const Product = () => {
    return (
        <div className="product-page">
            <div className="product-heading">
                <h2>Our Products</h2>
            </div>
            <div className="product-cards">
                <div className="product-card">
                    <div className="product-image">
                        <img src="https://urbanfitwellness.com/assets/img/flex/img5.jpg" alt="Personalized Fitness" />
                    </div>
                    <div className="product-description">
                        <img src='https://urbanfitwellness.com/assets/img/flex/studiologo2.png' alt='Personalized Fitness'></img>
                        <h3 className='pf'>Personalized Fitness</h3>
                        <p>
                            Train under Certified Expert Trainer to
                            achieve your fitness goals fast and easy
                        </p>
                    </div>
                    <div className="product-actions">
                        <a href="https://www.urbanfit.studio/" className="visit-button">Visit</a>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src="https://urbanfitwellness.com/assets/img/flex/img7.jpg" alt="Feed your body with Right
Nutrition." />
                    </div>
                    <div className="product-description">
                        <img src='https://urbanfitwellness.com/assets/img/flex/storelogo2.png' alt="Feed your body with Right"></img>
                        <h3 className='pf2'>Feed your body with Right Nutrition.</h3>
                        <p>Genuine Branded Proteins & Health Supplements at discounted prices.</p>
                    </div>
                    <div className="product-actions">
                        <a href="https://urbanfitstore.com/" className="visit-button">Visit</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
