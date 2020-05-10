import { Action } from '@ngrx/store';
import { IUser } from 'src/app/modules/user/models/user';

export enum ActionTypes {
  USERS_GRID_SELECTION = '[USER] USERS_GRID_SELECTION',
}

export class GridSelectUsers implements Action {
  readonly type = ActionTypes.USERS_GRID_SELECTION;
  constructor(public payload: IUser[]) {}
}

export type UserActions = GridSelectUsers;
