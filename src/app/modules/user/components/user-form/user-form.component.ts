import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  constructor(private fb: FormBuilder, private userService: UserService) {}

  userForm: FormGroup;
  @Output() onUserCreate = new EventEmitter();

  ngOnInit() {
    this.userForm = this.fb.group({
      first_name: [null, [Validators.required]],
      last_name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      language: [null, [Validators.required]],
    });
  }

  createUser() {
    this.userService.createUser(this.userForm.value);
    this.onUserCreate.emit();
  }
}
