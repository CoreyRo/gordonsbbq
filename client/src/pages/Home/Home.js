import React, { Component } from 'react'
import Carousel from '../../components/Carousel'
import About from '../../components/About'
import Header from '../../components/Header'

import './Home.css'
import axios from 'axios'


class Home extends Component {
    state ={

    }


    render(){
        return(
            <div className='container-fluid'>              
                <div className='row'>
                    <div className='col-md-12 scroll-adjust' id='about'>
                        <About />
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Home