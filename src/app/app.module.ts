import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { EmployeeModule } from './modules/employee/employee.module';


import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { ParentComponent } from './practice/components/parent/parent.component';
import { ChildComponent } from './practice/components/parent/child/child.component';
import { DecoratorsDemoComponent } from './practice/components/decorators-demo/decorators-demo.component';
import { ChildDemoComponent } from './practice/components/decorators-demo/child-demo/child-demo.component';
import { LifeCycleDemoComponent } from './practice/components/life-cycle-demo/life-cycle-demo.component';
import { UserCommentComponent } from './components/users/user-comment/user-comment.component';
import { AttributeDemoComponent } from './practice/components/attribute-demo/attribute-demo.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DelayDirective } from './directives/delay.directive';
import { StructuralDemoComponent } from './practice/components/structural-demo/structural-demo.component';
import { UnlessDirective } from './directives/unless.directive';
import { PipeDemoComponent } from './practice/components/pipe-demo/pipe-demo.component';
import { NationalCodePipe } from './pipes/national-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { LoginComponent } from './components/auth/login/login.component';
import { CommentFormComponent } from './components/user/user-comment/comment-form/comment-form.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DataService } from './services/data.service';
import { CtrOneComponent } from './practice/components/ctr-one/ctr-one.component';
import { CtrTwoComponent } from './practice/components/ctr-two/ctr-two.component';
import { AsyncDemoComponent } from './practice/components/async-demo/async-demo.component';
import { ObservableDemoComponent } from './practice/components/observable-demo/observable-demo.component';
import { ObsOperatorsDemoComponent } from './practice/components/obs-operators-demo/obs-operators-demo.component';
import { ObsSubjectsDemoComponent } from './practice/components/obs-subjects-demo/obs-subjects-demo.component';
import { AlertComponent } from './components/alert/alert.component';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { NotesComponent } from './components/notes/notes.component';
import { AddNewNoteComponent } from './components/notes/add-new-note/add-new-note.component';
import { EditNoteComponent } from './components/notes/edit-note/edit-note.component';
import { RequestInterceptorService } from './services/request.interceptor';
import { ResponseInterceptorService } from './services/response-interceptor.service';
import { APP_ROUTES } from './app.routing';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { OverviewComponent } from './components/products/overview/overview.component';
import { SpecificationComponent } from './components/products/specification/specification.component';
import { ProductService } from './services/product.service';
import { SearchPipe } from './pipes/search.pipe';
import { SharedModule } from './modules/shared/shared.module';
import { ReviseObsComponent } from './components/revise-obs/revise-obs.component';
import { FormArrayDemoComponent } from './components/form-array-demo/form-array-demo.component';

@NgModule({
  declarations: [           // Custom component, directives, pipes
    AppComponent,
    UsersComponent,
    UserInfoComponent,
    UserImageComponent,
    ParentComponent,
    ChildComponent,
    DecoratorsDemoComponent,
    ChildDemoComponent,
    LifeCycleDemoComponent,
    UserCommentComponent,
    AttributeDemoComponent,
    HighlightDirective,
    DelayDirective,
    StructuralDemoComponent,
    UnlessDirective,
    PipeDemoComponent,
    NationalCodePipe,
    FilterPipe,
    SortPipe,
    LoginComponent,
    CommentFormComponent,
    RegisterComponent,
    CtrOneComponent,
    CtrTwoComponent,
    AsyncDemoComponent,
    ObservableDemoComponent,
    ObsOperatorsDemoComponent,
    ObsSubjectsDemoComponent,
    AlertComponent,
    NotesComponent,
    AddNewNoteComponent,
    EditNoteComponent,
    HeaderComponent,
    ProductsComponent,
    OverviewComponent,
    SpecificationComponent,
    SearchPipe,
    ReviseObsComponent,
    FormArrayDemoComponent
  ],
  imports: [                // Built-in & Custom Module
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EmployeeModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES, { preloadingStrategy : PreloadAllModules})
  ],
  // providers: [DataService],            // services
  providers : [
    ProductService,
    {provide : ErrorHandler, useClass : GlobalErrorHandlerService},
    { provide : HTTP_INTERCEPTORS, useClass : RequestInterceptorService, multi : true},
    {provide : HTTP_INTERCEPTORS, useClass : ResponseInterceptorService, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
