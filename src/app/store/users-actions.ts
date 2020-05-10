import { User } from 'src/app/modules/user/models/user';
import { createAction, props } from '@ngrx/store';

export const USER_SELECTION = createAction(
  '[USER] - Grid Selection',
  props<{ payload: User[] }>()
);
