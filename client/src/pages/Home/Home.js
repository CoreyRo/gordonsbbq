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
                
                

            <div className='container-fluid'>
            
                <div className='row container-fluid mx-auto'>
                    
                    <div className='col-md-12'>
                        <About />
                    </div>
                </div>

                <div className='seperator mx-auto'>
                </div>
                <div className='row container-fluid mx-auto'>
                    <div className='col-md-12 '>
                        <Gallery />
                    </div>
                </div>

                <div className='seperator mx-auto'>
                </div>
                <div className='row container-fluid mx-auto'>
                    <div className='col-md-12 '>
                        <Contact />
                    </div>
                </div>
            </div>

            </div>

        )
    }
    
}

export default Home