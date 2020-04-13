import { RouterState } from 'connected-react-router';

export interface RootState {
  router: RouterState;
}

export function selectRouter(state: RootState) {
  return state.router;
}
