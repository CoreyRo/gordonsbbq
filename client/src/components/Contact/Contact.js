import React, { Component } from 'react'
import axios from 'axios'
import Recaptcha from 'react-grecaptcha'
import Alert from 'react-s-alert'
import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/scale.css'
import './Contact.css'


class Contact extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        confirmEmail: '',
        howHear: 'Not selected',
        textBody: '',
        validated: false,
        sent: false
    }

    componentDidMount(){
    }

    handleInputChange = (e) => {
        let value = e.target.value
        let name = e.target.name
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        if(this.validateForm()){
            if(this.state.verified){
                axios.post('/api/contact',{
                    payload: this.state
                })
                .then(res => {
                    this.setState({
                        sent: !this.state.sent
                    }, () => this.confirmPost())
                })
                .catch(err => console.log('submit err', err)) 
            }
            else{
                window.location.reload()
            }
        }
        else{
            Alert.error('Email addresses do not match', {
                position: 'top',
                effect: 'scale',
                timeout: 'none',
                offset: 15,
            })
        }
    }

    confirmPost = () => {
        console.log("C")
        // document.getElementById('closeButton').addEventListener('close.bs.alert', this.confirmPost)
        // axios.post('/api/confirm',{
        //     payload: this.state
        // })
        // .then(res => {
        //     this.setState({
        //         sent: !this.state.sent
        //     })
        // })
        // .catch(err => console.log('submit err', err)) 
    }

    recapCallback = () =>{
        this.setState({
            verified: !this.state.verified
        })
    }

    expiredCallback = (res) => {

    }

    validateForm = (e) => {
        let { email } = this.state
        let { confirmEmail } = this.state
        if(email !== confirmEmail){
            return false
        }
        else{
            return true
        }
    }          

    closeAll = (e) => {     
        Alert.closeAll()
    }
    
    render(){
        return(
            <div className="modal fade" id="contactForm" tabIndex="-1" role="dialog" aria-labelledby="contactForm" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="contactModal">Contact Gordon's BBQ</h5>
                            <button type="button" onClick={this.testing} className="close" data-dismiss="modal" id='closeButton' aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.state.sent?
                            <div class="alert mx-auto alert-success" role="alert">
                                <h4 class="alert-heading">Message Sent!</h4>
                                <p>Thank you for your interest in GordonsBBQ! 
                                We will get back to you as soon as possible.</p>
                            </div>
                            :
                            <form id='contactForm' className='contactForm' onSubmit={this.handleFormSubmit}>
                                <div className='form-row'>
                                    <div className='col'>
                                        <div className="form-group">
                                            <label htmlFor="firstName" className="form-control-label">First Name:</label>
                                            <input type="text" className="form-control" name="firstName" id="firstName" placeholder="first name" onChange={this.handleInputChange} required />
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className="form-group">
                                            <label htmlFor="lastName" className="form-control-label">Last Name:</label>
                                            <input type="text" className="form-control" name="lastName" id="lastName" placeholder="last name" aria-describedby="inputGroupPrepend2" onChange={this.handleInputChange} required />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-control-label">Email:</label>
                                    <input type="email" className="form-control" ref='email' name="email" id="email" placeholder="name@example.com" onChange={this.handleInputChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmEmail" className="form-control-label">Confirm Email:</label>
                                    <input type="email" className="form-control" ref='confirmEmail' name="confirmEmail" id="confirmEmail" placeholder="name@example.com" onChange={this.handleInputChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="howHear">How did you hear about Gordon's BBQ</label>
                                    <select className="form-control" value={this.state.howHear} name='howHear' id='howHear' onChange={this.handleInputChange}>
                                        <option value='Not selected'>Select One...</option>
                                        <option value='Instagram'>Instagram</option>
                                        <option value='Facebook'>Facebook</option>
                                        <option value='Word of Mout'>Word of Mouth</option>
                                        <option value='other'>Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="textBody">Message</label>
                                    <textarea className="form-control" value={this.state.textBody} onChange={this.handleInputChange} name='textBody' id="textBody" rows="3" placeholder='Enter your message' required></textarea>
                                </div>
                                <div className='container'>
                                <Recaptcha
                                    sitekey='6LcLuz8UAAAAAKITAtJiFwzFxTpccDZ4nu6sbHqK'
                                    callback={this.recapCallback}
                                    expiredCallback={this.expiredCallback}
                                    locale='zh-TW'
                                    className='recap-class'
                                    data-theme='light'
                                    placeholder='recaptcha'
                                />
                                </div>
                                {this.state.verified ?  
                                <button type="submit" ref='subBtn' className="btn btn-primary contactBtn">Submit</button>
                                : 
                                <button type="submit" ref='subBtn' disabled onClick={this.handleFormSubmit} className="btn btn-default contactBtn">Submit</button>
                                }
                                    <Alert stack={{limit: 3}} onClose={this.closeAll}/>
                            </form>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact
