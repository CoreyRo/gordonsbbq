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
                                <h1 className='about-h1'>ABOUT ME SECTION</h1>
                                <h3>Placeholder Title</h3>
                            </div>
                        </div>
                        <div className='row about-div about-text-div'>
                            <div className='col-md-12'>
                                <div className='row about-div-1 about'>

                                    <div className='col-md-8 about-text-div-1'>
                                        <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                            Cursus sit amet dictum sit amet justo donec enim. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. 
                                            Elementum nibh tellus molestie nunc. Ut ornare lectus sit amet est placerat. </p>
                                            
                                        <p className='about-text'>Placerat vestibulum lectus mauris ultrices eros in cursus turpis. 
                                            Et netus et malesuada fames ac. Viverra aliquet eget sit amet tellus cras adipiscing enim. Volutpat ac tincidunt vitae semper quis lectus. 
                                            Ut aliquam purus sit amet luctus venenatis lectus magna.</p> 
                                            
                                        <p className='about-text'>Tempus quam pellentesque nec nam aliquam sem et tortor consequat. 
                                            Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Enim ut sem viverra aliquet eget sit amet tellus cras. 
                                            Aliquet nec ullamcorper sit amet risus nullam eget felis eget.</p>

                                        <p className='about-text'>Tempus quam pellentesque nec nam aliquam sem et tortor consequat. 
                                            Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Enim ut sem viverra aliquet eget sit amet tellus cras. 
                                            Aliquet nec ullamcorper sit amet risus nullam eget felis eget.</p>
                                    </div>
                                    <div className='col-md-4 about-pic-div-1'>
                                        <img className="img-fluid mx-auto gordon-pic" src="../public/imgs/gordonbranchaud.jpg" alt="gordon-branchaud" />
                                    </div>
                                </div>

                                <div className='row about-div-2'>
                                    
                                    <div className='col-md-5 about-pic-div-2'>
                                        <img className="img-fluid mx-auto gordon-pic" src="../public/imgs/gordonbranchaud2.jpg" alt="gordon-branchaud" />
                                    </div>

                                    <div className='col-md-7 about-text-div-2'>
                                        <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                            Cursus sit amet dictum sit amet justo donec enim. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. 
                                            Elementum nibh tellus molestie nunc. Ut ornare lectus sit amet est placerat. </p>
                                            
                                        <p className='about-text'>Placerat vestibulum lectus mauris ultrices eros in cursus turpis. 
                                            Et netus et malesuada fames ac. Viverra aliquet eget sit amet tellus cras adipiscing enim. Volutpat ac tincidunt vitae semper quis lectus. 
                                            Ut aliquam purus sit amet luctus venenatis lectus magna.</p> 
                                            
                                        <p className='about-text'>Tempus quam pellentesque nec nam aliquam sem et tortor consequat. 
                                            Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Enim ut sem viverra aliquet eget sit amet tellus cras. 
                                            Aliquet nec ullamcorper sit amet risus nullam eget felis eget.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default About