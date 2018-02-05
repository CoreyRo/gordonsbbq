import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
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
				<div id='home'>	
					<Navbar />
					<Header /> 		
					<Route path='/' component={Home} />
					<div className='contactdiv-div'>
					<ContactDiv />
					</div>
					<Footer />
				</div>
			</Router>
		)
  	}
}

export default App
