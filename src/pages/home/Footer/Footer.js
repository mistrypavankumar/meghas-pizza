import React from 'react'

import logo from '../../../assets/MeghasPizza.gif';
import './Footer.css'

export default function Footer() {
    return (
        <>
            <footer>
                <img src={logo} alt="logo" />
                <p><span className="brand">Megha's pizza</span> © 2020. All rights reserved.</p>
            </footer>
        </>
    )
}
