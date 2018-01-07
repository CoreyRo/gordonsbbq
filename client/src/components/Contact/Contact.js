import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        confirmEmail: '',
        subject: '',
        textBody: ''
    }

    handleInputChange = (e) => {
        let value = e.target.value
        let name = e.target.value
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (e) => {

    }

    render(){
        return(
            <div className='scroll-adjust' id='contact'>
                <div className='contact-div'>
                    <h1 className='contact-title'>Contact Gordon's BBQ</h1>
                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Confirm Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">How did you hear about Gordon's BBQ</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>Instagram</option>
                                <option>Facebook</option>
                                <option>Word of Mouth</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Contact
