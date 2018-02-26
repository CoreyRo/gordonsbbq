import React, { Component } from 'react'
import About from '../../components/About'
import Gallery from '../../components/Gallery'
import './Home.css'

class Home extends Component {
    state ={

    }
    render(){
        return(
            <div >
                <div className='about-container'>
                    <About />
                </div>
                <div className='gallery-container'>
                    <Gallery />
                </div>
            </div>
        )
    }
}

export default Home