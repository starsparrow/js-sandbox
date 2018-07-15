import React from 'react'
import ReactDOM from 'react-dom'
import './main.css';

function getFiveDayForecast() { 
  function getRandomTemp() {
    return Math.floor(Math.random() * 100) + 1;
  }
		
  return [
    {day: "Monday", temp: getRandomTemp(), description: "Rain"},
    {day: "Tuesday", temp: getRandomTemp(), description: "Sunny"},
    {day: "Wednesday", temp: getRandomTemp(), description: "Snow"},
    {day: "Thursday", temp: getRandomTemp(), description: "Thunderstorm"},
    {day: "Friday", temp: getRandomTemp(), description: "Windy"}
  ];
}

function Forecast(props) {
  return (
    <div className="forecast">
      <Header />
      <Content forecast={props.forecast} />
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
		       key={index}
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

  function getTempClass(temp) {
    if (temp < 32) {return "tempFreezing";}
     else if (temp < 45) {return "tempCold";}
      else if (temp < 65) {return "tempChilly";}
      else if (temp < 80) {return "tempNice";}
      else if (temp < 95) {return "tempHot";}
      else {return "tempBurning";}
  }

  return (
    <div className="wrapper">
      <div className="day">
	<div className="dayName">{props.dayName}</div>
        <div className={getTempClass(props.temp)}>{props.temp}</div>        
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

function tick() {
  ReactDOM.render(
    <Forecast forecast={getFiveDayForecast()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1500);
