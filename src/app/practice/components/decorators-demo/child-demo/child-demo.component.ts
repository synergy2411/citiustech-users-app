import { Component, ContentChild, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child-demo',
  templateUrl: './child-demo.component.html',
  styleUrls: ['./child-demo.component.css']
})
export class ChildDemoComponent {

  @ViewChild('heading') heading : ElementRef<HTMLHeadingElement>

  @ContentChild('heading') contentHeading : ElementRef<HTMLHeadingElement>

  @ContentChild('para') paragraph : ElementRef<HTMLParagraphElement>

  @Input() title : string;
  static counter : number = 0;


  showAlert(msg : string){
    alert("Title : " + this.title)
    // ChildDemoComponent.counter++;
    // alert("Counter : " + ChildDemoComponent.counter)
    // alert("Message : " + msg)
  }

  display(){
    console.log("HEADING : View Child" , this.heading);
    console.log("Content Heading : Content Child ", this.contentHeading);
    console.log("Paragraph : Content Child", this.paragraph);
  }


}
