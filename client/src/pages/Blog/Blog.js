import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import Swiper from '../../components/Swiper'
import './Blog.css'


class Blog extends Component {
    
    state = { 
        docs: [],
        limit: 10,
        page: 1,
        pages: 0,
        total: 0
    }

    componentWillMount() {
        this.getProjects()
    }

    getProjects = () => {
        let queryString = `/api/blog/get/${this.state.page}/${this.state.limit}`
        axios.get(queryString)
            .then((res) => {
                this.setState({
                    docs: [...res.data.docs],
                    limit: res.data.limit,
                    page: res.data.page,
                    pages: res.data.pages,
                    total: res.data.total
                },function(){
                    document.location.href = '#BBQ-Blog';
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    nextPage = (e) =>{
        e.preventDefault()
        this.setState({ page: this.state.page + 1 }, () => this.getProjects())
    }

    prevPage = (e) => {
        e.preventDefault()
        this.setState({ page: this.state.page - 1 }, () => this.getProjects())
    }

    jumpPage = (e) => {
        e.preventDefault()
        this.setState({ page: e.target.id.split('-')[1] }, () => this.getProjects())
    }

    showPrev = () => {
        if (this.state.page <= this.state.pages && this.state.page > 1){
            return (
                <button className='btn page-btn' onClick={this.prevPage}>Prev</button>
            )
        }
    }

    showNext = () => {
        if (this.state.page < this.state.pages){
            return (
                <button className='btn page-btn' onClick={this.nextPage}>Next</button>
            )
        }
    }
    

    render(){
        return(
            <div id='BBQ-Blog' className='blog-container'>
                <div className='container-fluid top-container'>
                    <div id='blogheader' className='blog-header'>
                        <h1 className='headerA'>BBQ Blog Spot</h1>
                        <h4 className='headerB'>Life, BBQ, and everything</h4>.
                    </div>
                </div>
                <div className='mid-blog' style={{backgroundImage: 'url("../public/imgs/coalsbq2.jpg")'}}>
                    <div className='blog-holder'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-md-8'>
                                    {this.state.docs.map(function(post,i){
                                        return(
                                        <div className='row' key={i+post._id}>
                                            <div className='blog-box' rel={post._id} id={`blog-post-${post._id}`}>
                                                <div className='container-fluid'>
                                                    <div className='row blog-body-div'>
                                                        <div className='col-8'>
                                                            <div className='blog-header-div'>
                                                                <h3 className='blog-title' id={`blog-title-${post._id}`}>{post.title}</h3>
                                                                <h5 className='blog-date' id={`blog-date-${post._id}`}>{moment(post.updatedAt).format(`dddd, MMMM Do YYYY h:mmA`)}</h5>
                                                            </div>
                                                        </div>
                                                        <div className='col-4'>
                                                            <div className='open-link'>
                                                                <Link to={`/post/${post._id}`}><p><i className="fas fa-external-link-alt"></i> view</p></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    })}
                                </div>
                                <div className='col-md-4 slicker'>
                                    <Swiper
                                        items={[
                                            {
                                                img: 'life2.jpg',
                                                txt: 'Life,'
                                            },
                                            {
                                                img: 'life.jpg',
                                                txt: 'Life,'
                                            },
                                            {
                                                img: 'bbq2.jpg',
                                                txt: 'BBQ,'
                                            },
                                            {
                                                img: 'bbq.jpg',
                                                txt: 'BBQ,'
                                            },
                                            {
                                                img: 'everything2.jpg',
                                                txt: 'Everything...'
                                            },
                                            {
                                                img: 'everything.jpg',
                                                txt: 'Everything...'
                                            },
                                        ]}
                                        settings={{
                                            autoplay: true,
                                            autoplaySpeed: 4000,
                                            fade: true,
                                            dots: false,
                                            arrows: false,
                                            infinite: true,
                                            initialSlide: 0,
                                            slidesToScroll: 1,
                                            slidesToShow: 1,
                                            speed: 800,
                                            responsive: [ 
                                                { 
                                                    breakpoint: 1024, 
                                                    settings: { 
                                                        slidesToShow: 3,
                                                        slidesToScroll: 1, 
                                                        arrows: false
                                                    } 
                                                }, 
                                                { 
                                                    breakpoint: 767, 
                                                    settings: { 
                                                        initailSlide: 2,
                                                        slidesToShow: 2,
                                                        slidesToScroll: 1,
                                                        arrows: false
                                                    } 
                                                },
                                                { 
                                                    breakpoint: 480, 
                                                    settings: { 
                                                        slidesToShow: 1,
                                                        slidesToScroll: 1,
                                                        arrows: false
                                                    } 
                                                },
                                        
                                            ],
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {this.state.pages > 1 ? 
                <div className='blog-btn-box'>
                    <div className='container'>
                        <div className='row btn-row'>
                            <div className='col-6 btn-left'>
                                {this.showPrev()}                                
                            </div>
                            <div className='col-6 btn-right'>
                                {this.showNext()}
                            </div>
                        </div>
                        <p>Page {this.state.page} of {this.state.pages}</p>
                    </div>
                </div>
                    : 
                ''}


                <link href="https://fonts.googleapis.com/css?family=Rock+Salt" rel="stylesheet"/>
            </div>
        )
    }
}

export default Blog