import React from 'react'
import Banner from './pages/home/Banner/Banner'
import Cards from './pages/home/Cards/Cards'
import WelcomePage from './pages/home/WelcomePage/WelcomePage'
import CardsData from './pages/home/data/CardsData'
import './Home.css'
import Heading from './components/Heading'
import FeaturedDishes from './pages/home/FeaturesDishes/FeaturedDishes'


import AboutUs from './pages/home/AboutUs/AboutUs'
import UpcomingEvents from './pages/home/UpcomingEvents/UpcomingEvents'
import Footer from './pages/home/Footer/Footer';

export default function Home() {

    const card = (c,i) => {
        return (
           <>
             <Cards 
                key = {i}
                dishSrc = {CardsData[i].dishImage}
                title = {CardsData[i].dishName}
                desc = {CardsData[i].disciption}
                price = {CardsData[i].price}
             />

           </>
        );
    }
    return (
        <>
            <Banner />
            <WelcomePage />

            <div className = "deshesContainer">
                <div className = "deshesContainer_heading">
                    <Heading 
                        subTitle = "order online non"
                        subTitleColor = "rgb(255, 187, 0)"
                        subTitleSize = "1.5rem"
                        mainHeading = "Our Delicious Pizzas"
                        mainHeadingSize = "2.7rem"
                        mainHeadingColor = "#fff"
                    />
                </div>
                <div className = "card_contanier">
                    {CardsData.map(card)}
                </div>
            </div>
            
            <FeaturedDishes />

            <AboutUs />

            <UpcomingEvents />

            <Footer />
          
        </>
    )
}
