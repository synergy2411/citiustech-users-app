import { Component } from '@angular/core';
import { EmployeeService } from './modules/employee/services/employee.service';
import { SharedService } from './modules/shared/services/shared.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  // template : `
  // <h4>Component Loaded Successfully...</h4>
  // `,
  // styles : [`
  //   h4{
  //     color : tomato;
  //   }
  // `]
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "The Awesome App";
  showComp = true;

  constructor(
    private userService : UserService,
    private empService : EmployeeService,
    public sharedService : SharedService
    ){}

  isAuthenticated(){
    return this.userService.isAuthenticated();
  }
  onLogout(){
    this.userService.onLogout();
  }

  getCounter(){
    return this.empService.counter;
  }
  increase(){
    this.empService.counter++;
  }
}
