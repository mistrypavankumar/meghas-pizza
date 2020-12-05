import React from 'react'
import Banner from './pages/home/Banner'
import Cards from './pages/home/Cards'
import WelcomePage from './pages/home/WelcomePage'
import CardsData from './pages/home/data/CardsData'
import './Home.css'


export default function Home() {

    const card = (c,i) => {
        return (
            <Cards 
            dishSrc = {CardsData[i].dishImage}
            title = {CardsData[i].dishName}
            desc = {CardsData[i].disciption}
            price = {CardsData[i].price}
            
        />
        );
    }
    return (
        <>
            <Banner />
            <WelcomePage />

            <div className = "deshesContainer">
                <div className = "card_contanier">
                    {CardsData.map(card)}
                </div>
            </div>
        </>
    )
}
