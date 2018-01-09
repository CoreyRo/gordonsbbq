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
                                <input type="email" value={this.state.regEmail} className="form-control" name="regEmail" id="regEmail"
                                    onChange={this.handleInputChange} placeholder="enter your email" required />
                                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} id="regEmail-submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='row'>
                    <div className="footerBot col-sm-12 text-center mx-auto">
                        <div className='soc-media-links'>

                            <h5 className="mx-auto soc-media-title">Social Media Links</h5>

                            <a href="https://www.instagram.com/gordonsbbq/" rel="noopener noreferrer" target="_blank">
                            <img className="soc-media-icon img-fluid" alt="insta logo" src="../public/imgs/instalogo.png" />
                            </a>

                            <a href="https://www.facebook.com/gordonsbarbecue/" rel="noopener noreferrer" target="_blank">
                            <img className="soc-media-icon img-fluid" alt="github logo" src="../public/imgs/fblogo.png" />
                            </a>

                            <a href="https://www.youtube.com/user/Nhoddus/featured" rel="noopener noreferrer" target="_blank">
                            <img className="soc-media-icon img-fluid" alt="github logo" src="../public/imgs/ytlogo.png" />
                            </a>

                            <a href="https://www.twitch.tv/nhoddus" rel="noopener noreferrer" target="_blank">
                            <img className="soc-media-icon img-fluid" alt="github logo" src="../public/imgs/twitchlogo.png" />
                            </a>

                        </div>
                    </div>
                </div>
        </footer>
        )
    }

}

export default Footer