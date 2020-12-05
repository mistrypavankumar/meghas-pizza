import React from 'react'
import "./Cards.css"

export default function Cards(props) {
    return (
        <>
            <div className = "cardContiner" style = {{margin:`${props.margin}`}}>
                <div className = "img">
                    <img src = {props.dishSrc} alt = "" />
                </div>
                <div className = "content">
                    <h1>{props.title}</h1>
                    <p>{props.desc}</p>
                    <h2>{props.price}</h2>
                </div>
            </div>
        </>
    )
}
