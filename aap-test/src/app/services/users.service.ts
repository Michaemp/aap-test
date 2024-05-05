import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'https://my.api.mockaroo.com/users.json?key=7b1c50c0'

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
       return this.http.get<User[]>(this.apiUrl);
       
     }
}

