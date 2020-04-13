import React from 'react';

function IndexPage() {
  return (
    <div className="bg-whitesmoke">
      <div className="w-1/2 h-95vh m-auto ptb-1/5">
        <div className="row flex-center">
          <h1>MyBeer</h1>
        </div>
        <div className="row flex-center">
          <form className="row flex-edges w-full">
            <input type="text" className="col-9 col" />
            <button type="submit" className="btn-primary col-2 col">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
