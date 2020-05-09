import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearch } from 'store/selectors';
import { loadFacets } from './thunks';
import SelectFacet from './SelectFacet';

function SearchPage() {
  const [style, setStyle] = useState<string>('');
  const [brewery, setBrewery] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const { facets } = useSelector(selectSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFacets());
  }, [dispatch]);

  const { breweries = [], countries = [], styles = [], categories = [] } =
    facets || {};

  return (
    <form className="">
      <div className="row">
        <SelectFacet
          label="Style"
          value={style}
          data={styles}
          onUpdate={setStyle}
        />
        <SelectFacet
          label="Brewery"
          value={brewery}
          data={breweries}
          onUpdate={setBrewery}
        />
        <SelectFacet
          label="Country"
          value={country}
          data={countries}
          onUpdate={setCountry}
        />
        <SelectFacet
          label="Category"
          value={category}
          data={categories}
          onUpdate={setCategory}
        />
      </div>
    </form>
  );
}

export default SearchPage;
