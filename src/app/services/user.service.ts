import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private apiUrl = "https://jsonplaceholder.typicode.com";

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get(this.apiUrl + '/users')
      .map(res => res.json());
  }

}
