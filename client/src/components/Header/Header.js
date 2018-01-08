import React from 'react'
import './Header.css'
import Carousel from '../Carousel/Carousel';

const Header = (props) => {
	return(
		<div className='header-div'>
			<img className='mx-auto d-flex img-fluid brand-img' src={'../public/imgs/gbbqr3.png'} alt='gordonbrand'/>
			<Carousel />
			
		</div>
	)
	
}

export default Header