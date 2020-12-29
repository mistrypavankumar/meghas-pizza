import React from 'react'
import Heading from './../../../components/Heading'

import img1 from './../../../assets/1.jpg'
import img2 from './../../../assets/3.jpg'

import "./Contact.css"

export default function Contact() {
    return (
        <>
            <section id="contact_container">
               <div class = "main_container_">
                    <div className="leftSide_ ">
                    <img src = {img1} alt = "img1" />
                    <img src = {img2} alt = "img2" />
                </div>

                <div className="rightSide_ ">
                    <div className="contact_content">
                    <Heading 
                        subTitle = "get in touch"
                        subTitleColor = "red"
                        subTitleSize = "1.5rem"
                        mainHeading = "Contact Info"
                        mainHeadingSize = "2.7rem"
                        mainHeadingColor = "black"
                     />
                    <p 
                    style = {
                        {padding: '20px 0px'}
                        }>
                        With great prices, excellent service, and some of the
                    food you’ll ever have…Pizza House is “Just the 
                    Best There is!”
                    </p>
                     
                </div>
                </div>
               </div>
            </section>
        </>
    )
}
