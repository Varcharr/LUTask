import { IUser } from 'src/app/modules/user/models/user';

export interface State {
  selectedUsers: IUser[] | null;
}

export const initialState: State = {
  selectedUsers: null,
};
