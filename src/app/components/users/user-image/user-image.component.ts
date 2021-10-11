import { Component, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.css']
})
export class UserImageComponent{

  @Input() user : User;

  @Output() childEvent = new EventEmitter<User>()

  onBtnClick(){
    // Trigger/Emit/Produce the event
    this.childEvent.emit(this.user);
  }

}
