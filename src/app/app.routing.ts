import { Routes } from "@angular/router";
import { LoginComponent } from "./components/auth/login/login.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { NotesComponent } from "./components/notes/notes.component";
import { OverviewComponent } from "./components/products/overview/overview.component";
import { ProductsComponent } from "./components/products/products.component";
import { SpecificationComponent } from "./components/products/specification/specification.component";
import { UsersComponent } from "./components/users/users.component";
import { DeactivateGaurdService } from "./services/deactivate-gaurd.service";
import { LoginGaurdService } from "./services/login.gaurd.service";
import { OverviewResolverService } from "./services/overview-resolver.service";
import { ProductResolverService } from "./services/product.resolver.service";

export const APP_ROUTES : Routes =[
  {path : '', redirectTo : 'register', pathMatch : 'full'},     // http://localhost:4200
  {path : 'login', component : LoginComponent},                 // http://localhost:4200/login
  {path : 'register', component : RegisterComponent, canDeactivate : [DeactivateGaurdService]},           // http://localhost:4200/register
  {path : 'users', component : UsersComponent},                 // http://localhost:4200/users
  {path : 'notes', component : NotesComponent, canActivate : [LoginGaurdService]},
  {
    path : 'products',              // http://lcoalhost:4200/products
    component : ProductsComponent,
    children: [{
      path : 'overview/:prodId',              // http://lcoalhost:4200/products/overview/8
      component : OverviewComponent,
      resolve : { product : OverviewResolverService}
    },{
      path : 'specification',         // http://lcoalhost:4200/products/specification
      component : SpecificationComponent
    }],
    resolve : { value : ProductResolverService }
  },{
    path : 'lazy',                    // http://localhost:4200/lazy
    loadChildren : () => import('./modules/lazy/lazy.module').then(m => m.LazyModule).catch(err=>console.log(err))
  },
  {path : '**', redirectTo : 'login', pathMatch : 'full'}       // http://localhost:4200/anyOtherPath
]
