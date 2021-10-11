import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-demo',
  templateUrl: './async-demo.component.html',
  styleUrls: ['./async-demo.component.css'],
})
export class AsyncDemoComponent implements OnInit {
  returnPromise() {
    let promise = new Promise((resolve, reject) => {
      console.log("Promise executed")
      resolve("First Package")
    });
    return promise;
  }

  onPromise() {
    console.log("Start")
    this.returnPromise().then(console.log);
    console.log("End")
  }

  constructor() {}

  ngOnInit(): void {

  }
}
