import request from 'utils/request';
import { ThunkActionType } from 'store/types';

import { Facets, Facet } from './types';
import {
  loadFacetsRequest,
  loadFacetsSuccess,
  loadFacetsFailure,
  loadSearchRequest,
  loadSearchFailure,
  loadSearchSuccess,
} from './actions';

export const loadFacets = (): ThunkActionType => async (dispatch) => {
  dispatch(loadFacetsRequest());

  try {
    const { facets } = await request({
      url: 'catalog/datasets/open-beer-database/facets',
    });

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

export const search = (keyword: string): ThunkActionType => async (
  dispatch
) => {
  dispatch(loadSearchRequest());

  try {
    const response = await request({
      requestType: 'search',
      params: { q: keyword },
    });

    const records = response.records.map(({ fields }: { fields: any }) => ({
      ...fields,
      breweryId: fields.brewery_id,
      breweryName: fields.name_breweries,
      catName: fields.cat_name,
      catId: fields.cat_id,
      styleName: fields.style_name,
      styleId: fields.style_id,
    }));

    dispatch(loadSearchSuccess(records));
  } catch (error) {
    dispatch(loadSearchFailure(error.message));
  }
};
