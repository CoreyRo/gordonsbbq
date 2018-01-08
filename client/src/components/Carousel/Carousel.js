import React, { Component } from 'react';
import './Carousel.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadImg from '../HeadImg'
// import ReactDOM from 'react-dom';
// const Carousel = require('react-responsive-carousel').Carousel;
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

 
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
            accessibility: false,
            className: 'carousel-div'
            }
        return (   
            <div >
                <Slider {...settings}>
                    <div>
                        <HeadImg image='../public/imgs/1.jpg' />
                    </div>
                    <div>
                        <HeadImg image='../public/imgs/2.jpg' />
                    </div>
                    <div>
                        <HeadImg image='../public/imgs/3.jpg' />
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
 