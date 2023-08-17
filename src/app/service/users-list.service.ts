import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  url = 'https://jsonplaceholder.typicode.com/users';
  
  constructor(public http: HttpClient) { }
  
  getUsers() {
     return this.http.get(this.url);
  }

}
