import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Header from './components/Header'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './App.css'
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

				<Route exact path='/home' component={Home} />
				</div>
			</Router>
		)
  	}
}

export default App
