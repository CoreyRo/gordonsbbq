import React from 'react'
import Slider from 'react-slick'
import './Swiper.css'


const Swiper = (props) => {
    

    return(
        <div className='container-fluid' id="Swiper-div">
            <Slider {...props.settings}>
            {props.items.map(function(item,i){
                return(
                <div className="card" key={`${item.img.split(',')[0]}-${i}`}>
                    <img className="card-img-top" src={`../public/imgs/${item.img}`} alt={`${item.img.split(',')[0]}`} />
                    <div className="card-img-overlay">
                        <h5 className="slick-text card-title">{item.txt}</h5>
                    </div>
                </div>
                )
            })}
            </Slider>
        </div>
    )
}

export default Swiper