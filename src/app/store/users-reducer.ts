import { createReducer, on, Action } from '@ngrx/store';
import { initialState, UserState } from './users-state';
import * as UserActions from './users-actions';

// export const initialState = initialState;

const reducer = createReducer(
  initialState,
  on(UserActions.USER_SELECTION, (state, { payload }) => ({
    ...state,
    selectedUsers: payload,
  }))
);

export function UserReducer(state: UserState | undefined, action: Action) {
  return reducer(state, action);
}
