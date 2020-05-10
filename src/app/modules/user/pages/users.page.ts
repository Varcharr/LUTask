import { Component } from '@angular/core';

@Component({
  selector: 'user-page',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPageComponent {
  addNewUser: boolean = false;
}
