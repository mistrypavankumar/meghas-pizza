import React from 'react'
import './Button.css'

export default function Button(props) {

    const button_style= {
        border: `${props.borderStyle}`,
        borderRadius: `${props.borderRadius}`,
        width: `${props.width}`,
        height: `${props.height}`

    }
    
    return (
        <>
            <button style = {button_style} className = {props.custom_btn_style}>
                {props.buttonName}
            </button>
        </>
    )
}
