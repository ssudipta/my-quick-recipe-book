import '../styles/App.css';
import React, { useEffect, useState} from 'react';
import Recipe from '../component/Recipe';


const App = ()=> {

  const APP_ID ="9aeeea9b";
  const APP_KEY = "6004eb32549d76cc639fa924b2260aed";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes= async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
    console.log(recipes);
  };

  const handleSearch = (e) => {
    const value= e.target.value;
    setSearch(value);
  }; 

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" onChange={handleSearch} value={search}/>
        <button type="submit" className="search-button"> Search </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={Math.round(recipe.recipe.calories)}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
