import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Quotes.css';

const Quotes = () => {
    const quotes = [
        {
            name: 'Priyanka',
            quote: 'The studio is spacious and equipped with the latest equipment Fantastic place to workout.',
        },
        {
            name: 'Suvidha Verma',
            quote: 'The fitness trainers at Urban Fit Studio are knowledgeable, helpful and provide amazing training without any doubt. Love the happy vibe.',
        },
        {
            name: 'Harshad Shinde',
            quote: 'Urban fit studio is truly an amazing place to start building a fit and healthy body. The studio has a very comfortable and positive vibes.',
        },
        {
            name: 'Raj k',
            quote: 'The studio is good with a wide range of equipment in a good location. The staff is also polite and helpful.',
        },
        {
            name: 'Ajinkya',
            quote: 'Amazing ambience, absolute cleanliness . I really enjoy the positive vibes in the studio.',
        },
        {
            name: 'Ria',
            quote: 'The gym equipment is top class and the staff is really warm and welcoming. Truly recommend.',
        },
        // Add more quotes as needed
    ];

    return (
        <div className="quotes-page">
            <div className="quotes-carousel">
                <Carousel showThumbs={false}>
                    {quotes.map((quote, index) => (
                        <div key={index}>
                            <h3>{quote.name}</h3>
                            <p>{quote.quote}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Quotes;
