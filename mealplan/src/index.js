import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import data from './data.json';

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
      <div onClick={props.onClick} className="card">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}


function ShoppingList(props) {
  let ingredients = props.recipes.map(
    function(recipe) {return recipe.ingredients} 
  );
  ingredients = [].concat(...ingredients); 


  return (
    <div className="wrapper">
      <div className="shoppinglist">
        <p>Ingredients for current meal plan:</p>
	<ul>
	  {
	    ingredients.map(
	      function(ingredient, index) {return <li key={index}>{ingredient}</li>  }
	    ) 
	  }
	</ul>
      </div>
    </div>
  );
}


class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	    numberOfMeals: 5,
	    recipes: [],
	    shoppingList: []
    };
  }

  updateRecipes() {
    this.setState((prevState) => {
      return {
	       recipes: getRandomMeals(this.state.numberOfMeals),
	     }

    });
  }



  render() {
    if ( this.state.recipes.length === 0 ) {	  
      this.updateRecipes();
    }

    return(
      <div className="content">
        {
          this.state.recipes.map(
	    function(recipe, index) {
	      return <Card key={index} title={recipe.title} />
	    }
	  )
        }
	    <div className="wrapper">
        <div className="refresh" onClick={() => this.updateRecipes(this.state.numberOfMeals)}><h1>⟳</h1></div></div>
	<ShoppingList recipes={this.state.recipes} />
      </div>
    );
  }
}


ReactDOM.render(
  <Content />, document.getElementById('root')
);
