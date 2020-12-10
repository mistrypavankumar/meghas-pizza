import React,{useState} from 'react'
import Heading from '../../components/Heading'; 
import FeaturedCards from './components/FeaturedCards'
import FeaturedCardsDetails from './data/FeaturedDishesDetail'
import { Tabs, Tab, TabPane } from 'react-bootstrap';
import Button from "../../components/Button"

import './FeaturedDishes.css'


export default function FeaturedDishes() {
    const [key, setkey] = useState('home')
       
    return (
        <>
            <section id = "featuredDishes">
                <div className = "featured_heading">
                    <Heading 
                        mainHeading = "Featured Dishes"
                        mainHeadingSize = "2.7rem"
                    />
                </div>
                <div>
                        <Tabs
                            id = "controlled-tab-ex"
                            activeKey = {key}
                            onSelect = {(k) => setkey(k)}
                            
                            
                        >
                            <Tab eventKey = "home" title = "Pasta">
                                <TabPane class = "tab_container" id = "home">
                                    <div className = "main">
                                    <div class = "leftSide_card">
                                        <div class = "row">
                                            <div class = "col-6 display">
                                                 <FeaturedCards 
                                                    title = {FeaturedCardsDetails[0].dishName}
                                                    price = {FeaturedCardsDetails[0].price}
                                                    img = {FeaturedCardsDetails[0].dishImg}
                                                    desc = {FeaturedCardsDetails[0].desc}
                                                  />  
                                                <FeaturedCards 
                                                    title = {FeaturedCardsDetails[1].dishName}
                                                    price = {FeaturedCardsDetails[1].price}
                                                    img = {FeaturedCardsDetails[1].dishImg}
                                                    desc = {FeaturedCardsDetails[1].desc}
                                                  /> 
                                                 <FeaturedCards 
                                                    title = {FeaturedCardsDetails[2].dishName}
                                                    price = {FeaturedCardsDetails[2].price}
                                                    img = {FeaturedCardsDetails[2].dishImg}
                                                    desc = {FeaturedCardsDetails[2].desc}
                                                  />                            
                                            </div>
                                       </div>
                                    </div>
                                       <div class = "rightSide_card">
                                        <div class = "row">
                                                <div class = "col-6 display">
                                                    <FeaturedCards 
                                                        title = {FeaturedCardsDetails[3].dishName}
                                                        price = {FeaturedCardsDetails[3].price}
                                                        img = {FeaturedCardsDetails[3].dishImg}
                                                        desc = {FeaturedCardsDetails[3].desc}
                                                    />
                                                    <FeaturedCards 
                                                        title = {FeaturedCardsDetails[4].dishName}
                                                        price = {FeaturedCardsDetails[4].price}
                                                        img = {FeaturedCardsDetails[4].dishImg}
                                                        desc = {FeaturedCardsDetails[4].desc}
                                                    />    
                                                    <FeaturedCards 
                                                        title = {FeaturedCardsDetails[5].dishName}
                                                        price = {FeaturedCardsDetails[5].price}
                                                        img = {FeaturedCardsDetails[5].dishImg}
                                                        desc = {FeaturedCardsDetails[5].desc}
                                                    />  
                                            </div>      
                                       </div>
                                    </div>
                                    </div>
                                </TabPane>
                                
                            </Tab>
                                

                            <Tab eventKey = "home1" title = "Pizza">
                             <TabPane class = "tab_container">
                                    {/* <h1>hello</h1> */}
                                </TabPane>
                            </Tab>


                            <Tab eventKey = "home2" title = "Salad">
                                <TabPane class = "tab_container">
                                    {/* <h1>hello</h1> */}
                                </TabPane>
                            </Tab>


                            <Tab eventKey = "home3" title = "Drinks">
                                <TabPane class = "tab_container">
                                    {/* <h1>hello</h1> */}
                                </TabPane>
                            </Tab>

                        </Tabs> 

    
               </div>
               <div className = "explore_btn">
               <Button 
                        buttonName = "EXPLORE MORE"
                        borderRadius = "50px"
                        width = "160px"
                        height = "40px"
                        borderStyle = "none"
                        custom_btn_style = "featured_btn"
                    />
               </div>
                    
            </section>
        </>
    )
}
