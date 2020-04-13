import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import searchReducer from 'containers/SearchPage/reducer';

export const history = createBrowserHistory();

export function configureStore() {
  const middleware = [routerMiddleware(history), thunk];

  const store = createStore(
    combineReducers({
      router: connectRouter(history),
      search: searchReducer,
    }),
    composeWithDevTools(applyMiddleware(...middleware))
  );

  return store;
}
