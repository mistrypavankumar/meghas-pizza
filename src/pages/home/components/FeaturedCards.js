import React from 'react'
import "./FeaturedCards.css"

export default function FeaturedCards(props) {
    return (
        <>
            <div className = "card_main_cantainer">
                <div className = "card_container">
                    <div className = "img_content">
                        <img src = {props.img} alt = "img" />
                    </div>
                    <div className = "description">
                        <h1>{props.title}</h1>
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>            
        </>
    )
}


