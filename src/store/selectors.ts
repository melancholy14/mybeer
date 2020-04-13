import { RouterState } from 'connected-react-router';
import { SearchState } from 'containers/SearchPage/types';

export interface RootState {
  router: RouterState;
  search: SearchState;
}

export function selectRouter(state: RootState) {
  return state.router;
}

export function selectSearch(state: RootState) {
  return state.search;
}
