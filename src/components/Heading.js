import React from 'react'
import '../App.css'

export default function Heading(props) {
    const cstyle = {
        color: `${props.subTitleColor}`,
        fontSize: `${props.subTitleSize}`,
        textAlign: `${props.textAlign}`

    }

    const hstyle = {
        fontSize: `${props.mainHeadingSize}`,
        color: `${props.mainHeadingColor}`,
        fontFamily: 'sans-serif'
    }

    return (
        <>
            <p style = {cstyle} id = "subTitle">{props.subTitle}</p>
            <h1 style = {hstyle}>{props.mainHeading}</h1>
        </>
    )
}
