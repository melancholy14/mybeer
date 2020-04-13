import { SearchState, SearchActionTypes } from './types';
import { LOAD_FACETS_SUCCESS, LOAD_FACETS_FAILURE } from './actions';

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
    case LOAD_FACETS_SUCCESS:
      return {
        ...state,
        facets: payload?.facets,
      };
    case LOAD_FACETS_FAILURE:
      return {
        ...state,
        error: payload?.error,
      };
    default:
      return state;
  }
}
