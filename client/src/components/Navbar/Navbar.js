import React from 'react'
import './Navbar.css'



const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-md sticky-top navbar-dark bg-dark">
            <div className='container-fluid '>
                <img className='img-fluid brand-image brand-pos' src={'../public/imgs/gbbq1.png'} />
                
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" aria-haspopup="true" data-target="#navCollapse" aria-controls="navCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
     
                <div className="collapse navbar-collapse justify-content-end nav-pos" id="navCollapse">
                
                    <ul className="navbar-nav nav-tabs">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item active">
                            <a className="nav-link" href="#about">About <span className="sr-only">(current)</span></a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Social Media</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" rel="noopener noreferrer" target='_blank' href="https://www.instagram.com/gordonsbbq/">Instagram</a>
                                <a class="dropdown-item" rel="noopener noreferrer" target='_blank' href="https://www.facebook.com/gordonsbarbecue/">Facebook</a>
                                <a class="dropdown-item" rel="noopener noreferrer" target='_blank' href="https://www.youtube.com/user/Nhoddus/featured">YouTube</a>
                                <a class="dropdown-item" rel="noopener noreferrer" target='_blank' href="https://www.twitch.tv/nhoddus">Twitch</a>
                            </div>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Contact <span className="sr-only">(current)</span></a>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}
    
export default Navbar