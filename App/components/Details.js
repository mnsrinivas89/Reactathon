import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DefaultImage from './../images/DefaultImage.svg';

class Details extends Component {
  
 componentWillMount() {
   this.props.actions.setLandingPageJSON();
 }

 render() {      
   return (
   	<div className="detailsContainer row">
   		<h1 className="fontSize_8 title">Hackathon title</h1>	
	     <div className="container padd detailsItem card col-xs-8 padd"> 	       
	       <div className="teamDetailsContainer row noMargin">
	       	<img src={DefaultImage} width="200px" alt="Team Image" className="col-xs-2" />
	       	<h2 className="fontSize_7">Team Name</h2>
	       	<div className="margin10 noSideMargin">Team Description</div>	
	       	<div className="row col-xs-10">	
	       		<div className="col-xs-6">Team 1</div>
	       		<div className="col-xs-6">Team 2</div>
	       		<div className="col-xs-6">Team 3</div>
	       	</div>	 
	       </div>       
	   		<div className="row noMargin">
	   			<a href className="col-xs-4 btn ">Give Score</a>
	       		<a href className="col-xs-4 btn ">Source Code</a>
	       		<a href className="col-xs-4 btn ">Solution</a>
	   		</div> 
	     </div>
	     <div className="row col-xs-4">
	     	<div className="col-xs-12">Total teams participated</div>
       		<div className="col-xs-12">Demo URL: sdfsdf</div>
       		<div className="col-xs-12">View Solution</div>
	     </div>
     </div>
   );
 }
}
export default Details;