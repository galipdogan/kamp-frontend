import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://localhost:44362/api/auth/';
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel){//burada email ve password alıcaz
    return this.httpClient.post<SingleResponseModel<TokenModel>> //burada single oluşturmamız nedeni tek item gelince 
    (this.apiUrl+"login",loginModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else {
      return false;
    }
  }
}
