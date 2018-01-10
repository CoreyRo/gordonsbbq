import React, { Component } from 'react'
import './Footer.css'
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Footer extends Component {

    constructor(props)
    {
        super(props)
        this.state =
        {
            regEmail: ''
        }
    }

    handleInputChange = (event) =>
    {
        const { name, value } = event.target
        this.setState(
        {
            [name]: value
        })
    }
    handleClick = (e) => {
        e.preventDefault()
    }

    handleSubmit = (event) =>
    {
        // event.preventDefault()
        // axios.post('/api/mailer/join-mailer', { newUser: this.state.regEmail })
        // .then(res => console.log("submit ", res))
        // this.setState({ regEmail: '' })
    }

    render()
    {
        return (
            <footer className="footer col-sm-12">
                <div className='row'>
                    <div className="footerTop col-sm-12">
                        <form className="form-inline">
                            <div className="form-group mx-auto">    
                                <h2 className='Contact'>Contact Gordon's BBQ</h2>
                                <button className="nav-link footer-btn text-center mx-auto" href="#contactForm" onClick={this.handleClick} data-toggle="modal" data-target="#contactForm">Contact <span className="sr-only">(current)</span></button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='row'>
                    <div className="footerBot mx-auto col-sm-12">
                        <div className='container'>
                            <div className='row soc-media-links'>
                            
                                <div className='col-3'>
                                <div className='soc-media-div'>
                                <a href="https://www.instagram.com/gordonsbbq/" rel="noopener noreferrer" target="_blank">
                                <img className="soc-media-icon img-fluid" alt="insta logo" src="../public/imgs/instalogo.png" />
                                </a>
                                </div>
                                <p className='follow-text'> Follow me on Instagram </p>
                                </div>

                                <div className='col-3'>
                                <div className='soc-media-div'>
                                <a href="https://www.facebook.com/gordonsbarbecue/" rel="noopener noreferrer" target="_blank">
                                <img className="soc-media-icon img-fluid" alt="github logo" src="../public/imgs/fblogo.png" />
                                </a>
                                </div>
                                <p className='follow-text'> Like me on Facebook </p>
                                </div>

                                <div className='col-3'>
                                <div className='soc-media-div'>
                                <a href="https://www.youtube.com/user/Nhoddus/featured" rel="noopener noreferrer" target="_blank">
                                <img className="soc-media-icon img-fluid" alt="github logo" src="../public/imgs/ytlogo.png" />
                                </a>
                                </div>
                                <p className='follow-text'> Subscribe on Youtube </p>
                                </div>

                                <div className='col-3'>
                                <div className='soc-media-div'>
                                    <a href="https://www.twitch.tv/nhoddus" rel="noopener noreferrer" target="_blank">
                                    <img className="soc-media-icon img-fluid" alt="github logo" src="../public/imgs/twitchlogo.png" />
                                    </a>
                                    </div>
                                    <p className='follow-text'> Follow me on twitch </p>
                                </div>

                            </div>
                            <div className='footer-info'>
                                <p className='footer-info-text'>Gordon Branchaud</p>
                                <p className='footer-info-text'>example@email.com</p>
                                <p className='footer-info-text'>Copyright 2018</p>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
        )
    }

}

export default Footer