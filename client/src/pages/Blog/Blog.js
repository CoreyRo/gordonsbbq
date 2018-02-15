import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import './Blog.css'


class Blog extends Component {
    
    state = { 
        docs: [],
        limit: 3,
        page: 1,
        pages: 0,
        total: 0
    }

    componentWillMount() {
        this.getProjects()
    }

    getProjects = () => {
        let queryString = `/api/blog/get/${this.state.page}/${this.state.limit}`
        console.log("query",queryString)
        axios.get(queryString)
            .then((res) => {
                console.log("blog result",res.data)
                
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
                <div className='container top-container'>
                    <div id='blogheader' className='blog-header'>
                        <h1 className='headerA'>BBQ Blog Spot</h1>
                        <h4 className='headerB'>Life, BBQ, and everything</h4>.
                    </div>
                </div>
                <div className='mid-blog' style={{backgroundImage: 'url("../public/imgs/coalsbq2.jpg")'}}>
                {this.state.docs.map(function(post,i){
                    return(
                    <div className='container'>
                    <div className='blog-box' rel={post._id} key={i+post._id} id={`blog-post-${post._id}`}>
                        <div className='container'>
                            <div className='row'>
                            <div className='blog-header-div mobile-img'>
                                <h3 className='blog-title' id={`blog-title-${post._id}`}>{post.title}</h3>
                                <h5 className='blog-date' id={`blog-date-${post._id}`}>{moment(post.updatedAt).format(`dddd, MMMM Do YYYY h:mmA`)}</h5>
                            </div>
                            <div className='col-md-4 mobile-img'>
                                    <div className='blog-img-div mx-auto text-center'>
                                        <img className='blog-img img-fluid' id={`blog-img-${post._id}`} src={`https://gordonsbbq-backend.herokuapp.com/imgs/${post.img}`} alt={`img-${post.img}`}/>
                                    </div>
                                </div>
                                <div className='col-md-8'>
                                    <div className='blog-body-div mx-auto '>
                                        <div className='blog-header-div desktop-img'>
                                            <h3 className='blog-title' id={`blog-title-${post._id}`}>{post.title}</h3>
                                            <h5 className='blog-date' id={`blog-date-${post._id}`}>{moment(post.updatedAt).format(`dddd, MMMM Do YYYY h:mmA`)}</h5>
                                        </div>
                                        <div className='blog-text-div'>
                                            <p className='blog-text' id={`blog-text-p-${i}`}>{post.text}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 desktop-img'>
                                    <div className='blog-img-div mx-auto text-center'>
                                        <img className='blog-img img-fluid' id={`blog-img-${post._id}`} src={`https://gordonsbbq-backend.herokuapp.com/imgs/${post.img}`} alt={`img-${post.img}`}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    )
                })}
                </div>
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
            </div>
        )
    }
}

export default Blog