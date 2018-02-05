import React, { Component } from 'react'
import './About.css'

class About extends Component {
    state = {

    }

    componentDidMount (){

    }

    render (){

        return(
            <div className='container'>
                <div className='scroll-adjust' id='about'>  
                    <div className='row about-div'>
                    <div className='col-md-4 mx-auto mobile-pic'>
                    <div className='about-header mobile-pic'>
                            <h1 className='headerA'>Gordon's BBQ</h1>
                            <h4 className='headerB'>CALIFORNIAN BBQ WITH VIRGINIAN ROOTS</h4>.
                        </div>
                            <img className="img-fluid gordon-pic" src="../public/imgs/gordonbranchaud.jpg" alt="gordon-branchaud" />
                        </div>
                        <div className='col-md-8'>
                        <div className='about-header desktop-pic'>
                            <h1 className='headerA'>Gordon's BBQ</h1>
                            <h4 className='headerB'>CALIFORNIAN BBQ WITH VIRGINIAN ROOTS</h4>.
                        </div>
                        <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Cursus sit amet dictum sit amet justo donec enim. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. 
                        Elementum nibh tellus molestie nunc. Ut ornare lectus sit amet est placerat. </p>

                        <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Cursus sit amet dictum sit amet justo donec enim. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. 
                        Elementum nibh tellus molestie nunc. Ut ornare lectus sit amet est placerat. </p>
                        </div>
                        <div className='col-md-4 mx-auto text-center desktop-pic'>
                            <img className="img-fluid gordon-pic" src="../public/imgs/gordonbranchaud.jpg" alt="gordon-branchaud" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About