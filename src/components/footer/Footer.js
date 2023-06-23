import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">

            <div className='footer-div'>

                <div className="footer-left">
                    <form className="sign-up-form">
                        <h1>Let's Get Moving.</h1>
                        <h3>Sign Up</h3>
                        <input type="text" placeholder="Full Name" className="sign-up-input" />
                        <input type="tel" placeholder="Phone" className="sign-up-input" />
                        <input type="email" placeholder="Email" className="sign-up-input" />
                        <div className='sign-up-button-div'>
                            <button type="submit" className="sign-up-button">Sign Up</button>
                        </div>
                    </form>
                </div>

                <div className="footer-right">
                    <p>
                        <h5>
                            We’re here to help and answer any questions you
                            might have. We will answer your inquiries in a
                            maximum of 48 hours.
                        </h5>

                    </p>

                    <p>
                        <h5>
                            Tel: +91 8799952724
                        </h5>
                    </p>
                    <p>
                        <h5>
                            Email: info@urbanfitwellness.com
                        </h5>

                    </p>

                    <p>
                        <h5>
                            Reach Us : OFFICE NO. 1 D, 2nd Floor, Cerebrum IT Park,
                            Kalyani Nagar, Pune - 411014
                        </h5>
                    </p>
                    <div className="social-media-links">

                        <a href="https://www.youtube.com/channel/UCc2AlPjw2t90wykXWMhF4xA" target="_blank" rel="noopener noreferrer">
                            <button> <i className="fab fa-youtube"></i> </button>
                        </a>

                        <a href="https://www.instagram.com/urbanfitwellness/" target="_blank" rel="noopener noreferrer">
                            <button> <i className="fab fa-instagram"></i> </button>
                        </a>

                        <a href="https://www.facebook.com/urbanfitwellnesspvtltd/" target="_blank" rel="noopener noreferrer">
                            <button> <i className="fab fa-facebook-f"></i> </button>
                        </a>

                        <a href="https://twitter.com/urbanfit_app" target="_blank" rel="noopener noreferrer">
                            <button> <i className="fab fa-twitter"></i> </button>
                        </a>


                    </div>
                </div>
            </div>
            <hr/>
            <div className='foot-div'>
                {/* <hr /> */}
                <p>© 2018-22 by UrbanFit Wellness.</p>
            </div>

        </footer>
    );
}

export default Footer;
