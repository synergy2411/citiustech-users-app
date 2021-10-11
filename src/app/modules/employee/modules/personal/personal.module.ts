import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './components/personal/personal.component';



@NgModule({
  declarations: [PersonalComponent],
  imports: [
    CommonModule
  ],
  exports :     [PersonalComponent]
})
export class PersonalModule { }
