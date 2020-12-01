import React from 'react'
import './Button.css'

export default function Button(props) {

    const button_style= {
        border: `${props.borderStyle}`,
        borderRadius: `${props.borderRadius}`,
        outline: 'none',
        cursor: 'pointer',
        width: `${props.width}`,
        height: `${props.height}`

    }
    
    return (
        <>
            <button style = {button_style} className = {`${props.custom_btn_style} hover_effect`}>
                {props.buttonName}
            </button>
        </>
    )
}
