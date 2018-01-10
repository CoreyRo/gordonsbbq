import React, { Component } from 'react'
import './About.css'

class About extends Component {
    state = {

    }

    componentDidMount (){

    }

    render (){

        return(
                <div className='scroll-adjust' id='about'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <span className=''>
                                    <img className="soc-icon-header-G img-fluid d-inline-block" src={'../public/imgs/gbbq1.png'} alt='gordonsbbq logo'/>
                                    <h1 className='d-inline-block about-h1'>Gordon's BBQ</h1>
                                </span>
                            </div>
                        </div>
                        <div className='row about-div about-text-div'>
                            <div className='col-md-12'>
                                <div className='row about-div-1 about'>

                                    <div className='col-md-3 d-center-block about-pic-div-1'>
                                        <img className="img-fluid mx-auto gordon-pic" src="../public/imgs/gordonbranchaud.jpg" alt="gordon-branchaud" />
                                    </div>

                                    <div className='col-md-9 about-text-div-1'>
                                    <span className='about-span'> A little about myself... </span>
                                        <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Cursus sit amet dictum sit amet justo donec enim. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. 
                                        Elementum nibh tellus molestie nunc. Ut ornare lectus sit amet est placerat. </p>

                                        <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Cursus sit amet dictum sit amet justo donec enim. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. 
                                        Elementum nibh tellus molestie nunc. Ut ornare lectus sit amet est placerat. </p>

                                    </div>

                                </div>
                                <div className='row about-div-2'>

                                    <div className='col-md-8 about-text-div-2'>
                                        <span className='about-span'> How I got into BBQ... </span>
                                        <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                            Cursus sit amet dictum sit amet justo donec enim. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. 
                                            Elementum nibh tellus molestie nunc. Ut ornare lectus sit amet est placerat. </p>
                                    </div>

                                    <div className='col-md-4 about-pic-div-2'>
                                        <img className="img-fluid mx-auto gordon-pic" src="../public/imgs/gordonbranchaud2.jpg" alt="gordon-branchaud" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default About