import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Store, select } from '@ngrx/store';
import { UserState } from 'src/app/store/users-state';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import * as UserActions from '../../../../store/users-actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.scss'],
})
export class UserGridComponent implements OnInit, OnDestroy {
  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private store: Store<{ userState: UserState }>
  ) {
    this.users$ = store.pipe(select('userState'));
  }

  users$: Observable<UserState>;
  initialSelection = [];
  userSubscription: Subscription;
  selection: SelectionModel<User> = new SelectionModel<User>(true, []);
  dataSource: MatTableDataSource<User> = new MatTableDataSource([]);
  displayedColumns: string[] = [
    'select',
    'first_name',
    'last_name',
    'email',
    'created_at',
  ];
  ngrxUsers: User[] = [];

  ngOnInit() {
    this.fetchUsers();
    this.getState();
  }

  fetchUsers() {
    // SHOW LOADER
    this.userService.fetchUsers().subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource(res);
        //HIDE LOADER
      },
      (err) => {
        //HIDE LOADER
        console.log(err);
        this.snackBar.open(err.Message, '', { duration: 3500 });
      }
    );
  }

  getState() {
    this.userSubscription = this.users$
      .pipe(
        map((state) => {
          this.ngrxUsers = state.selectedUsers;
          this.setSelection(state.selectedUsers);
        })
      )
      .subscribe();
  }

  //GRID LOGIC
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  isSelected(id) {
    return this.selection.selected.find((_) => _.id === id);
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  rowSelection() {
    this.store.dispatch(
      UserActions.USER_SELECTION({ payload: this.selection.selected })
    );
  }

  toggleSelection(user: User) {
    if (this.isSelected(user.id)) {
      let filterdSelection = this.selection.selected.filter(
        (_) => _.id !== user.id
      );
      this.setSelection(filterdSelection);
    } else this.setSelection([...this.selection.selected, user]);
  }

  setSelection(users: User[], multiple = true) {
    this.selection = new SelectionModel<User>(multiple, users);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe;
  }
}
