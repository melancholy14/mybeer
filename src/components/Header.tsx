import React from 'react';

function Header() {
  return (
    <nav>
      <div className="nav-container">
        <h3>MyBeer</h3>
        <form className="header-search">
          <input type="text" placeholder="Your favourite beer?" />
          <button type="submit" className="button button-primary button-round">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
