import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { State } from './user-state';

// import { State } from './user-state';
import { IUser } from 'src/app/modules/user/models/user';

// export const selectUsers = (state: State): IUser[] => state.selectedUsers;

export const selectUsers = (state: State) => state.selectedUsers;

export const selectUsersCount = createSelector(
  selectUsers,
  (state: IUser[]) => state
);

// export const selectUsers: (
//          state: object
//        ) => IUser[] = featureAdapter.getSelectors(selectMyFeatureState)
//          .selectAll;
