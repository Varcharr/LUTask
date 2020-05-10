// import { createSelector, MemoizedSelector, State } from '@ngrx/store';
import { State } from './root-state';

import { UserStoreSelectors } from './user-store';
import { IUser } from '../modules/user/models/user';

// export const selectGridUsers: MemoizedSelector<object, string> = createSelector(
//          UserStoreSelectors.selectUsers('selectedUsers': string) => {
//            return myFeature ;
//          }
//        );
// export const selectUsers = (state: State): IUser[] => state.users;
export const selectUsers = (state: State) => state.users;
