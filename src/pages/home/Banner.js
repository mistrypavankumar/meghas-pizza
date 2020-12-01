import React from 'react'
import Navbar from '../../components/Navbar'
import '../../App.css'
import '../home/Banner.css'
import Button from '../../components/Button'

const Banner = () => {
    return(
        <>
           <div className = "header">
               <Navbar />

               <div className = "Banner_heading">
                    <h1>The Best Pizza in Town</h1>
                    <Button 
                    buttonName = "Order Online Now"
                    borderStyle = "none"
                    borderRadius = "50px"
                    width = "180px"
                    height = "7vh"
                    custom_btn_style = 'btn_style'

                    />
               </div>
            </div>
        </>
    );
}


export default Banner