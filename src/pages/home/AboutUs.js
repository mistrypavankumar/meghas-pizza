import React from 'react'
import Heading from "./../../components/Heading"
import AboutUsSlide from "./components/AboutUsSlide"
import './AboutUs.css'

export default function AboutUs() {
    return (
        <>
            <div id = "about_section">
                <div className = "main_heading">
                    <Heading
                        subTitle = "some good reviews"
                        subTitleSize = "1.5rem"
                        subTitleColor = "rgb(255, 187, 0)" 
                        mainHeading = "What People Says"
                        mainHeadingSize = "2.7rem"
                        mainHeadingColor = "#fff"
                    />
                </div>

                <AboutUsSlide />
            </div>
        </>
    )
}
