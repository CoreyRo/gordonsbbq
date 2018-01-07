import React, { Component } from 'react'
import Carousel from '../../components/Carousel'
import About from '../../components/About'
import Contact from '../../components/Contact'
import Header from '../../components/Header'
import ScrollAnimation from 'react-animate-on-scroll';
import './Home.css'

import axios from 'axios'


class Home extends Component {
    state ={

    }


    render(){
        return(
            <div className='container-fluid'>            
              
                <div className='row container mx-auto'>
                    <div className='col-md-12'>
                        <ScrollAnimation offset={725} animateIn='fadeIn'animateOut='fadeOut'>
                        <About />
                        </ScrollAnimation>
                    </div>
                </div>
                <div className='seperator mx-auto'>
                </div>
                <div className='row container mx-auto'>
                    <div className='col-md-12 '>
                        <ScrollAnimation offset={600} animateIn='fadeIn'animateOut='fadeOut'>
                        <Contact />
                        </ScrollAnimation>
                    </div>
                </div>
                
            </div>
        )
    }
    
}

export default Home