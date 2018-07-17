import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';


const data = [
  {
    title: "Spicy Pork"
  },
  {
    title: "Baked Potatoes"
  },
  {
    title: "Breakfast in the Night"
  },
  {
    title: "Taco Goop"
  },
  { title: "Omurice" },
  { title: "Carne Asada Tacos" },
  { title: "Tuna Casserole" },
  { title: "Beef Stroganoff" },
  { title: "Parsi Chicken" },
]


function getRandomMeals(n) {
  let meals = [];
  while ( meals.length < n ) {
    let meal = data[Math.floor(Math.random()*data.length)]; 
    if ( !meals.includes(meal) ) {
      meals.push(meal);  
    }
  }
  return meals;
}


function Card(props) {
  return (
    <div className="wrapper">
      <div className="card">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}


function Content(props) {

    return(
	    <div className="content">
	      {
	        props.recipes.map(
		  function(recipe, index) {
                    return <Card key={index} title={recipe.title} />
                  }
		)
	      }
	    </div>
    );
}

ReactDOM.render(
  <Content recipes={getRandomMeals(5)} />, document.getElementById('root')
);
