import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    RedditShareButton,
    EmailShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    MailruShareButton,

    FacebookIcon,
    TwitterIcon,
    GooglePlusIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    OKIcon,
    TelegramIcon,
    WhatsappIcon,
    RedditIcon,
    TumblrIcon,
    MailruIcon,
    EmailIcon,
    LivejournalIcon
} from 'react-share';

import './Post.css'

class Post extends Component {
    state = {
        title: '',
        date: '',
        body: ''
    }

    componentWillMount() {}

    componentDidMount() {
        let id = window
            .location
            .href
            .split('/post/')[1]
        let queryString = `/api/blog/getone/${id}`
        axios
            .get(queryString)
            .then((res) => {
                this
                    .setState({
                        title: res.data.title,
                        date: res.data.createdAt,
                        body: res
                            .data
                            .richText
                            .replace(/...imgs/g, 'http://gordonsbbq-backend.herokuapp.com/imgs')
                    }, function () {
                        document.location.href = '#blog-post';
                    });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    componentWillUnmount() {}

    render() {
        const shareUrl = 'www.gordonsbbq.net'
        const title = this.state.title
        let desc = `Check out Gordon's blog post: ${this.state.title} on Gordonsbqq.net`
        let exampleImage = 'http://www.gordonsbbq.net/public/imgs/gbbq1.png'
        return (
            <div id='blog-post' className='blog-container'>
                <div className='container-fluid top-container'>
                    <div id='blogheader' className='blog-header'>
                        <h1 className='headerA'>{this.state.title}</h1>
                        <h4 className='headerB'>{moment(this.state.data).format(`dddd, MMMM Do YYYY h:mmA`)}</h4>
                    </div>
                </div>
                <div
                    className='post-div'
                    style={{
                    backImage: 'url("../public/imgs/coalsbq2.jpg")'
                }}>
                    <div className='post-holder'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='rich-text-holder'>
                                    <div
                                        className='rich-text-div'
                                        dangerouslySetInnerHTML={{
                                        __html: this.state.body
                                    }}></div>
                                </div>
                            </div>
                            <div className='row bot-row'>
                                <div className='col-12 share'>
                                    <h6>Share this blog post on social media</h6>
                                    <div className="share-cont">
                                        <div className="share-network">
                                            <FacebookShareButton
                                                url={shareUrl}
                                                className="share-network__share-button"
                                                hashtag={'#Gordonsbbq'}
                                                quote={desc}
                                            >
                                                <FacebookIcon size={32}/>
                                            </FacebookShareButton>
                                        </div>
                    
                                        <div className="share-network">
                                            <TwitterShareButton
                                                url={shareUrl}
                                                title={title}
                                                className="share-network__share-button">
                                                <TwitterIcon size={32}/>
                                            </TwitterShareButton>
                                        </div>

                                        <div className="share-network">
                                            <TelegramShareButton
                                                url={shareUrl}
                                                title={title}
                                                className="share-network__share-button">
                                                <TelegramIcon size={32}/>
                                            </TelegramShareButton>
                                        </div>

                                        <div className="share-network">
                                            <WhatsappShareButton
                                                url={shareUrl}
                                                title={title}
                                                separator=":: "
                                                className="share-network__share-button">
                                                <WhatsappIcon size={32}/>
                                            </WhatsappShareButton>
                                        </div>

                                        <div className="share-network">
                                            <GooglePlusShareButton
                                                url={shareUrl}
                                                className="share-network__share-button">
                                                <GooglePlusIcon size={32}/>
                                            </GooglePlusShareButton>
                                        </div>

                                        <div className="share-network">
                                            <LinkedinShareButton
                                                url={shareUrl}
                                                title={title}
                                                windowWidth={750}
                                                windowHeight={600}
                                                className="share-network__share-button">
                                                <LinkedinIcon size={32}/>
                                            </LinkedinShareButton>
                                        </div>

                                        <div className="share-network">
                                            <PinterestShareButton
                                                url={String(window.location)}
                                                media={`${exampleImage}`}
                                                windowWidth={1000}
                                                windowHeight={730}
                                                className="share-network__share-button">
                                                <PinterestIcon size={32}/>
                                            </PinterestShareButton>
                                        </div>

                                        <div className="share-network">
                                            <VKShareButton
                                                url={shareUrl}
                                                image={`${exampleImage}`}
                                                windowWidth={660}
                                                windowHeight={460}
                                                className="share-network__share-button">
                                                <VKIcon size={32}/>
                                            </VKShareButton>
                                        </div>

                                        <div className="share-network">
                                            <OKShareButton
                                                url={shareUrl}
                                                image={`${exampleImage}`}
                                                windowWidth={660}
                                                windowHeight={460}
                                                className="share-network__share-button">
                                                <OKIcon size={32}/>
                                            </OKShareButton>
                                        </div>

                                        <div className="share-network">
                                            <RedditShareButton
                                                url={shareUrl}
                                                title={title}
                                                windowWidth={660}
                                                windowHeight={460}
                                                className="share-network__share-button">
                                                <RedditIcon size={32}/>
                                            </RedditShareButton>
                                        </div>

                                        <div className="share-network">
                                            <TumblrShareButton
                                                url={shareUrl}
                                                title={title}
                                                windowWidth={660}
                                                windowHeight={460}
                                                className="share-network__share-button">
                                                <TumblrIcon size={32}/>
                                            </TumblrShareButton>
                                        </div>

                                        <div className="share-network">
                                            <LivejournalShareButton
                                                url={shareUrl}
                                                title={title}
                                                description={desc}
                                                className="share-network__share-button">
                                                <LivejournalIcon size={32}/>
                                            </LivejournalShareButton>
                                        </div>

                                        <div className="share-network">
                                            <MailruShareButton
                                                url={shareUrl}
                                                title={title}
                                                className="share-network__share-button">
                                                <MailruIcon size={32}/>
                                            </MailruShareButton>
                                        </div>

                                        <div className="share-network">
                                            <EmailShareButton
                                                url={shareUrl}
                                                subject={title}
                                                body={desc}
                                                className="share-network__share-button">
                                                <EmailIcon size={32}/>
                                            </EmailShareButton>
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
}

export default Post