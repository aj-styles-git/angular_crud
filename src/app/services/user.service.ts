import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) { }

  listUsers(){
    return this.http.get(this.baseUrl + 'users');
  }
}
