import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

function IndexPage() {
  const dispatch = useDispatch();

  const onSearch = () => {
    dispatch(push('/search'));
  };

  return (
    <header className="background">
      <h1 className="title">MyBeer</h1>
      <p className="p-4" />
      <div className="form-control w-1/2">
        <input type="text" placeholder="Your favourite beer?" />
      </div>
      <button
        type="button"
        className="button button-primary button-large"
        onClick={onSearch}
      >
        Search
      </button>
    </header>
  );
}

export default IndexPage;
