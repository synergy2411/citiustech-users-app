import { Component, OnInit } from '@angular/core';
import { LazyService } from 'src/app/modules/lazy/lazy.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  // constructor(public lazyService : LazyService) { }

  ngOnInit(): void {
  }

}
