import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  fetchUsers(): Observable<User[]> {
    return this.http
      .get<{ user: User[] }>('/api/v1/users')
      .pipe(map((data) => data.user));
  }
  createUser(user) {
    return this.http.post<{ user }>('/api/v1/users', user);
  }
}
