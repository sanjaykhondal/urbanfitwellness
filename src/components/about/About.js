import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <div className="about-image">
                <img src="https://scontent.fpnq2-1.fna.fbcdn.net/v/t39.30808-6/298582313_126620213437912_3122356429374717119_n.png?stp=dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=19026a&_nc_ohc=UKFJQnPuKSoAX_S8Mco&_nc_ht=scontent.fpnq2-1.fna&oh=00_AfCD5dDK4hs5Mde3LWDlyHDvX-nuloA-dZIyJEeyYqEcQw&oe=6498C736" alt="About Us" />
            </div>
            <div className="about-description">
                <h2>About Us</h2>
                <p>
                    We are a fitness brand that welcomes everyone to achieve a well-being program
                    and lead a healthier life at affordable prices.
                </p>
                <p>
                    We make it easy to add different workouts that help in muscle and strength building,
                    and toning into your daily routine which can be tailored to your needs with the help
                    of digital classes and training that can be done from your living room as well as in the gym.
                </p>
                <p>
                    We have got you covered with supplements, free workouts, group activities, healthy recipes,
                    and wellbeing tips at the gym, App, and on social media.
                </p>
                <p>
                    With easy access to an experienced set of gym and passionate trainers,
                    you will have the full assistance you need to reach your goals in one place.
                </p>
            </div>
        </div>
    );
};

export default About;
