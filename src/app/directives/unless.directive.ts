import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition : string){
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef)
    }else{
      this.vcRef.clear();
    }
  }


  constructor(private templateRef : TemplateRef<any>, private vcRef : ViewContainerRef) { }

}


// <div *appUnless="condition"></div>
