import React, {useState} from 'react'
import Heading from '../../components/Heading'; 
import './FeaturedDishes.css'


export default function FeaturedDishes() {

    const [active, setActive] = useState(false);


    const onclickHandler = (e) => {
        e.preventDefault();
        setActive(true);

        const className = "active"; 
        // console.log("you clicked")
    }
    return (
        <>
            <section id = "featuredDishes">
                <div className = "featured_heading">
                    <Heading 
                        mainHeading = "Featured Dishes"
                        mainHeadingSize = "2.7rem"
                    />
                </div>

                <div className = "nav_container">
                    <div className = "nav_menu">
                        <ul>
                            <a href = "pasta"  onClick ={onclickHandler} ><li className  = {active ? "active" : "deactive"}>PASTA DISHES</li></a>
                            <a href = "pizza"  onClick ={onclickHandler} ><li className  = {active ? "deactive" : "active"}>PIZZA</li></a>
                            <a href = "salad"  onClick ={onclickHandler} ><li className  = {active ? "deactive" : "active"}>SALADS</li></a>
                            <a href = "drinks"  onClick ={onclickHandler} ><li className  = {active ? "deactive" : "active"}>DRINKS</li></a>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
