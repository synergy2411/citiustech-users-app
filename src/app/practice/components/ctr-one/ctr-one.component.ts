import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ctr-one',
  templateUrl: './ctr-one.component.html',
  styleUrls: ['./ctr-one.component.css'],
  providers:  [DataService]
})
export class CtrOneComponent implements OnInit {

  constructor(private dataService : DataService) { }

  getCounter(){
    return this.dataService.counter;
  }

  increase(){
    this.dataService.counter++;
  }

  ngOnInit(): void {
  }

}
