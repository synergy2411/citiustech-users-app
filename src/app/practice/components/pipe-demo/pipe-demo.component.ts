import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  promise = new Promise((resolve, reject) => {
    // XHR Call - GET -> 1-5Seconds
    setTimeout(() => {
      resolve("Here the data comes...")
    }, 4000);
  })

  contactNumber = 987654321;

  filteredStatus = '';
  sortOrder : string;

  todoCollection = [
    {label : "grocery", status : "done"},
    {label : "shopping", status : "pending"},
    {label : "insurance", status : "done"},
    {label : "planting", status : "pending"},
  ]

  onAddItem(){
    // Impure Change
    this.todoCollection.push({label : "New Task", status : "pending"})
    // Pure Change
    // this.todoCollection = [
    //   {label : "grocery", status : "done"},
    //   {label : "shopping", status : "pending"},
    //   {label : "insurance", status : "done"},
    //   {label : "planting", status : "pending"},
    //   {label : "New Item", status : "pending"}
    // ]

  }
  constructor() { }

  ngOnInit(): void {
  }

}
