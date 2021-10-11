import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { DataService } from 'src/app/services/data.service';
import { GlobalErrorHandlerService } from 'src/app/services/global-error-handler.service';
// import { USER_DATA } from '../../model/mocks';

@Component({
  selector : 'app-users',
  templateUrl : './users.component.html',
  styleUrls : ['./users.component.css']
})
export class UsersComponent implements OnInit{

  users : User[];
  tab : number = 1;
  globalErrorHandler = new GlobalErrorHandlerService();

  constructor(private dataService : DataService,
    // private globalError : GlobalErrorHandlerService
    ){
    // this.user = USER_DATA;
  }

  errorMessage : string = '';
  showAlert : boolean = false;

  ngOnInit(){
    // this.users = USER_DATA;
    // this.users = this.dataService.getUserdata();
    this.dataService.getUserdata()
      .subscribe({
        next : (response : Array<User>) => this.users = response,
        error : (err : HttpErrorResponse) => {
          this.globalErrorHandler.subject.subscribe((response : string) => {
            console.log("RESPONSE : ", response);
          })
          this.errorMessage = err.statusText;
          this.showAlert = true;
          throw err;
          // console.error('Error caught in component : ', err);
          // err.subscribe(data => {
          //   this.showAlert = true;
          //   this.errorMessage += String(data)
          // })
        },
        complete : () => console.log("COMPLETED")
      })
  }

  onCloseAlert(flag : boolean){
    if(flag){
      this.showAlert = false;
    }
  }

  onMoreInfo(evt : User){
    alert(`Mr. ${evt.lastName} is working with ${evt.company}!`)
    console.log(evt);
  }

  onChange(event : any){
    console.log(event)
  }

}
