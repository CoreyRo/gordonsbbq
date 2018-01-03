import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import CarouselComp from './components/Carousel'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;

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
					<AppBar 
						title="My AppBar"						
						onLeftIconButtonClick={() => this.setState({open: !this.state.open})}
					/>
					<Drawer 
						open={this.state.open}
						docked={false}
						onRequestChange={(open) => this.setState({open})}
					>
						<MenuItem>Menu Item</MenuItem>
						<MenuItem>Menu Item2</MenuItem>
					</Drawer>
					<CarouselComp/>
					
						<BottomNavigation selectedIndex={this.state.selectedIndex}>
							<BottomNavigationItem
								label="Recents"
								icon={recentsIcon}
								onClick={() => this.select(0)}
							/>
							<BottomNavigationItem
								label="Favorites"
								icon={favoritesIcon}
								onClick={() => this.select(1)}
							/>
							</BottomNavigation>
					

					
					
				</div>
			</Router>
		);
  	}
}

export default App;
