import React,{useState} from 'react'
import Heading from '../../components/Heading'; 
import FeaturedCards from './components/FeaturedCards'
import FeaturedCardsDetails from './data/FeaturedDishesDetail'
import { Tabs, Tab, TabPane } from 'react-bootstrap';

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

               
                        <Tabs
                            id = "controlled-tab-ex"
                            activeKey = {key}
                            onSelect = {(k) => setkey(k)}
                            
                            
                        >
                            <Tab eventKey = "home" title = "Pasta">
                                <TabPane class = "tab_container" id = "home">
                                    <div className = "main">
                                        <div>
                                            <FeaturedCards
                                            img = {FeaturedCardsDetails[0].dishImg} 
                                            title = {FeaturedCardsDetails[0].dishName}
                                            desc = {FeaturedCardsDetails[0].desc}
                                        />
                                        <FeaturedCards
                                            img = {FeaturedCardsDetails[0].dishImg} 
                                            title = {FeaturedCardsDetails[0].dishName}
                                            desc = {FeaturedCardsDetails[0].desc}
                                        />
                                        <FeaturedCards
                                            img = {FeaturedCardsDetails[0].dishImg} 
                                            title = {FeaturedCardsDetails[0].dishName}
                                            desc = {FeaturedCardsDetails[0].desc}
                                        />
                                        </div>
                                        <div>
                                            <FeaturedCards
                                            img = {FeaturedCardsDetails[0].dishImg} 
                                            title = {FeaturedCardsDetails[0].dishName}
                                            desc = {FeaturedCardsDetails[0].desc}
                                        />
                                        <FeaturedCards
                                            img = {FeaturedCardsDetails[0].dishImg} 
                                            title = {FeaturedCardsDetails[0].dishName}
                                            desc = {FeaturedCardsDetails[0].desc}
                                        />
                                        <FeaturedCards
                                            img = {FeaturedCardsDetails[0].dishImg} 
                                            title = {FeaturedCardsDetails[0].dishName}
                                            desc = {FeaturedCardsDetails[0].desc}
                                        />
                                        </div>
                                    </div>
                    
                                </TabPane>
                            </Tab>


                            <Tab eventKey = "home1" title = "Pizza">
                             <TabPane class = "tab_container">
                                    <h1>hello</h1>
                                </TabPane>
                            </Tab>


                            <Tab eventKey = "home2" title = "Salad">
                                <TabPane class = "tab_container">
                                    <h1>hello</h1>
                                </TabPane>
                            </Tab>


                            <Tab eventKey = "home3" title = "Drinks">
                                <TabPane class = "tab_container">
                                    <h1>hello</h1>
                                </TabPane>
                            </Tab>

                        </Tabs>             
               
            </section>
        </>
    )
}
