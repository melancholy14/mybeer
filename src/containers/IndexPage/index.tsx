import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

function IndexPage() {
  const dispatch = useDispatch();

  const onSearch = () => {
    dispatch(push('/search'));
  };

  return (
    <div className="w-1/2 m-auto ptb-1/5">
      <div className="row flex-center">
        <h1>MyBeer</h1>
      </div>
      <div className="row flex-center">
        <div className="form-group row flex-edges w-full">
          <input
            type="text"
            className="col-9 col"
            placeholder="Your favourite beer?"
          />
          <button
            type="button"
            className="btn-primary col-2 col"
            onClick={onSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
