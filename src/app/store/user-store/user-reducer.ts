import { ActionTypes, UserActions } from './user-actions';
import { initialState } from './user-state';
import { State } from './user-state';

export function usersReducer(state = initialState, action: UserActions): State {
  switch (action.type) {
    case ActionTypes.USERS_GRID_SELECTION:
      return {
        ...state,
        selectedUsers: action.payload,
      };
    default: {
      return state;
    }
  }
}
