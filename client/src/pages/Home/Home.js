import React, { Component } from 'react'
import About from '../../components/About'
import Contact from '../../components/Contact'
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
                <div className='row container-fluid mx-auto'>
                    <div className='col-md-12 '>
                        <Contact />
                    </div>
                </div>


            </div>

        )
    }
    
}

export default Home