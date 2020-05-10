/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UserService } from './user.service';
import { User } from '../models/user';

describe('User service', () => {
  let userService: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });

    userService = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Should get all users from API', () => {
    const testUsers: User[] = [
      {
        id: 147370,
        first_name: 'Lili',
        last_name: 'Marlen',
        email: 'angular1@luptest.com',
        sign_in_count: 0,
        number_of_enrollments: 0,
        number_of_enrollments_accessed: 0,
        created_at: new Date('2019-04-01T10:44:51Z'),
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
        created_at: new Date('2019-04-01T10:44:51Z'),
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
    ];

    userService.fetchUsers().subscribe((users) => {
      expect(users.length).toBe(2);
      expect(users).toEqual(testUsers);
    });

    const request = httpMock.expectOne('/api/v1/users');

    expect(request.request.method).toBe('GET');

    request.flush(testUsers);
  });
});
