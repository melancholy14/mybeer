import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import { RootState } from './selectors';

export type ThunkActionType = ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
>;
