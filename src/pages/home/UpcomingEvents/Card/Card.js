import React from 'react';
import './Card.css'

export default function Card(props) {
    return (
        <>
            <div className="container">
                <div className="img_container">
                    <img src={props.img} alt="event Img"/>
                </div>
                <div className="content">
                    <h3>{props.eventDate}</h3>
                    <div className="description">
                        <h2>{props.description}</h2>
                        <a href="#eventPage" >READ MORE</a>
                    </div>

                </div>
            </div>
            
        </>
    )
}
