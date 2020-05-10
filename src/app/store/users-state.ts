import { User } from 'src/app/modules/user/models/user';

export interface UserState {
  selectedUsers: User[];
}

const user = {
  id: 147372,
  first_name: 'John3',
  last_name: 'Doe3',
  email: 'angular3@luptest.com',
  sign_in_count: 1,
  number_of_enrollments: 0,
  number_of_enrollments_accessed: 0,
  created_at: new Date('2019-04-01T10:44:51Z'),
  last_sign_in_at: new Date('2019-04-05T14:20:04Z'),
  account_expires: null,
  sf_user_id: null,
  sf_contact_id: null,
  is_salesforce_contact: 0,
  CustomData: null,
  customDataFieldValues: [],
  locale: 'en',
  enabled: true,
  user_type: 'admin',
  can_enroll: true,
  can_delete_users: false,
  can_unenroll_users: false,
  can_move_groups: false,
  can_mark_complete: false,
  tutor_can_edit_their_courses: true,
  tutor_can_create_courses: false,
};

export const initialState: UserState = {
  selectedUsers: [user],
};
