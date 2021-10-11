import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:3000/users";
  private SECRET_KEY = "MY_SUPER_SECRET_KEY";
  private token : string = null;

  constructor(private http : HttpClient, private router: Router) { }

  onRegister(username : string, password : string){
    let hashedPassword;
    try{
    hashedPassword = bcrypt.hashSync(password, 12);
    }catch(err){
      console.log(err)
    }
    this.http.post(this.baseUrl,{username, password : hashedPassword})
      .subscribe({
        next : (response : {username : string; password : string; id : number}) => {
          alert("User registered successfully with ID - " + +response.id)
        },
        error : err => {console.log(err); throw err}
      })
  }

  onLogin(username : string, password : string){
    this.http.get(this.baseUrl)
    .subscribe((users: Array<{username : string, password : string, id? : number}>) => {
      for(let user of users){
        if(user.username === username){
          if(bcrypt.compareSync(password, user.password)){
            this.token = new Date().toISOString() + Math.random().toString() + username
            localStorage.setItem("token", this.token);
            this.router.navigate(['/notes'])
            // alert('AUTHENTICATED');
          }else{
            this.router.navigate(['/login'])
            // alert('NOT AUTHENTICATED')
          }
        }
      }
    },
    err => console.log(err))
  }

  isAuthenticated(){
    return localStorage.getItem('token') ? true : false;
    // return this.token != null;
  }

  onLogout(){
    localStorage.removeItem('token')
    this.token = null;
    this.router.navigate(['/login'])
  }


}
