import React from 'react'
import ReactDOM from 'react-dom'
import './main.css';

function getFiveDayForecast() { 
  function getRandomTemp() {
    return Math.floor(Math.random() * 100) + 1;
  }
		
  return [
    {day: "Monday", temp: getRandomTemp(), description: "Rainy"},
    {day: "Tuesday", temp: getRandomTemp(), description: "Sunny"},
    {day: "Wednesday", temp: getRandomTemp(), description: "Snow"},
    {day: "Thursday", temp: getRandomTemp(), description: "Thunderstorm"},
    {day: "Friday", temp: getRandomTemp(), description: "Windy"}
  ];
}

function Forecast() {
  return (
    <div className="forecast">
      <Header />
      <Content forecast={getFiveDayForecast()} />
      <Footer />
    </div> 
  );
}

function Header() {
  return (
    <div className="wrapper">
      <div className="header">
        Forecast for 47408
      </div>
    </div>
  );
}

function Content(props) {
  return (
    <div className="wrapper">
      <div className="content">
	  {
	    props.forecast.map(function(day, index) {
	      return (<Day
		       dayName={day.day}
		       temp={day.temp}
			   description={day.description}
		     />)
	    }) 
	  }
      </div>
    </div>
  );
}

function Day(props) {
  return (
    <div className="wrapper">
      <div className="day">
	<div className="dayName">{props.dayName}</div>
        <div className="temp">{props.temp}&deg;</div>        
		<div className="description">{props.description}</div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="wrapper">
      <div className="footer">
        Powered by React
      </div>
    </div>
  );
}

ReactDOM.render(
  <Forecast />,
  document.getElementById('root')
);
