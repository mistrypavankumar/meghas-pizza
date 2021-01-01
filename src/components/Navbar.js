import React, { useState } from 'react'
import NavbarData from './NavbarData'
import "./Navbar.css"
import Button from './Button';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import MenuIcon from '@material-ui/icons/Menu';
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';

// import img from "./../assets/MeghasPizza.jpg"

export default function Navbar() {


    const number_of_items = 0;
    const total_amount = 0.00;
    
    const [navbar, setNavbar] = useState(false);
    const [openSlide, setOpenSlide] = useState(false);


    const iconstyle = {
        color: 'red',
    }


    const _navbardata = (nav, index) => {
        return (
            <li className={navbar ? "menu-item nav_active" : "menu-item"}>
                {nav.menuName}
            </li>
        )
    }

    const changeBg = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBg);

   
    const openSlide_ = () =>setOpenSlide(true);
    const closeSlide_ = () => setOpenSlide(false);

    return (
        <>
            
            <nav class={navbar ? "main_navbar nav_active" : "main_navbar"}>
                <div className={navbar ? "navbar nav_active" : "navbar"} >
                    <ul>
                        {NavbarData.map(_navbardata)}
                    </ul>

                </div>
                <div className={navbar ? "logo hide" : "logo"}>

                </div>

                <div className={navbar ? "right_menu nav_active" : "right_menu"}>
                    <div className="right_menu_content">
                        <h1 className={navbar ? "heading1 nav_active" : "heading1"}>
                        <PhoneOutlinedIcon style = {iconstyle}/>123-456-7890</h1>


                        <h1 className={navbar ? "heading2 nav_active" : "heading2"}> 
                        <ShoppingCartOutlinedIcon style={iconstyle} /> {`${number_of_items} items - $ ${total_amount}`}</h1>


                        <Button
                            buttonName="Book order"
                            borderStyle="none"
                            borderRadius="50px"
                            width="120px"
                            height="7vh"
                            custom_btn_style={navbar ? "cbtnStyle nav_active" : "cbtnStyle"}
                        />
                    </div>
                </div>
            </nav>

            {/*Mobile view logo  */}
             <div className= "logo"></div>
             <div className="mobileNavBarContainer">
                 <div class = {openSlide ? "menubarIcon active":"menubarIcon"} onClick = {openSlide_}>
                    <MenuIcon style = {{fontSize: "40px"}}/>
                </div>
                <div className = "menubarIcon1">
                    <ShoppingCartOutlinedIcon style = {{fontSize: "40px"}}/>
                </div>
             </div>
            <nav className = {openSlide ? "mobile_nav active":"mobile_nav"} onClick = {closeSlide_}>
                
                <div className= {openSlide ?  "sliderContainner active" : "sliderContainner"}>
                    <div className="sliderContent">
                        <ul>
                            <li><a href="#home">Home</a> </li>
                            <li><a href="#home">Menu</a> </li>
                            <li><a href="#featuredDishes">Features</a> </li>
                            <li><a href="#home">News</a> </li>
                            <li><a href="#home">Reservation</a> </li>
                            <li><a href="#contact_container">Contacs</a> </li>
                            <hr style = {{
                                width: "100%",
                                backgroundColor: 'rgb(158, 5, 5)'
                            }} />
                            <h3><PhoneOutlinedIcon />  123-456-7890</h3> 

                        </ul>

                        <Button
                            buttonName="BOOK A TABLE "
                            borderStyle="none"
                            borderRadius="50px"
                            width="120px"
                            height="7vh"
                            custom_btn_style="mobileNavBtn"
                        />
                    </div>
                </div>
            </nav>
        </>
    )
}



