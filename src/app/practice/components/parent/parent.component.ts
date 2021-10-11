import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  title : string = "This is title";

  user = { name : "Foo"}

  valueFromChild : string;
  onValueReceive(childValue : string){
    this.valueFromChild = childValue;
  }
}
