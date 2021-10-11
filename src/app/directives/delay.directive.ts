import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector : '[delayBy]'
})
export class DelayDirective{

  @Input()
  set delayBy(ms : number){
    setTimeout(() => {
      this.vcRef.createEmbeddedView(this.templateRef);
    }, ms)
  }

  constructor(
    private templateRef : TemplateRef<any>,
    private vcRef : ViewContainerRef){
    }

  }



// <div *ngIf="condition" *delayBy="3000"></div>

// <ng-template [delayBy]="3000">
  // <div></div>
// </ng-template>
