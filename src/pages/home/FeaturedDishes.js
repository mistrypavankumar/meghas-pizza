import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import Heading from "../../components/Heading"
import FeaturedCards from './components/FeaturedCards'
import Button from "../../components/Button"
import FeaturedCardsDetails from './data/FeaturedDishesDetail'
import './FeaturedDishes.css'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root} id="featuredDishes">

            <div className="featured_heading">
                <Heading
                    mainHeading="Featured Dishes"
                    mainHeadingSize="2.7rem" />
            </div>
            <div className = "nav_tab">
            
                <AppBar position="static" className = "tab_theame">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab className = "tab" label="Pasta" {...a11yProps(0)} />
                        <Tab className = "tab" label="Pizza" {...a11yProps(1)} />
                        <Tab className = "tab" label="Salad" {...a11yProps(2)} />
                        <Tab className = "tab" label="Drinks" {...a11yProps(3)} />
                    </Tabs>
                </AppBar>

                <TabPanel className="tab_container" value={value} index={0}>
                    <div className="main">
                        <div class="leftSide_card">
                            <div class="row">
                                <div class="col-6 display">
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[0].dishName}
                                        price={FeaturedCardsDetails[0].price}
                                        img={FeaturedCardsDetails[0].dishImg}
                                        desc={FeaturedCardsDetails[0].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[1].dishName}
                                        price={FeaturedCardsDetails[1].price}
                                        img={FeaturedCardsDetails[1].dishImg}
                                        desc={FeaturedCardsDetails[1].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[2].dishName}
                                        price={FeaturedCardsDetails[2].price}
                                        img={FeaturedCardsDetails[2].dishImg}
                                        desc={FeaturedCardsDetails[2].desc}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="rightSide_card">
                            <div class="row">
                                <div class="col-6 display">
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[3].dishName}
                                        price={FeaturedCardsDetails[3].price}
                                        img={FeaturedCardsDetails[3].dishImg}
                                        desc={FeaturedCardsDetails[3].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[4].dishName}
                                        price={FeaturedCardsDetails[4].price}
                                        img={FeaturedCardsDetails[4].dishImg}
                                        desc={FeaturedCardsDetails[4].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[5].dishName}
                                        price={FeaturedCardsDetails[5].price}
                                        img={FeaturedCardsDetails[5].dishImg}
                                        desc={FeaturedCardsDetails[5].desc}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className="tab_container" value={value} index={1}>
                    <div className="main">
                        <div class="leftSide_card">
                            <div class="row">
                                <div class="col-6 display">
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[0].dishName}
                                        price={FeaturedCardsDetails[0].price}
                                        img={FeaturedCardsDetails[0].dishImg}
                                        desc={FeaturedCardsDetails[0].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[1].dishName}
                                        price={FeaturedCardsDetails[1].price}
                                        img={FeaturedCardsDetails[1].dishImg}
                                        desc={FeaturedCardsDetails[1].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[2].dishName}
                                        price={FeaturedCardsDetails[2].price}
                                        img={FeaturedCardsDetails[2].dishImg}
                                        desc={FeaturedCardsDetails[2].desc}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="rightSide_card">
                            <div class="row">
                                <div class="col-6 display">
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[3].dishName}
                                        price={FeaturedCardsDetails[3].price}
                                        img={FeaturedCardsDetails[3].dishImg}
                                        desc={FeaturedCardsDetails[3].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[4].dishName}
                                        price={FeaturedCardsDetails[4].price}
                                        img={FeaturedCardsDetails[4].dishImg}
                                        desc={FeaturedCardsDetails[4].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[5].dishName}
                                        price={FeaturedCardsDetails[5].price}
                                        img={FeaturedCardsDetails[5].dishImg}
                                        desc={FeaturedCardsDetails[5].desc}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className="tab_container" value={value} index={2}>
                    <div className="main">
                        <div class="leftSide_card">
                            <div class="row">
                                <div class="col-6 display">
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[0].dishName}
                                        price={FeaturedCardsDetails[0].price}
                                        img={FeaturedCardsDetails[0].dishImg}
                                        desc={FeaturedCardsDetails[0].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[1].dishName}
                                        price={FeaturedCardsDetails[1].price}
                                        img={FeaturedCardsDetails[1].dishImg}
                                        desc={FeaturedCardsDetails[1].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[2].dishName}
                                        price={FeaturedCardsDetails[2].price}
                                        img={FeaturedCardsDetails[2].dishImg}
                                        desc={FeaturedCardsDetails[2].desc}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="rightSide_card">
                            <div class="row">
                                <div class="col-6 display">
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[3].dishName}
                                        price={FeaturedCardsDetails[3].price}
                                        img={FeaturedCardsDetails[3].dishImg}
                                        desc={FeaturedCardsDetails[3].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[4].dishName}
                                        price={FeaturedCardsDetails[4].price}
                                        img={FeaturedCardsDetails[4].dishImg}
                                        desc={FeaturedCardsDetails[4].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[5].dishName}
                                        price={FeaturedCardsDetails[5].price}
                                        img={FeaturedCardsDetails[5].dishImg}
                                        desc={FeaturedCardsDetails[5].desc}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className="tab_container" value={value} index={3}>
                    <div className="main">
                        <div class="leftSide_card">
                            <div class="row">
                                <div class="col-6 display">
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[0].dishName}
                                        price={FeaturedCardsDetails[0].price}
                                        img={FeaturedCardsDetails[0].dishImg}
                                        desc={FeaturedCardsDetails[0].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[1].dishName}
                                        price={FeaturedCardsDetails[1].price}
                                        img={FeaturedCardsDetails[1].dishImg}
                                        desc={FeaturedCardsDetails[1].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[2].dishName}
                                        price={FeaturedCardsDetails[2].price}
                                        img={FeaturedCardsDetails[2].dishImg}
                                        desc={FeaturedCardsDetails[2].desc}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="rightSide_card">
                            <div class="row">
                                <div class="col-6 display">
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[3].dishName}
                                        price={FeaturedCardsDetails[3].price}
                                        img={FeaturedCardsDetails[3].dishImg}
                                        desc={FeaturedCardsDetails[3].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[4].dishName}
                                        price={FeaturedCardsDetails[4].price}
                                        img={FeaturedCardsDetails[4].dishImg}
                                        desc={FeaturedCardsDetails[4].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[5].dishName}
                                        price={FeaturedCardsDetails[5].price}
                                        img={FeaturedCardsDetails[5].dishImg}
                                        desc={FeaturedCardsDetails[5].desc}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>

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
        </div>
    );
}




































// import React,{useState} from 'react'
// import Heading from '../../components/Heading'; 

// import { Tabs, Tab, TabPane } from 'react-bootstrap';

// import './FeaturedDishes.css'


// export default function FeaturedDishes() {
//     const [key, setkey] = useState('home')

//     return (
//         <>
//             <section id = "featuredDishes">
//                 
//                 <div>




















{/* <Tabs
                            id = "controlled-tab-ex"
                            activeKey = {key}
                            onSelect = {(k) => setkey(k)}
                            
                            
                        >
                            <Tab eventKey = "home" title = "Pasta">
                                <TabPane class = "tab_container" id = "home">
                                   
                                </TabPane>
                                
                            </Tab>
                                

                            <Tab eventKey = "home1" title = "Pizza">
                             <TabPane class = "tab_container">
                                    {/* <h1>hello</h1> */}
//                                 </TabPane>
//                             </Tab>


//                             <Tab eventKey = "home2" title = "Salad">
//                                 <TabPane class = "tab_container">
//                                     {/* <h1>hello</h1> */}
//                                 </TabPane>
//                             </Tab>


//                             <Tab eventKey = "home3" title = "Drinks">
//                                 <TabPane class = "tab_container">
//                                     {/* <h1>hello</h1> */}
//                                 </TabPane>
//                             </Tab>

//                         </Tabs> 


//                </div> */}
//                

//             </section>
//         </>
//     )
// }
