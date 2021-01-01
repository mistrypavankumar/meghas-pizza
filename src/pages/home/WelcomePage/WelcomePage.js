import React from 'react'
import Button from '../../../components/Button'
import './WelcomePage.css'

import img1 from '../../../assets/img4.jpg'
import img2 from '../../../assets/g7.jpg'



export default function WelcomePage() {
    return (
        <>
            <section id = "welcomePage">
            <div className="welcomePageContainer">
                <div className = "intro_section">
                <div className = "heading">

                    <h1>Welcome to Mega's Pizza </h1>

                    <div className = "sub_heading">
                        <h3>Our chefs are working 24/7 and are ready
                            to accept visitors and at any time of the 
                            day and night</h3>

                        <div className = "para">
                            <p>We would like to take this opportunity to welcome you at 
                            our Pizza House. We are offering a warm, friendly 
                            atmosphere to share a meal with family and friends 
                            at any time of the day or evening.</p>
                        </div>

                        <Button 
                            buttonName = "LEARN MORE"
                            borderStyle = "none"
                            width = "150px"
                            height = "50px"
                            borderRadius = "50px"
                            custom_btn_style = "cstyle"
                        />
                    </div>
                </div>
            </div>
        <div className = "rightSide_img">
            <div className = "img1">
                <div className = "img1_content">
                <h4>Specialty Pizza</h4>
                <h1>Only $13.99</h1>
                </div>
                <img  src = {img1} alt = "" style = {{width: "230px", height: "350px",}}/>
            </div>

            <div className = "img2">
                <div className = "img2_content">
                    <h4>Recive a free</h4>
                    <h1>Gift Card</h1>
                </div>
            <img src = {img2} alt = "" style = {{width: "230px", height: "350px"}}/>
            </div>
        </div>    
            </div>
            
            </section>
        </>
    )
}
