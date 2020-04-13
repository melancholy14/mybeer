import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearch } from 'store/selectors';
import { loadFacets } from './thunks';

function SearchPage() {
  const { facets } = useSelector(selectSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFacets());
  }, [dispatch]);

  const { breweries, countries, styles, categories } = facets || {};

  return (
    <>
      <form className="row padding-large flex-egdes">
        <h2 className="col-2 m-auto">MyBeer</h2>
        <div className="row flex-edges flex-items-center col-9">
          <input type="text" className="h-fit col-9" />
          <button type="submit" className="btn-primary col-2">
            Search
          </button>
        </div>
        <div className="col-3 padding-small">
          <label htmlFor="style">Style</label>
          <select id="style" className="w-4/5">
            {styles &&
              styles.map(({ value, name, count }) => (
                <option key={value} value={value}>
                  {name}({count})
                </option>
              ))}
          </select>
        </div>
        <div className="col-3 padding-small">
          <label htmlFor="category">Category</label>
          <select id="category" className="w-4/5">
            {categories &&
              categories.map(({ value, name, count }) => (
                <option key={value} value={value}>
                  {name}({count})
                </option>
              ))}
          </select>
        </div>
        <div className="col-3 padding-small">
          <label htmlFor="brewery">Brewery</label>
          <select id="brewery" className="w-4/5">
            {breweries &&
              breweries.map(({ value, name, count }) => (
                <option key={value} value={value}>
                  {name}({count})
                </option>
              ))}
          </select>
        </div>
        <div className="col-3 padding-small">
          <label htmlFor="country">Country</label>
          <select id="country" className="w-4/5">
            {countries &&
              countries.map(({ value, name, count }) => (
                <option key={value} value={value}>
                  {name}({count})
                </option>
              ))}
          </select>
        </div>
      </form>
    </>
  );
}

export default SearchPage;
