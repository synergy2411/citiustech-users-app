import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }
  onLogin(f : NgForm){
    console.log(f)
    const {username , password} = f.value;
    this.userService.onLogin(username, password);
  }
  onReset(f: NgForm){
    f.reset()
  }

}
