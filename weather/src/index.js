import React from 'react'
import ReactDOM from 'react-dom'
import './main.css';

function getFiveDayForecast() { 
  function getRandomTemp() {
    return Math.floor(Math.random() * 100) + 1;
  }
		
  return [
    {day: "Monday", temp: getRandomTemp()},
    {day: "Tuesday", temp: getRandomTemp()},
    {day: "Wednesday", temp: getRandomTemp()},
    {day: "Thursday", temp: getRandomTemp()},
    {day: "Friday", temp: getRandomTemp()}
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
