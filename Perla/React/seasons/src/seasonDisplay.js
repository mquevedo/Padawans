import './seasonDisplay.css';
import React from 'react';
//import ReactDOM from 'react-dom';

const seasonConf={
	Summer:{
		text:'uff... esta caluroso',
		iconName:'sun'
	},
	Winter:{
		text:'pff... hace frio',
		iconName:'snowflake'
	}
};

const getSeason=(lat, month)=>{
	if(month>2 && month <9){
		return lat > 0 ? 'Summer':'Winter';
	}else{
		return lat > 0 ? 'Winter':'Summer';
	}
};

const SeasonDisplay=(props)=>{
	const season=getSeason(props.lat, new Date().getMonth());
	const { text, iconName}= seasonConf[season];

	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${iconName} icon`}/>
			<h1>{text}</h1>
			<i className={`icon-rigth massive ${iconName} icon`}/>
		</div>
	);
};


export default SeasonDisplay;