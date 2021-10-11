import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent {

  // from scratch with custom logic - Observable

  obs$ : Observable<any>
  unSub$ : Subscription;

  // Promises are eagerly executed
  createPromise(){
    return new Promise((resolve, reject) => {
      console.log("Promise : start")
      resolve("First Packaged : PRomise")
    })
  }

  // Observables are lazily executed
  createObservable(){
    return new Observable( observer => {
      setTimeout(()=>{
        observer.next("First Package")}, 1000)
      setTimeout(()=>{
        observer.next("Second Package")}, 2000)
      setTimeout(()=>{
        observer.next("Third Package")}, 4000)
        setTimeout(() => {
          observer.error(new Error("Something bad happened"))
        }, 5000)
      setTimeout(()=>{
        observer.next("Fourth Package")}, 6000)
        setTimeout(() => {
          observer.complete()
        }, 8000)
      })
  }

  onUnsubscribe(){
    this.unSub$.unsubscribe();
  }

  packages : Array<string> =[]

  onSubscribe(){
    this.unSub$=this.createObservable().subscribe({
      next : (data: string) => {
        console.log(data);
        this.packages.push(data)
      },
      error : err => console.error(err),
      complete : () => console.log("COMPLETED")
    });
    this.createPromise().then(console.log);
    // this.obs$.subscribe({
    //   next : (data) => console.log(data),
    //   error : (err) => console.log(err),
    //   complete : () => console.log("COMPLETED")
    // })
  }

}
