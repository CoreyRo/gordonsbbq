import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import './Carousel.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadImg from '../HeadImg'
import Header from '../Header'
var Carousel = require('react-responsive-carousel').Carousel;

 
class CarouselComponent extends Component {
    
    render() {
        var settings = {
            autoplay:true,
            autoplaySpeed: 8000,
            pauseOnHover: false,
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            accessibility: false
          }
        return (   
            <div>
                <Header />
                <Slider {...settings}>
                    <div>
                        <HeadImg backgroundImage='https://i.imgur.com/mwegaiS.jpg' />
                    </div>
                    <div>
                        <HeadImg backgroundImage='https://i.imgur.com/CPtXEHq.jpg' />
                    </div>
                    <div>
                        <HeadImg backgroundImage='https://i.imgur.com/rKOLmBN.jpg' />
                    </div>
                    
                </Slider>
            </div>
           
            
        )
    }
}

 
export default CarouselComponent
 
// Don't forget to include the css in your page
 
// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
 
// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
 