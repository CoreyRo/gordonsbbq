import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import './Blog.css'


class Blog extends Component {
    
    state = { 
        posts: [],
        pageArr: [],
        page: 1,
        pageCount: 0,
        count: 0
    }

    componentWillMount() {
        this.getProjects()
        
        
    }

    getProjects = () => {
        
        let queryString = `/api/blog/read`
        console.log("query",queryString)
        axios.get(queryString)
            .then((res) => {
                console.log("blog result",res.data)
                this.setState({
                    posts: [...res.data],
                },function(){
                    console.log('state', this.state)
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

    render(){
        
        return(
            <div className='blog-container'>
            

                <div className='container top-container'>
                    <div className='blog-header'>
                        <h1 className='headerA'>BBQ Blog Spot</h1>
                        <h4 className='headerB'>Life, BBQ, and everything</h4>.
                    </div>
                </div>
                {this.state.posts.map(function(post,i){
                    return(
                    <div className='blog-box' rel={post._id} key={i+post._id} id={`blog-post-${post._id}`}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <div className='blog-img-div mx-auto text-center'>
                                        <img className='blog-img img-fluid' id={`blog-img-${post._id}`} src={`../public/imgs/${post.img}`} alt={`img-${post.img}`}/>
                                        <h5 className='blog-date' id={`blog-date-${post._id}`}>{moment(post.dateAdded).format(`dddd, MMMM Do YYYY h:mmA`)}</h5>
                                    </div>
                                </div>
                                <div className='col-md-8'>
                                    <div className='blog-body-div mx-auto '>
                                        <div className='blog-header-div'>
                                            
                                            <h3 className='blog-title' id={`blog-title-${post._id}`}>{post.title}</h3>
                                        </div>
                                        <div className='blog-text-div'>
                                            <p className='blog-text' id={`blog-text-${post._id}`}>{post.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
                <div className='blog-box'>
                    <div className='container'>
                        <div className='row btn-row'>
                            <div className='col-6 btn-left'>
                                <button className='btn page-btn' onClick={this.prevPage}>Prev</button>
                            </div>
                            <div className='col-6 btn-right'>
                                <button className='btn page-btn'onClick={this.nextPage}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Blog