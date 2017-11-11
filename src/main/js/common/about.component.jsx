import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class About extends Component {
	
	constructor(props) {
		
		super(props);
		
		this.author = "PoorPolonius";
		this.repo = "https://github.com/PoorPolonius/simple-web-app.git";
	}
	
	render() {
		
		return (
			<div>
				<div>Author: { this.author }</div>
				<div>Repository: <Link to={ this.repo }>{this.repo}</Link></div>
			</div>
		);
	}
}