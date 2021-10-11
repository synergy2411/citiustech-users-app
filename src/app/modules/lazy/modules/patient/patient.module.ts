import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPatientComponent } from './components/new-patient/new-patient.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NewPatientComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild([{
      path : '',        //http://localhost:4200/lazy/patient
      component : NewPatientComponent
    }])
  ]
})
export class PatientModule { }
