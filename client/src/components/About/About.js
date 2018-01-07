import React, { Component } from 'react'
import './About.css'

class About extends Component {
    state = {

    }

    componentDidMount (){

    }

    render (){

        return(

                        <div className='row container mx-auto about-div'>
                            <div className='col-md-8'>

                                <h1 className='about-h1'>ABOUT ME SECTION</h1>
                                <h3>Placeholder Title</h3>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Cursus sit amet dictum sit amet justo donec enim. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. 
                                    Elementum nibh tellus molestie nunc. Ut ornare lectus sit amet est placerat. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. 
                                    Et netus et malesuada fames ac. Viverra aliquet eget sit amet tellus cras adipiscing enim. Volutpat ac tincidunt vitae semper quis lectus. 
                                    Ut aliquam purus sit amet luctus venenatis lectus magna. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. 
                                    Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Enim ut sem viverra aliquet eget sit amet tellus cras. 
                                    Aliquet nec ullamcorper sit amet risus nullam eget felis eget.</p>
                            </div>
                            <div className='col-md-4'>
                                <img className="img-fluid mx-auto gordon-pic" src="../public/imgs/gordonbranchaud.jpg" alt="gordon-branchaud" />
                            </div>
                        </div>

        )

    }

}

export default About