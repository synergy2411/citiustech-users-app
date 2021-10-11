import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDashboardComponent } from './components/my-dashboard/my-dashboard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MyDashboardComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild([{
      path : '',      //http://localhost:4200/lazy/dashboard
      component : MyDashboardComponent
    }])
  ]
})
export class DashboardModule { }
