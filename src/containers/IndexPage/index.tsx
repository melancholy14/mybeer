import React from 'react';

function IndexPage() {
  return (
    <div className="bg-whitesmoke">
      <div className="row flex-center flex-column w-1/2 h-85vh">
        <h1>MyBeer</h1>
        <form className="row flex-edges w-full">
          <input type="text" className="col-9 col" />
          <button type="submit" className="btn-primary col-2 col">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default IndexPage;
