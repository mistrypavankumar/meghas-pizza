import React from 'react'
import Button from '../../../components/Button'
import "./Cards.css"

export default function Cards(props) {
    return (
        <>
            <div className = "cardContiner" style = {{margin:`${props.margin}`}}>
                <div className = "card_outer">
                    <div className = "img">
                        <img src = {props.dishSrc} alt = "" />
                    </div>
                    <div className = "content">
                        <h1>{props.title}</h1>
                        <p>{props.desc}</p>
                        <h2>{props.price}</h2>
                    </div>
                    <Button 
                        buttonName = "SELECT OPTIONS"
                        borderRadius = "50px"
                        width = "150px"
                        height = "40px"
                        borderStyle = "none"
                        custom_btn_style = "card_button"
                    />
                </div>
            </div>
        </>
    )
}
