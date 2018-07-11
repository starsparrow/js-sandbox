import React from 'react';
import ReactDOM from 'react-dom';


function getUser() {
  return {
		  firstName: 'Nik',
		  lastName: 'Spurgetis'
		 };
}


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}


class Welcome extends React.Component {
  render() {
    return (
	  <div>
        <h1>Hello, {formatName(this.props.name)}</h1>
	    <h2>The time is now {new Date().toLocaleTimeString()}.</h2>
	  </div>
	)
  }
}


function tick() {
  ReactDOM.render(
	<Welcome name={getUser()} />,
	document.getElementById('root')
  );
}

setInterval(tick, 1000);
