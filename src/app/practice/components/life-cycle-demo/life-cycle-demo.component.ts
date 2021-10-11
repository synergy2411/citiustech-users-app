import { AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild} from '@angular/core';

@Component({
  selector: 'app-life-cycle-demo',
  templateUrl: './life-cycle-demo.component.html',
  styleUrls: ['./life-cycle-demo.component.css']
})
export class LifeCycleDemoComponent
implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() title : string;
  @ViewChild('para') paragraph : ElementRef<HTMLParagraphElement>
  @ContentChild('heading') heading : ElementRef<HTMLHeadingElement>

  constructor() {
    console.log("constructor", this.paragraph, this.heading)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges", changes, this.paragraph, this.heading)
  }
  ngDoCheck(): void {
    console.log("ngDoCheck", this.paragraph, this.heading)
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit", this.paragraph, this.heading);
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked",this.heading)
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit", this.paragraph, this.heading)
    this.paragraph.nativeElement.innerHTML = "Changed text";
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked", this.heading)
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy", this.heading)
  }
  ngOnInit(): void {
    console.log("ngOnInit", this.paragraph, this.heading)
  }

}
