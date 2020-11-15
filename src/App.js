import './App.css';
import React, { useEffect, useState} from 'react';
import Recipe from './Recipe';


const App = ()=> {

  const APP_ID ="9aeeea9b";
  const APP_KEY = "6004eb32549d76cc639fa924b2260aed";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes= async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
    console.log(recipes);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-input" />
        <button type="submit" className="search-buttom"> Search </button>
      </form>
      {recipes.map( recipe => (
        <Recipe title={recipe.recipe.label}/>
      ))}
    </div>
  );
}

export default App;
