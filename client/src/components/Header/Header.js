import HeadImg from '../HeadImg'
import React from 'react'
import './Header.css'

const Header = (props) => {
	return(
		<div>
			<h1 className="headerTitle">Gordons BBQ</h1>
			<h2 className="headerDesc"></h2>
			<img className='img-fluid brand-image' src={'../public/imgs/gbbqr.png'} />
		</div>
	)
	
}

export default Header