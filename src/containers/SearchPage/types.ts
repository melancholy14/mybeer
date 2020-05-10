export type Facet = {
  count: number;
  name: string;
  value: string;
};

export type Facets = {
  breweries?: Facet[];
  countries?: Facet[];
  styles?: Facet[];
  categories?: Facet[];
};

export interface Record {
  city: string;
  name: string;
  catName: string;
  country: string;
  catId: string;
  coordinates: number[];
  address1: string;
  breweryId: string;
  breweryName: string;
  styleName: string;
  styleId: string;
}

export interface SearchState {
  facets?: Facets;
  error?: string;
  records?: Record[];
}

export interface SearchActionTypes {
  type: string;
  payload?: Partial<SearchState>;
}
