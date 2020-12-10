import React from 'react'
import "./FeaturedCards.css"

export default function FeaturedCards(props) {

    const opentab = `#${props.title}`
    return (
        <>
            <div className = "card_main_cantainer">
                <div className = "card_container">
                    <div className = "img_content">
                        <img src = {props.img} alt = "img" />
                    </div>
                    <div className = "description">
                        <div className = "title_">
                        <a href = {opentab}><h1>{props.title}</h1></a>
                        <h3>{props.price}</h3>
                        </div>
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>            
        </>
    )
}


