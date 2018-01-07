import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import Header from './components/Header'
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
				<div id='home'>
					<Navbar />
					<Header />
					<Route path='/' component={Home} />
					<Footer />
				</div>
			</Router>
		)
  	}
}

export default App
