import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-page',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPageComponent implements OnInit {
  constructor() {}

  addNewUser: boolean = false;

  ngOnInit() {}
}
