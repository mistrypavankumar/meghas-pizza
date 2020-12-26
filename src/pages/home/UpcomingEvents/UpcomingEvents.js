import React from 'react'
import Heading from '../../../components/Heading'
import Card from './Card/Card'
import './UpcomingEvents.css'

import CardsData from "./data/cardsData";

export default function UpcomingEvents() {
    return (
        <>
          
               <div className="main_heading_">
                    <Heading 
                    subTitle = "Some good news"
                    subTitleColor = "rgb(0, 167, 14)"
                    subTitleSize = ""
                    mainHeading = "Upcoming Events"
                    mainHeadingSize = "2.7rem"
                    mainHeadingColor = "#000000"
                />
          
           <div className="event_container">
               {CardsData.map((getdata,index ) => {
                   return <Card
                        key = {index}
                        img = {getdata.img}
                        eventDate = {getdata.evtDate}
                        description = {getdata.desc}
                    />
               })}
           </div>
           </div>
           
        </>
    )
}
