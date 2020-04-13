import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import request from 'utils/request';

import { SearchState, Facets, Facet } from './types';
import {
  loadFacetsRequest,
  loadFacetsSuccess,
  loadFacetsFailure,
} from './actions';

type ThunkActionType = ThunkAction<void, SearchState, unknown, Action<string>>;

export const loadFacets = (): ThunkActionType => async (dispatch) => {
  dispatch(loadFacetsRequest());

  try {
    const { facets } = await request(
      'catalog/datasets/open-beer-database/facets'
    );

    const results = facets.reduce(
      (
        acc: Partial<Facets>,
        { name, facets: fts }: { name: string; facets: Facet[] }
      ) => {
        switch (name) {
          case 'name_breweries':
            acc.breweries = fts;
            break;
          case 'country':
            acc.countries = fts;
            break;
          case 'style_name':
            acc.styles = fts;
            break;
          case 'cat_name':
            acc.categories = fts;
            break;
          default:
        }

        return acc;
      },
      {}
    );

    dispatch(loadFacetsSuccess(results));
  } catch (error) {
    dispatch(loadFacetsFailure(error.message));
  }
};
