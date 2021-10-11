import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  username = new FormControl('',[
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    this.hasExclamation('@')
  ]);

  registerForm : FormGroup;
  countries = ["india", "australia","france", "USA"]

  constructor(
    private fb : FormBuilder,
    private userService : UserService
    ) {
    this.registerForm = this.fb.group({
      username : this.username,
      password : this.password,
      role : new FormControl('', Validators.required),
      country : new FormControl('', Validators.required),
      tnc : new FormControl('')
    })
  }

  hasExclamation(symbol: string) : ValidatorFn {
    return function(control : AbstractControl) : ValidationErrors | null{
      const exclamation = control.value.indexOf(symbol) >= 0
      return exclamation ? null : {"exclamationError": true};
    }
  }

  onRegister(){
    console.log(this.registerForm);
    const {username, password} = this.registerForm.value;
    this.userService.onRegister(username, password);
  }
  ngOnInit(): void {
  }

  shouldLeave(){
    return confirm('Do you want to leave this page?') ? true : false
  }

}
