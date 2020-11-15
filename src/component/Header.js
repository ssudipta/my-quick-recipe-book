import React from 'react';
import '../styles/App.css';

const Header = (props) => {
    return (
      <div>
          <form onSubmit={props.getSearch} className="search-form">
              <input type="text" className="search-bar" onChange={props.handleSearch} value={props.search}/>
              <button type="submit" className="search-button"> Search </button>
          </form>
      </div>
    );
};

export default Header;