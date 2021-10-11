import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{

  @Input() title : string | undefined;
  @Input() user : any;

  value : string;
  @Output() childEvent = new EventEmitter<string>()

  onChangeValue(input: any){
    // this.childEvent.emit(this.value);
    console.log(input);
    this.childEvent.emit(input.value);
  }

}
