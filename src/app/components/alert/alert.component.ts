import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() message : HttpErrorResponse | any;
  @Output() closeEvent = new EventEmitter<boolean>()

  onClose(){
    this.closeEvent.emit(true);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
