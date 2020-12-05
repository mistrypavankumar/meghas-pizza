import React from 'react'
import '../App.css'

export default function Heading(props) {
    const cstyle = {
        color: `${props.subTitleColor}`,
        fontSize: `${props.subTitleSize}`,

    }

    return (
        <>
            <p style = {cstyle} id = "subTitle">{props.subTitle}</p>
            <h1>{props.mainHeading}</h1>
        </>
    )
}
