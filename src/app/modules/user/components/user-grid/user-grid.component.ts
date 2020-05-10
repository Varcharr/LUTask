import { IUser } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import {
  RootStoreState,
  UserStoreActions,
  UserStoreSelectors,
} from '../../../../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.scss'],
})
export class UserGridComponent implements OnInit {
  constructor(
    private userService: UserService,
    private store$: Store<RootStoreState.State>
  ) {}

  users: any;
  selectedColumns;
  initialSelection = [];
  allowMultiSelect = true;
  selection: SelectionModel<IUser>;
  error$;
  dataSource: MatTableDataSource<IUser>;
  displayedColumns: string[] = ['select', 'first_name', 'last_name', 'email'];

  ngOnInit() {
    this.fetchUsers();
    this.dataSource = new MatTableDataSource(this.users);

    this.selection = new SelectionModel<IUser>(
      this.allowMultiSelect,
      this.initialSelection
    );
    this.error$ = this.store$.select(UserStoreSelectors.selectUsers);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  // Selects all rows if they are not all selected; otherwise clear selection
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }
  rowSelection() {
    this.store$.dispatch(
      new UserStoreActions.GridSelectUsers(this.selection.selected)
    );
    console.log('Selection', this.selection);
  }
  fetchUsers() {
    // this.userService.fetchUsers().subscribe(
    //   (res) => {
    //     console.log(res);
    //     this.users = res;
    //   },
    //   (err) => {}
    // );

    this.users = [
      {
        id: 147370,
        first_name: 'Lili',
        last_name: 'Marlen',
        email: 'angular1@luptest.com',
        sign_in_count: 0,
        number_of_enrollments: 0,
        number_of_enrollments_accessed: 0,
        created_at: '2019-04-01T10:44:51Z',
        last_sign_in_at: null,
        account_expires: null,
        sf_user_id: null,
        sf_contact_id: null,
        is_salesforce_contact: 0,
        CustomData: null,
        customDataFieldValues: [],
        locale: 'en',
        enabled: true,
        user_type: 'manager',
        can_enroll: true,
        can_delete_users: true,
        can_unenroll_users: true,
        can_move_groups: true,
        can_mark_complete: true,
        tutor_can_edit_their_courses: false,
        tutor_can_create_courses: false,
      },
      {
        id: 147371,
        first_name: 'John2',
        last_name: 'Doe2',
        email: 'angular2@luptest.com',
        sign_in_count: 0,
        number_of_enrollments: 0,
        number_of_enrollments_accessed: 0,
        created_at: '2019-04-01T10:44:51Z',
        last_sign_in_at: null,
        account_expires: null,
        sf_user_id: null,
        sf_contact_id: null,
        is_salesforce_contact: 0,
        CustomData: null,
        customDataFieldValues: [],
        locale: 'en',
        enabled: true,
        user_type: 'instructor',
        can_enroll: true,
        can_delete_users: false,
        can_unenroll_users: false,
        can_move_groups: false,
        can_mark_complete: false,
        tutor_can_edit_their_courses: true,
        tutor_can_create_courses: true,
      },
      {
        id: 147372,
        first_name: 'John3',
        last_name: 'Doe3',
        email: 'angular3@luptest.com',
        sign_in_count: 1,
        number_of_enrollments: 0,
        number_of_enrollments_accessed: 0,
        created_at: '2019-04-01T10:44:51Z',
        last_sign_in_at: '2019-04-05T14:20:04Z',
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
      },
      {
        id: 147373,
        first_name: 'John4',
        last_name: 'Doe4',
        email: 'angular4@luptest.com',
        sign_in_count: 0,
        number_of_enrollments: 0,
        number_of_enrollments_accessed: 0,
        created_at: '2019-04-01T10:44:51Z',
        last_sign_in_at: null,
        account_expires: null,
        sf_user_id: null,
        sf_contact_id: null,
        is_salesforce_contact: 0,
        CustomData: null,
        customDataFieldValues: [],
        locale: 'en',
        enabled: true,
        user_type: 'learner',
        can_enroll: true,
        can_delete_users: false,
        can_unenroll_users: false,
        can_move_groups: false,
        can_mark_complete: false,
        tutor_can_edit_their_courses: true,
        tutor_can_create_courses: false,
      },
      {
        id: 147374,
        first_name: 'John5',
        last_name: 'Doe5',
        email: 'angular5@luptest.com',
        sign_in_count: 0,
        number_of_enrollments: 0,
        number_of_enrollments_accessed: 0,
        created_at: '2019-04-01T10:44:51Z',
        last_sign_in_at: null,
        account_expires: null,
        sf_user_id: null,
        sf_contact_id: null,
        is_salesforce_contact: 0,
        CustomData: null,
        customDataFieldValues: [],
        locale: 'en',
        enabled: true,
        user_type: 'learner',
        can_enroll: true,
        can_delete_users: false,
        can_unenroll_users: false,
        can_move_groups: false,
        can_mark_complete: false,
        tutor_can_edit_their_courses: true,
        tutor_can_create_courses: false,
      },
    ];
  }
}
