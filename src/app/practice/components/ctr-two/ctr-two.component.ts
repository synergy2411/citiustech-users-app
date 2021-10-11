import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ctr-two',
  templateUrl: './ctr-two.component.html',
  styleUrls: ['./ctr-two.component.css']
})
export class CtrTwoComponent implements OnInit {


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
