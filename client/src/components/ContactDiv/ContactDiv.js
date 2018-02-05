import React from 'react'
import './ContactDiv.css'
import { Link } from 'react-router-dom'

const ContactDiv = (props) => {

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row' id='ContactDiv-first-row'>
                        <div className='col-md-6'>
                        <h4 className='ContactDiv-subtitle'>#GetOffYourGas</h4>
                            <div className='ContactDiv-text'>
                                <div className='ContactDiv-h-container'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <ul className='contact-checklist'>
                                        <li>
                                        <i class="fas fa-fire"></i>
                                        <p>100% <span id='charcoal'>Charcoal </span>Grilled</p>
                                        </li>
                                        <li>
                                        <i class="fas fa-fire"></i>
                                        <p>Handcrafted Sauces</p>
                                        </li>
                                        <li>
                                        <i class="fas fa-fire"></i>
                                        <p>Homemade Spice Blends</p>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className='col-6'>
                                    <ul className='contact-checklist'>
                                    <li>
                                    <i class="fas fa-fire"></i>
                                    <p>Smoked to perfection</p>
                                    </li>
                                    <li>
                                    <i class="fas fa-fire"></i>
                                    <p>No Shortcuts</p>
                                    </li>
                                    <li>
                                    <i class="fas fa-fire"></i>
                                    <p>Low 'n Slow</p>
                                    </li>
                                    </ul>
                                    </div>
                                </div>
                                   
                                </div>

                                <p></p>
                            </div>
                        </div>
                        
                        <div className='col-md-6'>
                        <div className='ContactDiv-h-container'>
                                    <h3 className=''>For all your BBQ needs</h3>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <ul className='checklist'>
                                            <li>
                                                <i class="fas fa-check"/>
                                                <p>Catering</p>
                                            </li>
                                            <li>
                                                <i class="fas fa-check"/>
                                                <p>Private Cookouts</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col-6'>
                                        <ul className='checklist'>
                                            <li>
                                                <i class="fas fa-check"/>
                                                <p>Parties</p>
                                            </li>
                                            <li>
                                                <i class="fas fa-check"/>
                                                <p>Events</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            <a className="btn know-btn" href="#contactForm"  data-toggle="modal" data-target="#contactForm">Contact Gordon's BBQ <span className="sr-only">(current)</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDiv