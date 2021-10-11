import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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
