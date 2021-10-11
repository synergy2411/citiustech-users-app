import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildDemoComponent } from './child-demo/child-demo.component';

@Component({
  selector: 'app-decorators-demo',
  templateUrl: './decorators-demo.component.html',
  styleUrls: ['./decorators-demo.component.css']
})
export class DecoratorsDemoComponent{

  @ViewChild('heading') heading : ElementRef<HTMLHeadingElement>
  @ViewChild("input") input : ElementRef<HTMLInputElement>

  @ViewChild(ChildDemoComponent) theChild : ChildDemoComponent

  @ViewChildren(ChildDemoComponent) children : QueryList<ChildDemoComponent>

  show(){
    console.log(this.heading, this.input);
    this.heading.nativeElement.innerHTML = `This is changed heading!`
    console.log(this.children);
    // this.children.forEach(child => child.showAlert("ViewChildren"));

    this.theChild.showAlert("ViewChild");
    // this.theChild.display();
  }
}
