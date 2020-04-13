export interface Facet {
  count: number;
  name: string;
  value: string;
}

export interface Facets {
  breweries?: Facet[];
  countries?: Facet[];
  styles?: Facet[];
  categories?: Facet[];
}

export interface SearchState {
  facets?: Facets;
  error?: string;
}

export interface SearchActionTypes {
  type: string;
  payload?: Partial<SearchState>;
}
