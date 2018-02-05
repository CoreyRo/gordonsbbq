import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import Slider from 'react-slick'
import './Gallery.css'


const Gallery = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide:true,
        touchThreshold: 4
      }

    return(
        <div className='container scroll-adjust' id="gallery">
            <Slider {...settings}>
                <div className="card" >
                    <img className="card-img-top" src="../public/imgs/burger.jpg" alt="instagram pic" />
                    <div className="card-body">
                    <a href="https://www.instagram.com/p/BUNn83hhSh2/?taken-by=gordonsbbq">
                        <span>
                            <img className="soc-icon img-fluid d-inline-block" alt="insta logo" src="../public/imgs/instalogo.png" />
                            <h5 className="card-title d-inline-block">@gordonsbbq</h5>
                        </span>
                    </a>
                        <p className="card-text">I wake up at 3-4pm on my days off, so this still counts as breakfast. Scrambled egg, fried potatoes, caramelized onion, roasted jalapeño...</p>  
                    </div>
                </div>

                <div className="card" >
                    <img className="card-img-top" src="../public/imgs/chicken1.jpg" alt="instagram pic" />
                    <div className="card-body">
                    <a href="https://www.instagram.com/p/BVbpSb5hs2z/?taken-by=gordonsbbq">
                        <span>
                            <img className="soc-icon img-fluid d-inline-block" alt="insta logo" src="../public/imgs/instalogo.png" />
                            <h5 className="card-title d-inline-block">@gordonsbbq</h5>
                        </span>
                    </a>
                        <p className="card-text">Aw yeah. @meatchurch Deez Nuts cleaned it up nice! Tightened up with an agave nectar, garlic and chili glaze before pulling it off the pecan. Solid.</p>  
                    </div>
                </div>

                <div className="card" >
                    <img className="card-img-top" src="../public/imgs/steak.jpg" alt="instagram pic" />
                    <div className="card-body">
                    <a href="https://www.instagram.com/p/BWTmPk9BWDL/?taken-by=gordonsbbq">
                        <span>
                            <img className="soc-icon img-fluid d-inline-block" alt="insta logo" src="../public/imgs/instalogo.png" />
                            <h5 className="card-title d-inline-block">@gordonsbbq</h5>
                        </span>
                    </a>
                        <p className="card-text">New York Strippin' baby.</p>  
                    </div>
                </div>

                <div className="card" >
                    <img className="card-img-top" src="../public/imgs/beefribs.jpg" alt="instagram pic" />
                    <div className="card-body">
                        <span>
                            <img className="soc-icon img-fluid d-inline-block" alt="insta logo" src="../public/imgs/instalogo.png" />
                            <h5 className="card-title d-inline-block">@gordonsbbq</h5>
                        </span>
                        <p className="card-text">Beef ribs, smoked 5 hours at 260, because we don't mind eating dinner at 3AM.</p>  
                    </div>
                </div>

                <div className="card" >
                    <img className="card-img-top" src="../public/imgs/lobster.jpg" alt="instagram pic" />
                    <div className="card-body">
                    <a href="https://www.instagram.com/p/BZAVedwBH5l/?taken-by=gordonsbbq">
                        <span>
                            <img className="soc-icon img-fluid d-inline-block" alt="insta logo" src="../public/imgs/instalogo.png" />
                            <h5 className="card-title d-inline-block">@gordonsbbq</h5>
                        </span>
                    </a>
                        <p className="card-text">Starting off the new year shellfishly. </p>  
                    </div>
                </div>

                <div className="card" >
                    <img className="card-img-top" src="../public/imgs/ribs.jpg" alt="instagram pic" />
                    <div className="card-body">
                        <a href="https://www.instagram.com/p/BZAVedwBH5l/?taken-by=gordonsbbq">
                        <span>
                            <img className="soc-icon img-fluid d-inline-block" alt="insta logo" src="../public/imgs/instalogo.png" />
                            <h5 className="card-title d-inline-block">@gordonsbbq</h5>
                        </span>
                        </a>
                        <p className="card-text">Baby backs and spare ribs pulling on back!</p>  
                    </div>
                </div>

                <div className="card" >
                    <img className="card-img-top" src="../public/imgs/bactaco.jpg" alt="instagram pic" />
                    <div className="card-body">
                        <a href="https://www.instagram.com/p/BZ4ExRXhR0t/?taken-by=gordonsbbq">
                            <span>
                                <img className="soc-icon img-fluid d-inline-block" alt="insta logo" src="../public/imgs/instalogo.png" />
                                <h5 className="card-title d-inline-block">@gordonsbbq</h5>
                            </span>
                        </a>
                        <p className="card-text">Happy *belated* National Taco Day! This took way too long to get done before 12 last night, but when you run out of tortillas, you use what you have... </p>  
                    </div>
                </div>

                <div className="card" >
                    <img className="card-img-top" src="../public/imgs/chicken2.jpg" alt="instagram pic" />
                    <div className="card-body">
                        <a href="https://www.instagram.com/p/BSXBS3shXIz/?taken-by=gordonsbbq">
                        <span>
                            <img className="soc-icon img-fluid d-inline-block" alt="insta logo" src="../public/imgs/instalogo.png" />
                            <h5 className="card-title d-inline-block">@gordonsbbq</h5>
                        </span>
                        </a>
                        <p className="card-text">One last meal, before going full blown vegan.</p>  
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Gallery