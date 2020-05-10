import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  @Output() onUserCreate = new EventEmitter();
  userForm: FormGroup;

  ngOnInit() {
    this.userForm = this.fb.group({
      first_name: [null, [Validators.required]],
      last_name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      language: [null, [Validators.required]],
    });
  }

  createUser() {
    this.userService.createUser(this.userForm.value).subscribe(
      (res) => {
        //SnackBar should be moved to separated service
        //For cleaner implementation
        this.snackBar.open('User Created', '', { duration: 3500 });
        this.onUserCreate.emit();
      },
      (err) => {
        this.snackBar.open(err.message, '', { duration: 3500 });
      }
    );
  }
}
