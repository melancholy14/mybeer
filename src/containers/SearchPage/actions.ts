import { SearchActionTypes, Facets } from './types';

export const LOAD_FACETS_REQUEST = 'SearchPage/LOAD_FACETS_REQUEST';
export const LOAD_FACETS_SUCCESS = 'SearchPage/LOAD_FACETS_SUCCESS';
export const LOAD_FACETS_FAILURE = 'SearchPage/LOAD_FACETS_FAILURE';

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
