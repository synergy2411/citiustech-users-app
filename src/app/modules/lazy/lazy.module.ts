import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAmLazyComponent } from './i-am-lazy/i-am-lazy.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LazyService } from './lazy.service';
import { SharedModule } from '../shared/shared.module';

const LAZY_ROUTES : Routes = [
  {
    path : '',            // http://localhost:4200/lazy
    component : IAmLazyComponent,
    children : [{
      path : 'home',       // http://localhost:4200/lazy/home - Eagerly loaded in Lazy module
      component : HomeComponent
    },{
      path : 'dashboard',   // http://localhost:4200/lazy/dashboard - Lazily loaded in Lazy module
      loadChildren : () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
    },{
      path : 'patient',     // http://localhost:4200/lazy/patient - Lazily loaded in Lazy module
      loadChildren : () => import('./modules/patient/patient.module').then(m => m.PatientModule)
    }]
  }
]

@NgModule({
  declarations: [
    IAmLazyComponent, HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(LAZY_ROUTES)
  ],
  providers :  [LazyService]
})
export class LazyModule { }
