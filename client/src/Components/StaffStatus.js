import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Welcome from "./Welcome";
import Update from "./Update";
import './StaffStatus.css';

export default class StaffStatus extends React.Component {
	render() {
		return (
			<div className="staff-status">
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={Welcome}/>
						<Route path='/update' component={Update}/>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}