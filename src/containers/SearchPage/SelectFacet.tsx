import React, { useState, useEffect } from 'react';

import { Facet } from './types';

type Props = {
  label: string;
  value: string;
  data: Facet[];
  onUpdate: (val: string) => void;
};

function SelectFacet({ label, value, data, onUpdate }: Props) {
  const [searchResult, setSearchResult] = useState<Facet[]>([]);

  useEffect(() => {
    if (data) {
      setSearchResult(data);
    }
  }, []);

  const filter = (items: Facet[], value: string) =>
    items.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value.length > 2) {
      setSearchResult(filter(data, value));
    } else {
      setSearchResult(data);
    }

    onUpdate(value);
  };

  const onSelect = (selected: string) => () => {
    onUpdate(selected);

    setSearchResult([]);
  };

  return (
    <div className="col-lg-3 form-control px-2">
      <label htmlFor="style">{label}</label>
      <input type="text" value={value} className="w-full" onChange={onChange} />
      {searchResult.length > 0 && (
        <ul className="menu">
          {searchResult.map(({ value: searchValue, name }) => (
            <li key={searchValue} onClick={onSelect(searchValue)}>
              <a>{name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SelectFacet;
