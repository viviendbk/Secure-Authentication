import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '/api'; // Assuming your backend serves this route

  constructor(private http: HttpClient) { }

  checkUser(email: string, password: string): Observable<string> {
    const requestBody = { email, password };
    console.log("email: " + email)
    console.log("password: " + password)
    console.log(requestBody);
    return this.http.post<string>(this.apiUrl + "/checkusers", requestBody);
  }

  createUser(email: string, password: string): Observable<string> {
    const requestBody = { email, password };
    return this.http.post<string>(this.apiUrl + "/users", requestBody);
  }
}
