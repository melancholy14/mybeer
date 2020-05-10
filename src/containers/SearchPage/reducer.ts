import update from 'immutability-helper';

import { SearchState, SearchActionTypes } from './types';
import {
  LOAD_FACETS_SUCCESS,
  LOAD_FACETS_FAILURE,
  LOAD_SEARCH_FAILURE,
  LOAD_SEARCH_SUCCESS,
  LOAD_FACETS_REQUEST,
  LOAD_SEARCH_REQUEST,
} from './actions';

const initialState: SearchState = {
  facets: undefined,
  error: undefined,
};

export default function searchReducer(
  state = initialState,
  action: SearchActionTypes
): SearchState {
  const { type, payload } = action;

  switch (type) {
    case LOAD_FACETS_REQUEST:
    case LOAD_SEARCH_REQUEST:
      return update(state, {
        error: { $set: undefined },
      });
    case LOAD_FACETS_SUCCESS:
      return update(state, {
        facets: { $set: payload?.facets },
      });
    case LOAD_SEARCH_SUCCESS:
      return update(state, {
        records: { $set: payload?.records },
      });
    case LOAD_FACETS_FAILURE:
    case LOAD_SEARCH_FAILURE:
      return update(state, {
        error: { $set: payload?.error },
      });
    default:
      return state;
  }
}
