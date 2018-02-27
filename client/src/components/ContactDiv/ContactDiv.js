import React from 'react'
import './ContactDiv.css'

const ContactDiv = (props) => {

    return (
        <div className='contactdiv-div'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='row  mx-auto' id='ContactDiv-first-row'>                           
                        <div className='col-md-4'>
                                <h4 className='ContactDiv-subtitle'>Contact Gordons BBQ</h4>
                                <div className='ContactDiv-text'>
                                    <div className='ContactDiv-h-container'>
                                        <div className='row'>
                                            <div className='col-12'>
                                            <ul className='contact-checklist'>
                                                <li>
                                                    <i className="fab fa-wpforms tag fa-lg"></i>
                                                    <p>Fill out the contact form on my site: <a href="#contactForm"  data-toggle="modal" data-target="#contactForm">  <br/><i class="fas fa-edit"></i>Contact Gordon's BBQ</a></p>
                                                </li>
                                                <li>
                                                    <i className="fas fa-comment tag fa-lg"></i><p> Direct message me on instagram: <a href='https://www.instagram.com/gordonsbbq/'target='_blank'rel='hashtags'> <br/><i class="fas fa-at"></i> gordonsbbq</a></p>
                                                </li>
                                                
                                                <li>
                                                    <i className="fab fa-facebook-square tag fa-lg"></i>
                                                    <p>
                                                        Follow my page on Facebook: <a href='https://www.facebook.com/gordonsbarbecue/' target='_blank' rel='hashtags'> <br/><i class="fab fa-facebook-f"></i> Gordon's BBQ</a>
                                                    </p>
                                                </li>
                                            </ul>                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <h4 className='ContactDiv-subtitle'>VA style in the CA</h4>
                                <div className='ContactDiv-text'>
                                    <div className='ContactDiv-h-container'>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <ul className='contact-checklist'>
                                                    <li>
                                                        <i className="fas fa-fire tag fa-lg"></i>
                                                        <p>100%<span id='charcoal'> Charcoal</span> Grilled</p>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-fire tag fa-lg"></i>
                                                        <p>Handcrafted Sauces</p>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-fire tag fa-lg"></i>
                                                        <p>Homemade Spice Blends</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='col-md-6'>
                                                <ul className='contact-checklist'>
                                                    <li>
                                                        <i className="fas fa-fire tag fa-lg"></i>
                                                        <p>We don't cut corners,</p>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-fire tag fa-lg"></i>
                                                        <p>we do it from scratch,</p>
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-fire tag fa-lg"></i>
                                                        <p>And it's done when it's done</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='col-md-4'>
                                <h4 className='ContactDiv-subtitle'>Join the hashtags</h4>
                                <div className='ContactDiv-text'>
                                    <div className='ContactDiv-h-container'>
                                        <div className='row'>
                                            <div className='col-12'>
                                            <ul className='contact-checklist'>
                                                <li>
                                                    <i className="fas fa-hashtag tag fa-lg"></i><p>Upload your BBQ on instagram with the hashtag: <a href='https://www.instagram.com/explore/tags/gordonsbbq/'target='_blank'rel='hashtags'>  <br/><i class="fas fa-hashtag"></i>gordonsbbq</a>
                                                    </p>
                                                </li>
                                                
                                                <li>
                                                    <i className="fas fa-hashtag tag fa-lg"></i>
                                                    <p>
                                                        Find real BBQ done right on:
                                                        <a href='https://www.instagram.com/explore/tags/getoffyourgas/' target='_blank' rel='hashtags'> <br/><i class="fas fa-hashtag"></i>getoffyourgas</a>
                                                    </p>
                                                </li>
                                                <li>
                                                    <i className="fas fa-hashtag tag fa-lg"></i>
                                                    <p>
                                                        Find other great pitmasters and grill-masters alike on:
                                                        <a href='https://www.instagram.com/explore/tags/bbqbrethren/' target='_blank' rel='hashtags'>  <br/><i class="fas fa-hashtag"></i>bbqbrethren</a>
                                                    </p>
                                                </li>
                                            </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDiv