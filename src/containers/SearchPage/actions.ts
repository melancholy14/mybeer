import { SearchActionTypes, Facets, Record } from './types';

export const LOAD_FACETS_REQUEST = 'SearchPage/LOAD_FACETS_REQUEST';
export const LOAD_FACETS_SUCCESS = 'SearchPage/LOAD_FACETS_SUCCESS';
export const LOAD_FACETS_FAILURE = 'SearchPage/LOAD_FACETS_FAILURE';

export const LOAD_SEARCH_REQUEST = 'SearchPage/LOAD_SEARCH_REQUEST';
export const LOAD_SEARCH_SUCCESS = 'SearchPage/LOAD_SEARCH_SUCCESS';
export const LOAD_SEARCH_FAILURE = 'SearchPage/LOAD_SEARCH_FAILURE';

export function loadFacetsRequest(): SearchActionTypes {
  return {
    type: LOAD_FACETS_REQUEST,
  };
}

export function loadFacetsSuccess(facets: Facets): SearchActionTypes {
  return {
    type: LOAD_FACETS_SUCCESS,
    payload: {
      facets,
    },
  };
}

export function loadFacetsFailure(error: string): SearchActionTypes {
  return {
    type: LOAD_FACETS_FAILURE,
    payload: {
      error,
    },
  };
}

export function loadSearchRequest(): SearchActionTypes {
  return {
    type: LOAD_SEARCH_REQUEST,
  };
}

export function loadSearchSuccess(records: Record[]): SearchActionTypes {
  return {
    type: LOAD_SEARCH_SUCCESS,
    payload: {
      records,
    },
  };
}

export function loadSearchFailure(error: string): SearchActionTypes {
  return {
    type: LOAD_SEARCH_FAILURE,
    payload: {
      error,
    },
  };
}
