import React from 'react'
import '../App.css'

export default function Heading(props) {
    const cstyle = {
        color: `${props.subTitleColor}`,
        fontSize: `${props.subTitleSize}`,

    }

    const hstyle = {
        fontSize: `${props.mainHeadingSize}`,
        color: `${props.mainHeadingColor}`
    }

    return (
        <>
            <p style = {cstyle} id = "subTitle">{props.subTitle}</p>
            <h1 style = {hstyle}>{props.mainHeading}</h1>
        </>
    )
}
