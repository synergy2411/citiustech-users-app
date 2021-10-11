import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminComponent } from './components/admin/admin.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { PersonalComponent } from './modules/personal/components/personal/personal.component';
import { PersonalModule } from './modules/personal/personal.module';
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations :    [
    AdminComponent, NewEmployeeComponent
  ],
  providers :       [ EmployeeService],
  imports :         [ CommonModule, PersonalModule ],
  exports :         [ NewEmployeeComponent, AdminComponent, PersonalComponent ]
})
export class EmployeeModule{}
