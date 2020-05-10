import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearch } from 'store/selectors';
import { Tabs } from 'components';
import { search, loadFacets } from './thunks';
import { Facet } from './types';

const tabs = [
  {
    id: 'top',
    text: 'Top Results',
  },
  {
    id: 'styles',
    text: 'Style',
  },
  {
    id: 'breweries',
    text: 'Brewery',
  },
  {
    id: 'countries',
    text: 'Country',
  },
  {
    id: 'categories',
    text: 'Category',
  },
];

function SearchPage() {
  const [query, setQuery] = useState<string>('');
  const [active, setActive] = useState<string>(tabs[0].id);
  const [facetList, setFacetList] = useState<Facet[]>();

  const dispatch = useDispatch();

  const { records, facets } = useSelector(selectSearch);

  useEffect(() => {
    dispatch(loadFacets());
  }, [dispatch]);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(search(query));

    setActive('top');
  };

  const onSelect = (id: string) => {
    setActive(id);

    if (query && facets) {
      const arr = (facets as any)[id];

      if (arr) {
        setFacetList(
          arr.filter(({ name }: Facet) =>
            name.toLowerCase().includes(query.toLowerCase())
          )
        );
      }
    }
  };

  return (
    <>
      <form className="row" onSubmit={onSubmit}>
        <div className="col-lg-10 form-control">
          <input
            type="text"
            placeholder="Your favourite beer?"
            value={query}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setQuery(event.target.value)
            }
          />
        </div>
        <div className="col-lg-2 align-center">
          <button type="submit" className="button button-primary button-round">
            Search
          </button>
        </div>
      </form>
      <div>
        <Tabs data={tabs} active={active} onSelect={onSelect} />
        {active === 'top' ? (
          <div>
            {records?.map(({ name, country, catName, breweryName }) => (
              <div className="card" key={name}>
                <h3 className="card-title">{name}</h3>
                <ul>
                  <li>Country: {country}</li>
                  <li>Category: {catName}</li>
                  <li>Brewery: {breweryName}</li>
                </ul>
                <div className="card-actions">
                  <button className="button-primary">Detail</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <ul>
              {facetList &&
                facetList.map(({ name, value }) => <li key={value}>{name}</li>)}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default SearchPage;
