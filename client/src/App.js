import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Post from './pages/Post'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Header from './components/Header'
import ContactDiv from './components/ContactDiv'
import Footer from './components/Footer'
import './App.css'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

class App extends Component {
	constructor(props){
		super(props)
		this.state={
			open: false
		}
	}
	
  	render() {
		return (
	  		<Router>
				<div>	
					<Navbar />
					<Header /> 		
					<Route exact path='/' component={Home} />
					<Route path='/post' component={Post} />
					<Route exact path='/blog' component={Blog} />
					<Contact />
					<ContactDiv />
					<Footer />
				</div>
			</Router>
		)
  	}
}

export default App
