import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import Heading from "../../../components/Heading"
import FeaturedCards from '../components/FeaturedCards'
import Button from "../../../components/Button"
import FeaturedCardsDetails from '../data/FeaturedDishesDetail'
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
                                        title={FeaturedCardsDetails[6].dishName}
                                        price={FeaturedCardsDetails[6].price}
                                        img={FeaturedCardsDetails[6].dishImg}
                                        desc={FeaturedCardsDetails[6].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[7].dishName}
                                        price={FeaturedCardsDetails[7].price}
                                        img={FeaturedCardsDetails[7].dishImg}
                                        desc={FeaturedCardsDetails[7].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[8].dishName}
                                        price={FeaturedCardsDetails[8].price}
                                        img={FeaturedCardsDetails[8].dishImg}
                                        desc={FeaturedCardsDetails[8].desc}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="rightSide_card">
                            <div class="row">
                                <div class="col-6 display">
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[9].dishName}
                                        price={FeaturedCardsDetails[9].price}
                                        img={FeaturedCardsDetails[9].dishImg}
                                        desc={FeaturedCardsDetails[9].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[10].dishName}
                                        price={FeaturedCardsDetails[10].price}
                                        img={FeaturedCardsDetails[10].dishImg}
                                        desc={FeaturedCardsDetails[10].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[11].dishName}
                                        price={FeaturedCardsDetails[11].price}
                                        img={FeaturedCardsDetails[11].dishImg}
                                        desc={FeaturedCardsDetails[11].desc}
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
                                        title={FeaturedCardsDetails[12].dishName}
                                        price={FeaturedCardsDetails[12].price}
                                        img={FeaturedCardsDetails[12].dishImg}
                                        desc={FeaturedCardsDetails[12].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[13].dishName}
                                        price={FeaturedCardsDetails[13].price}
                                        img={FeaturedCardsDetails[13].dishImg}
                                        desc={FeaturedCardsDetails[13].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[14].dishName}
                                        price={FeaturedCardsDetails[14].price}
                                        img={FeaturedCardsDetails[14].dishImg}
                                        desc={FeaturedCardsDetails[14].desc}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="rightSide_card">
                            <div class="row">
                                <div class="col-6 display">
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[15].dishName}
                                        price={FeaturedCardsDetails[15].price}
                                        img={FeaturedCardsDetails[15].dishImg}
                                        desc={FeaturedCardsDetails[15].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[16].dishName}
                                        price={FeaturedCardsDetails[16].price}
                                        img={FeaturedCardsDetails[16].dishImg}
                                        desc={FeaturedCardsDetails[16].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[17].dishName}
                                        price={FeaturedCardsDetails[17].price}
                                        img={FeaturedCardsDetails[17].dishImg}
                                        desc={FeaturedCardsDetails[17].desc}
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
                                        title={FeaturedCardsDetails[18].dishName}
                                        price={FeaturedCardsDetails[18].price}
                                        img={FeaturedCardsDetails[18].dishImg}
                                        desc={FeaturedCardsDetails[18].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[19].dishName}
                                        price={FeaturedCardsDetails[19].price}
                                        img={FeaturedCardsDetails[19].dishImg}
                                        desc={FeaturedCardsDetails[19].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[20].dishName}
                                        price={FeaturedCardsDetails[20].price}
                                        img={FeaturedCardsDetails[20].dishImg}
                                        desc={FeaturedCardsDetails[20].desc}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="rightSide_card">
                            <div class="row">
                                <div class="col-6 display">
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[21].dishName}
                                        price={FeaturedCardsDetails[21].price}
                                        img={FeaturedCardsDetails[21].dishImg}
                                        desc={FeaturedCardsDetails[21].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[22].dishName}
                                        price={FeaturedCardsDetails[22].price}
                                        img={FeaturedCardsDetails[22].dishImg}
                                        desc={FeaturedCardsDetails[22].desc}
                                    />
                                    <FeaturedCards
                                        title={FeaturedCardsDetails[23].dishName}
                                        price={FeaturedCardsDetails[23].price}
                                        img={FeaturedCardsDetails[23].dishImg}
                                        desc={FeaturedCardsDetails[23].desc}
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
