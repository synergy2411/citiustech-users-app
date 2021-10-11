import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/modules/employee/services/employee.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  constructor(private empService : EmployeeService) { }

  ngOnInit(): void {

  }

  getCounter(){
    return this.empService.counter;
  }
  increase(){
    this.empService.counter++;
  }

}
