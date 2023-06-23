import React from 'react'
import './Card.css';
function Card({image,name}) {
    return (
        <div >
           
                <div className="cards">
                    <img src={image} alt="Team Member 1" />
                    <div className="cards-body">
                        <h5 className="card-title">{name}</h5>
                    </div>
                </div>
           
        </div>
    )
}

export default Card