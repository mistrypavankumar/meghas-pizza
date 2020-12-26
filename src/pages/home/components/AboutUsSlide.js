import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AboutUsSlider.css';
import WhatPeopleSay from '../data/WhatPeopleSay';

// import "./../Responsive.css"

class AboutUsSlider extends Component {
	render() {
		var settings = {
			dots: true,
			infinite: true,
			autoplay: true,
			speed: 500,
			centerMode: true,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<div className="s_container col-s-6">
				<Slider {...settings}>
					{WhatPeopleSay.map((data) => {
						return (
							<div className="wdt" key={data._id}>
								<p>{data.comment}</p>
								<h3>{data.customerName}</h3>
							</div>
						);
					})}
				</Slider>
			</div>
		);
	}
}

export default AboutUsSlider;
