import { IUser } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  fetchUsers(): Observable<IUser[]> {
    return this.http
      .get<{ user: IUser[] }>('/api/v1/users')
      .pipe(map((data) => data.user));
  }
  createUser(user) {
    console.log(user);

    // return this.http.post<{ user: IUser }>('/api/v1/users', user);
  }
}
