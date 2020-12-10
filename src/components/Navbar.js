import React from 'react'
import NavbarData from './NavbarData'
import "./Navbar.css"
import Button from './Button';

import img from "./../assets/MeghasPizza.jpg"

export default function Navbar() {

    const number_of_items = 0;
    const total_amount = 0.00;


    const _navbardata = (nav, index) =>{
        return (
            <li className = "menu-item">
                {nav.menuName}
            </li>
        )
    }
    return (
        <>
            <nav>
                <div className = "navbar">
                    <ul>
                        {NavbarData.map(_navbardata)}
                    </ul>
                    
                </div>
                <div className = "logo">
                    
                </div>

                <div className = "right_menu">
                    <div className = "right_menu_content">
                    <h1 className = "heading1">123-456-7890</h1>
    <h1 className = "heading2">{`${number_of_items} items - $ ${total_amount}`}</h1>
                    
                    
                    <Button 
                    buttonName = "Book order"
                    borderStyle = "none"
                    borderRadius = "50px"
                    width = "120px"
                    height = "7vh"
                    custom_btn_style = "cbtnStyle"
                    />
                    </div>
                </div>
            </nav>
        </>
    )
}



