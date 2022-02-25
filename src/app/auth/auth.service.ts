import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient) { }
  setToken(token:string):void{
    localStorage.setItem('token', token);
  }
  getToken():string |null{
    return localStorage.getItem('token');
  }
  isLoggedIn(){
    return this.getToken() !== null;
  }
  logout(){
    localStorage.removeItem('token');
  }
  loginUser(user:object){
    return axios.post(`${environment.baseUrl}/auth/login`,user)
  }

  forgotPassword(user:object){
    return axios.post(`${environment.baseUrl}/auth/validation`, user)
  }
}
