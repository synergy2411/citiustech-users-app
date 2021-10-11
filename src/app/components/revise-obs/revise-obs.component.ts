import { Component } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-revise-obs',
  templateUrl: './revise-obs.component.html',
  styleUrls: ['./revise-obs.component.css']
})
export class ReviseObsComponent {

  obs$ = new Observable(observer => {
    observer.next("First Package")
    observer.next("Second Package")
    observer.next("Third Package")
    observer.complete()
  })

  onSubscribe(){
    this.obs$.pipe(
      map(data => 'My ' + data),
      take(2)
    ).subscribe(console.log)
  }

}
