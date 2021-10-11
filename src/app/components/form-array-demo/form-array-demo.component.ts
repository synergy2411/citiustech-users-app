import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormArray, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-form-array-demo',
  templateUrl: './form-array-demo.component.html',
  styleUrls: ['./form-array-demo.component.css']
})
export class FormArrayDemoComponent implements OnInit {

  username = new FormControl('');
  courses = new FormArray([])
  hobbies = new FormArray([])

  myForm : FormGroup;

  constructor(private fb : FormBuilder) {
    this.myForm = this.fb.group({
      username : this.username,
      password : new FormControl(''),
      roles : new FormArray([])
    })
   }

   get roles(){
     return this.myForm.get('roles') as FormArray;
   }

   addRole(){
    this.roles.push(new FormControl(''))
   }

   addHobby(){
     let hobby = new FormGroup({
       hobbyName : new FormControl(''),
       hobbyLevel : new FormControl('')
     })
     this.hobbies.push(hobby)
   }

   onAddItem(){
     this.courses.push(new FormControl(''))
     console.log(this.courses);
   }

  ngOnInit(): void {
    // this.courses.valueChanges.subscribe(console.log)
    console.log(this.courses);
  }

}
