import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from '../components/auth/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGaurdService implements CanDeactivate<RegisterComponent> {

  constructor() { }
  canDeactivate(component: RegisterComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log(currentRoute)
    return component.shouldLeave()
  }
}
