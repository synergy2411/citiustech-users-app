import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-i-am-lazy',
  templateUrl: './i-am-lazy.component.html',
  styleUrls: ['./i-am-lazy.component.css']
})
export class IAmLazyComponent implements OnInit {

  constructor(public sharedService : SharedService) { }

  onIncrease(){
    this.sharedService.sharedCounter++
  }
  ngOnInit(): void {
  }

}
