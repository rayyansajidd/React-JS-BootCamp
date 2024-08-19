import React from 'react';
import './cards.css'; 

function Card({image,title,text}) {
    return (
        <div className="main-container">
            <div className="card">
                <div className="image">
                    <img src= {image} alt="" />
                </div>
                <div className="body">
                    <h2 className="title">{title}</h2>
                    <p className="text">{text}</p>
                </div>
            </div>
        </div>    
    );
}

export default Card;
