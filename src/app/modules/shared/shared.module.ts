import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './services/shared.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  // providers : [SharedService]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule : SharedModule,
      providers : [SharedService]
    }
  }
}
