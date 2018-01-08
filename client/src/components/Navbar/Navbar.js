import React from 'react'
import './Navbar.css'



const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-md sticky-top navbar-dark bg-dark">
            <div className='container-fluid '>
            <a href="#home">
                <img className='img-fluid brand-image brand-pos' src={'../public/imgs/gbbq1.png'} alt='gordonsbbq logo'/>
            </a>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" aria-haspopup="true" data-target="#navCollapse" aria-controls="navCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
     
                <div className="collapse navbar-collapse justify-content-end nav-pos" id="navCollapse">
                
                    <ul className="navbar-nav nav-tabs list-group" id="myNavBar">
                        <li className="nav-item">
                            <a className="nav-link" id='homeLink' href="#home">Home <span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#about">About <span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#gallery">Gallery <span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" href="#contactForm"  data-toggle="modal" data-target="#contactForm">Contact <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id='soc-menu' data-toggle="dropdown" href='/' role="button" aria-haspopup="true" aria-expanded="false">Social Media</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item d-inlne-block" id='insta' rel="noopener noreferrer" target='_blank' href="https://www.instagram.com/gordonsbbq/">Instagram</a>
                                <a className="dropdown-item" id='fb' rel="noopener noreferrer" target='_blank' href="https://www.facebook.com/gordonsbarbecue/">Facebook</a>
                                <a className="dropdown-item" id='yt' rel="noopener noreferrer" target='_blank' href="https://www.youtube.com/user/Nhoddus/featured">YouTube</a>
                                <a className="dropdown-item" id='tw' rel="noopener noreferrer" target='_blank' href="https://www.twitch.tv/nhoddus">Twitch</a>
                            </div>
                        </li>                       
                    </ul> 
                </div>
            </div>
        </nav>
    )
}
    
export default Navbar